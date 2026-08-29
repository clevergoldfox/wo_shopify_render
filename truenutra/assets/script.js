const kp_settings = {"kopy_shield":true,"block_extensions":true,"kick_spies":true,"protect_images":false,"disable_shortcuts":true,"global_config":{"ipWhitelist":[" 50.81.104.15","2001:4860:7:70e::7"],"isAdminWhitelisted":true},"block_inspect":false}
const kp_config = {
	global_config: kp_settings?.global_config || null,
	protect_text: kp_settings?.protect_text || false,
	protect_images: kp_settings?.protect_images || false,
	disable_shortcuts: kp_settings?.disable_shortcuts || false,
	geolocation_redirect: kp_settings?.geolocation_redirect || null,
	block_countries: kp_settings?.block_countries || null,
	block_inspect: kp_settings?.block_inspect || false,
	kick_spies: kp_settings?.kick_spies || false,
	block_extensions: kp_settings?.block_extensions || false
}
const kp_isAdmin = typeof window?.Shopify?.AdminBarInjector === "function" || Array.from(document.querySelectorAll("script")).filter(script => script?.innerHTML?.includes("Shopify.AdminBarInjector")).length > 0
const kp_apiDomain = "https://app.kopy.app"
const kp_domain = "https://kopy-protect.fly.dev"
console.log("SETTINGS", { kp_settings, kp_config, kp_isAdmin, kp_apiDomain, kp_domain })




async function kp_init() {
	let userIp = null
	let userCountry = null

	const getIpAndCountry = async () => {
		let ip = null
		let country = null

		await fetch(`${kp_apiDomain}/api/protect/getCountryFromIP`)
			.then(res => res.json())
			.then(json => {
				console.log("KP - Response", json)
				if (json.ipAddress) {
					ip = json.ipAddress
				}

				if (json.country) {
					country = json.country
				}
			})
			.catch(err => {
				console.error(err)
			})

		const userIp = ip
		const userCountry = country

		return { ip, country }
	}

	if (kp_config?.global_config?.isAdminWhitelisted && kp_isAdmin) {
		console.log("KP - User is admin and whitelisted")
		return
	}

	if (kp_config?.global_config?.ipWhitelist?.length) {
		const { ip } = await getIpAndCountry()

		if (kp_config.global_config.ipWhitelist.includes(ip)) {
			console.log("KP - User is in global whitelist")
			return
		}
	}





	// Scripts

	const setupProtectText = () => {
		const protectTextCss = document.createElement("style")
		protectTextCss.innerHTML = `
			body, body * , * {
				-webkit-touch-callout: none !important;
				-webkit-user-select: none !important;
				-khtml-user-select: none !important;
				-moz-user-select: none !important;
				-ms-user-select: none !important;
				user-select: none !important;
			}
		`
	
		document.head.appendChild(protectTextCss)
	}
	
	const setupProtectImages = () => {
		document.addEventListener("contextmenu", (e) => {
			if (e.target?.tagName === "IMG") {
				e.preventDefault()
			}
		})

		const protectImagesCss = document.createElement("style")
		protectImagesCss.innerHTML = `
			img:not([data-zoom]) {
				pointer-events: none !important;
			}
		`
	
		document.head.appendChild(protectImagesCss)
	}
	
	const setupDisableShortcuts = () => {
		// Prevent Ctrl + A (Select All), Ctrl + P (Print Page), Ctrl + S (Save Page), Ctrl + U (View Source Code),
		document.addEventListener("keydown", (event) => {
			const blockedShortCutKeys = "apsu"
			if (
				// Block shortcuts for Windows
				(event.ctrlKey && blockedShortCutKeys.indexOf(event.key) !== -1)
				// Block Select All shortcut for macOS
				|| (event.metaKey && event.key === "a")
				// Block Print Page shortcut for macOS
				|| (event.metaKey && event.key === "p")
				// Block Save Page shortcut for macOS
				|| (event.metaKey && event.key === "s")
				// Block View Source Code shortcut for macOS
				|| (event.metaKey && event.altKey && event.key === "Dead")
			) {
				event.preventDefault()
			}
		})
	}
	
	const setupBlockInspect = () => {
		const setupBlockInspectFallback = () => {
			document.addEventListener("keydown", (e) => {
				const ctrl = e.ctrlKey || e.metaKey
				const shift = e.shiftKey || e.altKey
		
				if (e.code === "F12") {
					e.preventDefault()
				}
		
				if (ctrl && shift && e.code === "KeyI") {
					e.preventDefault()
				}
		
				if (ctrl && shift && e.code === "KeyJ") {
					e.preventDefault()
				}
		
				if (ctrl && shift && e.code === "KeyC") {
					e.preventDefault()
				}
		
				if (ctrl && e.code === "KeyU") {
					e.preventDefault()
				}
			})
		
			document.addEventListener("contextmenu", (event) => event.preventDefault())
		
			// Solves issue for leadingwish.com, where a script would make disable-devtool not work
			const tempBlockingElement = document.querySelector("#WidgetFloaterPanels script")
			if (tempBlockingElement) {
				if (window.intervalId) {
					clearInterval(window.intervalId)
				}
				tempBlockingElement.remove()
			}
		}
		
		if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			const ignoreFalseTriggers = {
				"karnems.myshopify.com": [3, 4],
				"hemmaval.myshopify.com": [3, 4]
			}
			const disable_devtool_script = document.createElement("script")
		
			disable_devtool_script.src = `${kp_domain}/ddt.js`
			
			if (ignoreFalseTriggers[window?.Shopify?.shop]) {
				disable_devtool_script.onload = function() {
					window.DisableDevtool({
						ondevtoolopen: (trigger, next) => {
							if (ignoreFalseTriggers[window?.Shopify?.shop].includes(trigger)) {
								return
							} else {
								next()
							}
						},
					})
				}
			} else {
				disable_devtool_script.setAttribute("disable-devtool-auto", "")
				disable_devtool_script.setAttribute("disable-menu", false)
			}

			// For testing, uncomment these lines and remove disable-devtool-auto attribute
			// disable_devtool_script.onload = function() {
			// 	console.log("ddt loaded", window.DisableDevtool)
			// 	window.DisableDevtool({
			// 		ondevtoolopen: (trigger, next) => {
			// 			console.warn("ddt trigger", trigger)
			// 			// alert(trigger)
			// 		},
			// 	})
			// }
			
			setupBlockInspectFallback()
			document.head.append(disable_devtool_script)
		}
	}
	
	const setupBlockExtensionsAndSpies = () => {
		const block_extensions_enabled = kp_config?.block_extensions
		const kick_spies_enabled = kp_config?.kick_spies
		
		const kickSpies = () => {
			if (kick_spies_enabled) {
				window.location.href = "about:blank"
			}
		}
		
		const hideSpyExtension = (element) => {
			if (block_extensions_enabled && element) {
				element.style = "display: none !important;"
			}
		}
		
		const blockExtensions = () => {
			const pp1 = document.querySelector(".extension-container .extension-content")
			const pp2 = document.querySelector("a[href*='pipiads']")?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode
			const pp3 = document.querySelector(".ppspy-container")
			const pp4 = document.querySelector(".ppspy-exp-view-root")
			
			const ali1 = document.querySelector("div[data-btn-chat][data-setting-item-active]")?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode
			const ali2 = document.querySelector("[id$=wr]")
			const ali3 = document.querySelector("[icontype='pro-solid'][data-prefix='fas'][data-icon='angle-right']")?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode
			const ali4 = document.querySelector("#ah-body")
			const ali5 = document.querySelector("#ah-app")
		
			const uuspy = document.querySelector("[id*='uuspy']")
		
			const shopifyRaise = document.querySelector("#shopify-raise-container")
		
			const shopifyAnalizer = document.querySelector(".ixspy-tools")
			
			const unispy = document.querySelector("#unispy-app")
		
			const commerceInspector = document.querySelector("#ci-extension-div")
			
			const simplyTrends = document.querySelector("#simplytrends-main-extension-root")
		
			const dropshipio = Array.from(document.querySelectorAll("iframe"))?.find(iframe => {
				const selector = iframe?.contentDocument?.querySelector("[href*='dropship.io']")
				if (selector) {
					return true
				}
			})
		
			const saleSource = document.querySelector("a[href*='salesource.com']")?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode
		
			const shopifyhunt = document.querySelector("#shopify-raise-container")

			const shinecommerce = document.querySelector("#shinecommerce-extension-div")

			if (pp1) {
				hideSpyExtension(pp1)
				kickSpies()
			}
			if (pp2) {
				hideSpyExtension(pp2)
				kickSpies()
			}
			if (pp3) {
				hideSpyExtension(pp3)
				kickSpies()
			}
			if (pp4) {
				hideSpyExtension(pp4)
				kickSpies()
			}
			if (ali1) {
				hideSpyExtension(ali1)
				kickSpies()
			}
			if (ali2 && `${ali2.parentNode.id}wr` === ali2.id) {
				hideSpyExtension(ali2)
				kickSpies()
			}
			if (ali3 && ali3.parentNode?.tagName && ali3.parentNode.tagName === "BODY") {
				hideSpyExtension(ali3)
				kickSpies()
			}
			if(ali4) {
				hideSpyExtension(ali4)
				kickSpies()
			}
			if(ali5) {
				hideSpyExtension(ali5)
				kickSpies()
			}
			if (uuspy) {
				hideSpyExtension(uuspy)
				kickSpies()
			}
			if (shopifyRaise) {
				hideSpyExtension(shopifyRaise)
				kickSpies()
			}
			if (shopifyAnalizer) {
				hideSpyExtension(shopifyAnalizer)
				kickSpies()
			}
			if (unispy) {
				hideSpyExtension(unispy)
				kickSpies()
			}
			if (commerceInspector) {
				hideSpyExtension(commerceInspector)
				kickSpies()
			}
			if (simplyTrends) {
				hideSpyExtension(simplyTrends)
				kickSpies()
			}
			if (dropshipio) {
				hideSpyExtension(dropshipio)
				kickSpies()
			}
			if (saleSource && saleSource.id && saleSource.id === "shopify_app_wrapper") {
				hideSpyExtension(saleSource)
				kickSpies()
			}
			if (shopifyhunt) {
				hideSpyExtension(shopifyhunt)
				kickSpies()
			}
			if (shinecommerce) {
				hideSpyExtension(shinecommerce)
				kickSpies()
			}
		}
		
		if (block_extensions_enabled || kick_spies_enabled) {
			blockExtensions()
			setInterval(blockExtensions, 500)
		}
	}
	
	const setupBlockCountries = async () => {
		const blockCountriesEnabled = kp_config?.block_countries.enabled || false
		const blockCountriesBlockedPageImg = kp_config?.block_countries.blockedPageImg || ""
		const blockCountriesCountriesBlocked = kp_config?.block_countries.countriesBlocked || []
		const blockCountriesIpWhitelist = kp_config?.block_countries.ipWhitelist || []

		const displayAccessDenied = () => {
			const container = document.createElement("div")
			container.style.display = "flex"
			container.style.justifyContent = "center"
			container.style.flexDirection = "column"
			container.style.alignItems = "center"
			container.style.marginTop = "8rem"

			const img = document.createElement("img")
			img.style.height = "30rem"

			if (blockCountriesBlockedPageImg) {
				img.src = blockCountriesBlockedPageImg
			}
			
			const title = document.createElement("span")
			title.innerText = "Access Blocked"
			title.style.fontSize = "4rem"
			title.style.fontWeight = "800"
			
			const content = document.createElement("div")
			content.innerText = "This website is not available at the moment"
			content.style.marginTop = "1rem"

			container.appendChild(img)
			// container.appendChild(title)
			container.appendChild(content)

			document.body.innerHTML = ""
			document.body.appendChild(container)
		}

		if (blockCountriesEnabled) {
			let ipAddress = null
			let countryCode = null

			if (userIp) {
				ipAddress = userIp
				countryCode = userCountry
			} else {
				const { ip, country } = await getIpAndCountry()
				ipAddress = ip
				countryCode = country
			}
			
			if (
				!(blockCountriesIpWhitelist.includes(ipAddress))
				&& blockCountriesCountriesBlocked.includes(countryCode)
			) {
				displayAccessDenied()
			}
		}
	}
	
	const setupGeolocationRedirect = async () => {
		const geolocationRedirectEnabled = kp_config?.geolocation_redirect.enabled || false
		const geolocationRedirects = kp_config?.geolocation_redirect.redirects || []
		
		if (geolocationRedirectEnabled) {
			let ipAddress = null
			let countryCode = null

			if (userIp) {
				ipAddress = userIp
				countryCode = userCountry
			} else {
				const { ip, country } = await getIpAndCountry()
				ipAddress = ip
				countryCode = country
			}

			for (const redirect of geolocationRedirects) {
				if (
					redirect.active
					&& redirect.redirectTo
					&& (
						redirect.countriesAndIpsToRedirect.includes(countryCode)
						|| redirect.countriesAndIpsToRedirect.includes(ipAddress)
					) 
				) {
					const redirectToWithHttps =
						redirect.redirectTo.startsWith("https://") ?
							redirect.redirectTo
						: redirect.redirectTo.startsWith("http://") ?
							redirect.redirectTo.replace("http://", "https://")
						: `https://${redirect.redirectTo}`

					const pathname = window.location.pathname
					const queryString = window.location.search
					const maintainPathString = redirect.maintainPath ? `${pathname === "/" ? "" : pathname}${queryString}` : ""

					const redirectToUrl = `${redirectToWithHttps}${maintainPathString}`

					// Prevent redirect loop
					try {
						const isSameDomainRedirect = new URL(redirectToUrl).hostname === window.location.hostname

						if (!isSameDomainRedirect) {
							window.location.replace(redirectToUrl)
						} else if (isSameDomainRedirect && !window.location.href.startsWith(redirectToWithHttps)) {
							// Prevents redirect loop when redirecting to same domain
							
							if (window.location.pathname.split("/")?.[1]?.match(/^[a-zA-Z]{2}(-[a-zA-Z]{2})?$/g)) {
								// Redirects store.com/en-en/products/123 to store.com/es-es/products/123
								
								const redirectToLocale = new URL(redirectToWithHttps).pathname.split("/")?.[1]
								const urlWithReplacedLocale = window.location.href.replace(
									/\/[a-zA-Z]{2}(-[a-zA-Z]{2})?\//g,
									`/${redirectToLocale}/`
								)

								window.location.replace(urlWithReplacedLocale)
							} else {
								// Redirects store.com/products/123 to store.com/es-es/products/123

								window.location.replace(redirectToUrl)
							}
						}
					} catch (error) {
						console.error(error)
					}
				}
			}
		}
	}
	


	console.log("KP - Initializing v2.0")
	if (kp_config?.protect_text) {
		setupProtectText()
	}
	if (kp_config?.protect_images) {
		setupProtectImages()
	}
	if (kp_config?.disable_shortcuts) {
		setupDisableShortcuts()
	}
	if (kp_config?.block_inspect) {
		setupBlockInspect()
	}
	if (kp_config?.block_extensions || kp_config?.kick_spies) {
		setupBlockExtensionsAndSpies()
	}
	if (kp_config?.block_countries) {
		setupBlockCountries()
	}
	if (kp_config?.geolocation_redirect) {
		setupGeolocationRedirect()
	}
}

kp_init()
