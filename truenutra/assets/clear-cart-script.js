/* Using a self-executing anonymous function - (function(){})(); - so that all variables and functions defined within
aren’t available to the outside world. */

(function () {

    /* Load Script function we may need to load jQuery from the Google's CDN */
    /* That code is world-reknown. */
    /* One source: http://snipplr.com/view/18756/loadscript/ */

    var loadScript = function (url, callback) {

        var script = document.createElement("script");
        script.type = "text/javascript";

        // If the browser is Internet Explorer.
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
            // For any other browser.
        } else {
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);

    };

    /* This is my app's JavaScript */
    var myAppJavaScript = function ($) {
        // $ in this scope references the jQuery object we'll use.
        // Don't use jQuery, or jQuery191, use the dollar sign.
        // Do this and do that, using $.

        console.log('%cAddify Clear Cart V - 75', 'color:steelblue; font-size:1rem; font-weight:bold');

        console.log("jquery");

        // code for clear cart button

        var cust_tags = $('.clrcrt-customer-tags').val();

        var baseURL = 'https://clear-cart.addify-app.com';

        let adf_confirmBtn_text = '';
        let adf_cancelBtn_text = '';
        let adf_confirmBtn_text_input = document.getElementById('adf-confirmBtn-text');
        if (adf_confirmBtn_text_input != null) {
            adf_confirmBtn_text = adf_confirmBtn_text_input.value;
        }

        let adf_cancelBtn_text_input = document.getElementById('adf-cancelBtn-text');
        if (adf_cancelBtn_text_input != null) {
            adf_cancelBtn_text = adf_cancelBtn_text_input.value;
        }


        if (adf_confirmBtn_text == '' || adf_confirmBtn_text == null) {
            adf_confirmBtn_text = 'Confirm';
        }

        if (adf_cancelBtn_text == '' || adf_cancelBtn_text == null) {
            adf_cancelBtn_text = 'Cancel';
        }


        if (Shopify.shop == '0f747e-2.myshopify.com') {
            adf_cancelBtn_text = 'ביטול';
            adf_confirmBtn_text = 'אישור';

        }

        var adfclcrt_popup_content = '';


        //  for local storage update start here

        let cacheKey_Adf = "settingsClearCartData_" + Shopify.shop;
        let cacheTimeKey_Adf = cacheKey_Adf + "_timestamp";
        let cacheDuration_Adf = 60 * 60 * 1000; // 1 hour in ms

        let cachedData_Adf = localStorage.getItem(cacheKey_Adf);
        let cachedTime_Adf = localStorage.getItem(cacheTimeKey_Adf);
        let isCacheValid_Adf = cachedData_Adf && cachedTime_Adf && (Date.now() - parseInt(cachedTime_Adf) < cacheDuration_Adf);



        //  for local storage update end here




        var item_count = fetch(window.Shopify.routes.root + 'cart.js')
            .then(response => response.json())
            .then(data => { return data.item_count });

        const printContents = (item_count) => {
            item_count.then((item) => {
                var product_count = item;

                // ###############################################

                if (isCacheValid_Adf) {
                    var response = JSON.parse(cachedData_Adf);
                    console.log('local store');

                    sessionResponse(response);

                } else {
                    console.log('AJAX CALL STARTED', new Date());
                    $.ajax({
                        type: "GET",
                        // url: baseURL + "/api/clearcart?shopName=" + Shopify.shop,
                        url: baseURL + "/api/settingsclearcart?shopName=" + Shopify.shop,
                        dataType: "json",
                        contentType: "application/json",
                        success: function (response) {

                            // Response ko localStorage mai save kardo
                            localStorage.setItem(cacheKey_Adf, JSON.stringify(response));
                            localStorage.setItem(cacheTimeKey_Adf, Date.now().toString());

                            sessionResponse(response);

                        }

                    });
                }




                function sessionResponse(response) {

                    // redirect url after clearing cart
                    var redirect_url_after_clear = null;
                    if (response.clearCart.redirect_url != null) {
                        redirect_url_after_clear = 'https://' + Shopify.shop + response.clearCart.redirect_url;
                    }

                    if (product_count > response.clearCart.products_limit && response.clearCart.app_status == 1) {

                        let clearCartbuttonHtml = '';

                        if (response.clearCart.all_tag == 2) {
                            if ($.inArray(cust_tags, response.clearCart.user_tags) >= 0) {
                                if (response.clearCart.display_as == 'button') {
                                    if (Shopify.shop == 'rosewood-hk-shop.myshopify.com') {
                                        var cartDrawerForm = document.querySelector('form[action="/cart"]').getElementsByTagName('ul')[0];
                                        if (cartDrawerForm) {
                                            // first we have empty it to prevent repeatition
                                            var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                            if (adf_clr_crt_btn_container) {
                                                $('#adf_clr_crt_btn_container').remove();
                                            }
                                            cartDrawerForm.insertAdjacentHTML('afterend', '<div id="adf_clr_crt_btn_container" style="text-align: ' + response.clearCart.clear_cart_position + ';padding-right: 1.25rem;padding-left: .61rem;margin: 1rem;">\
                                                <button id="clrcrt-clear-cart-btn" style="background: '+ response.clearCart.button_color + ';color: ' + response.clearCart.button_text_color + ';border-radius:3px; border: 1px solid ' + response.clearCart.button_text_color + 'width: 8rem;padding: .6rem;">' + response.clearCart.button_label + '</button></div>');
                                        }
                                    }
                                    else if (Shopify.shop == '0f747e-2.myshopify.com') {
                                        var cartDrawerForm = document.querySelectorAll('.kaching-cart__subtotal')[0];
                                        if (cartDrawerForm) {
                                            // first we have empty it to prevent repeatition
                                            var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                            if (adf_clr_crt_btn_container) {
                                                $('#adf_clr_crt_btn_container').remove();
                                            }
                                            cartDrawerForm.insertAdjacentHTML('afterend', '<div id="adf_clr_crt_btn_container" style="text-align: ' + response.clearCart.clear_cart_position + ';padding-right: 1.25rem;padding-left: .61rem;margin: 1rem;">\
                                                <button id="clrcrt-clear-cart-btn" style="background: '+ response.clearCart.button_color + ';color: ' + response.clearCart.button_text_color + ';border-radius:3px; border: 1px solid ' + response.clearCart.button_text_color + 'width: 8rem;padding: .6rem;">' + response.clearCart.button_label + '</button></div>');
                                        }
                                    }


                                    $('#clrcrt-clear-cart-button').html('<button id="clrcrt-clear-cart-btn" style="background-color:' + response.clearCart.button_color + '; color:' + response.clearCart.button_text_color + ';border-radius:3px; border: 1px solid ' + response.clearCart.button_text_color + '">\
                                        '+ response.clearCart.button_label + '\
                                        </button>');

                                    if (Shopify.shop == 'mixtapekitchens.myshopify.com') {
                                        $('#clrcrt-clear-cart-button').remove();
                                        $('[data-cart-items]').append(`<div id="clrcrt-clear-cart-button">
                                                <button id="clrcrt-clear-cart-btn" style="background-color:${response.clearCart.button_color}; color:${response.clearCart.button_text_color}; border-radius:3px; border:1px solid ${response.clearCart.button_text_color}">${response.clearCart.button_label}
                                                </button>
                                                </div>`);
                                        // document.querySelector('[data-cart-items]').insertAdjacentHTML(
                                    }

                                    clearCartbuttonHtml = `<div id="clrcrt-clear-cart-button" class="clear-cart-div-drawer">
                                        <button id="clrcrt-clear-cart-btn" style="background-color:${response.clearCart.button_color}; color:${response.clearCart.button_text_color}; border-radius:3px; border:1px solid ${response.clearCart.button_text_color}">${response.clearCart.button_label}
                                                </button>
                                        </div>`;

                                } else if (response.clearCart.display_as == 'link') {
                                    if (Shopify.shop == 'rosewood-hk-shop.myshopify.com') {
                                        var cartDrawerForm = document.querySelector('form[action="/cart"]').getElementsByTagName('ul')[0];

                                        if (cartDrawerForm) {
                                            // first we have empty it to prevent repeatition
                                            var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                            if (adf_clr_crt_btn_container) {
                                                $('#adf_clr_crt_btn_container').remove();
                                            }
                                            cartDrawerForm.insertAdjacentHTML('afterend', '<div id="adf_clr_crt_btn_container" style="text-align: ' + response.clearCart.clear_cart_position + ';padding-right: 1.25rem;padding-left: .61rem;margin: 1rem;">\
                                                <p id="clrcrt-clear-cart-btn" style="cursor: pointer; text-decoration:underline; text-underline-offset: 0.1rem; color:'+ response.clearCart.link_text_color + '">' + response.clearCart.link_label + '</p></div>');
                                        }

                                    } else if (Shopify.shop == '0f747e-2.myshopify.com') {
                                        var cartDrawerForm = document.querySelectorAll('.kaching-cart__subtotal')[0];
                                        if (cartDrawerForm) {
                                            // first we have empty it to prevent repeatition
                                            var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                            if (adf_clr_crt_btn_container) {
                                                $('#adf_clr_crt_btn_container').remove();
                                            }
                                            cartDrawerForm.insertAdjacentHTML('afterend', '<div id="adf_clr_crt_btn_container" style="text-align: ' + response.clearCart.clear_cart_position + ';padding-right: 1.25rem;padding-left: .61rem;margin: 1rem;">\
                                                <button id="clrcrt-clear-cart-btn" style="background: '+ response.clearCart.button_color + ';color: ' + response.clearCart.button_text_color + ';border-radius:3px; border: 1px solid ' + response.clearCart.button_text_color + 'width: 8rem;padding: .6rem;">' + response.clearCart.button_label + '</button></div>');
                                        }
                                    }



                                    $('#clrcrt-clear-cart-button').html('<p id="clrcrt-clear-cart-btn" style="cursor:pointer; text-decoration:underline; text-underline-offset: 0.3rem; color:' + response.clearCart.link_text_color + '">' + response.clearCart.link_label + '</p>')

                                    if (Shopify.shop == 'mixtapekitchens.myshopify.com') {
                                        $('#clrcrt-clear-cart-button').remove();
                                        $('[data-cart-items]').append(`<div id="clrcrt-clear-cart-button">
                                                <p id="clrcrt-clear-cart-btn" style="cursor:pointer; text-decoration:underline; text-underline-offset: 0.3rem; color:${response.clearCart.link_text_color};">${response.clearCart.link_label}
                                                </p>
                                                </div>`);
                                        // document.querySelector('[data-cart-items]').insertAdjacentHTML(
                                    }

                                    clearCartbuttonHtml = `<div id="clrcrt-clear-cart-button" class="clear-cart-div-drawer">
                                        <p id="clrcrt-clear-cart-btn" style="cursor:pointer; text-decoration:underline; text-underline-offset: 0.3rem; color:${response.clearCart.link_text_color};">${response.clearCart.link_label}
                                                </p>
                                        </div>`;

                                }

                            }
                        } else {
                            if (response.clearCart.display_as == 'button') {
                                if (Shopify.shop == 'rosewood-hk-shop.myshopify.com') {
                                    var cartDrawerForm = document.querySelector('form[action="/cart"]').getElementsByTagName('ul')[0];
                                    console.log(cartDrawerForm);
                                    if (cartDrawerForm) {
                                        // first we have empty it to prevent repeatition
                                        var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                        if (adf_clr_crt_btn_container) {
                                            $('#adf_clr_crt_btn_container').remove();
                                        }
                                        cartDrawerForm.insertAdjacentHTML('afterend', '<div id="adf_clr_crt_btn_container" style="text-align: ' + response.clearCart.clear_cart_position + ';padding-right: 1.25rem;padding-left: .61rem;margin: 1rem;">\
                                            <button id="clrcrt-clear-cart-btn" style="background: '+ response.clearCart.button_color + ';color: ' + response.clearCart.button_text_color + ';border-radius:3px; border: 1px solid ' + response.clearCart.button_text_color + 'width: 8rem;padding: .6rem;">' + response.clearCart.button_label + '</button></div>');
                                    }

                                } else if (Shopify.shop == '0f747e-2.myshopify.com') {
                                    var cartDrawerForm = document.querySelectorAll('.kaching-cart__subtotal')[0];
                                    if (cartDrawerForm) {
                                        // first we have empty it to prevent repeatition
                                        var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                        if (adf_clr_crt_btn_container) {
                                            $('#adf_clr_crt_btn_container').remove();
                                        }
                                        cartDrawerForm.insertAdjacentHTML('afterend', '<div id="adf_clr_crt_btn_container" style="text-align: ' + response.clearCart.clear_cart_position + ';padding-right: 1.25rem;padding-left: .61rem;margin: 1rem;">\
                                                <button id="clrcrt-clear-cart-btn" style="background: '+ response.clearCart.button_color + ';color: ' + response.clearCart.button_text_color + ';border-radius:3px; border: 1px solid ' + response.clearCart.button_text_color + 'width: 8rem;padding: .6rem;">' + response.clearCart.button_label + '</button></div>');
                                    }
                                }

                                $('#clrcrt-clear-cart-button').html('<button id="clrcrt-clear-cart-btn" style="background-color:' + response.clearCart.button_color + '; color:' + response.clearCart.button_text_color + ';border-radius:3px; border: 1px solid ' + response.clearCart.button_text_color + '">\
                                    '+ response.clearCart.button_label + '\
                                    </button>');


                                if (Shopify.shop == 'mixtapekitchens.myshopify.com') {
                                    $('#clrcrt-clear-cart-button').remove();
                                    $('[data-cart-items]').append(`<div id="clrcrt-clear-cart-button">
                                            <button id="clrcrt-clear-cart-btn" style="background-color:${response.clearCart.button_color}; color:${response.clearCart.button_text_color}; border-radius:3px; border:1px solid ${response.clearCart.button_text_color}">${response.clearCart.button_label}
                                            </button>
                                            </div>`);
                                    // document.querySelector('[data-cart-items]').insertAdjacentHTML(
                                }


                                clearCartbuttonHtml = `<div id="clrcrt-clear-cart-button" class="clear-cart-div-drawer">
                                        <button id="clrcrt-clear-cart-btn" style="background-color:${response.clearCart.button_color}; color:${response.clearCart.button_text_color}; border-radius:3px; border:1px solid ${response.clearCart.button_text_color}">${response.clearCart.button_label}
                                                </button>
                                        </div>`;


                            } else if (response.clearCart.display_as == 'link') {
                                if (Shopify.shop == 'rosewood-hk-shop.myshopify.com') {
                                    var cartDrawerForm = document.querySelector('form[action="/cart"]').getElementsByTagName('ul')[0];
                                    console.log(cartDrawerForm);
                                    if (cartDrawerForm) {
                                        // first we have empty it to prevent repeatition
                                        var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                        if (adf_clr_crt_btn_container) {
                                            $('#adf_clr_crt_btn_container').remove();
                                        }
                                        cartDrawerForm.insertAdjacentHTML('afterend', '<div id="adf_clr_crt_btn_container" style="text-align: ' + response.clearCart.clear_cart_position + ';padding-right: 1.25rem;padding-left: .61rem;margin: 1rem;">\
                                            <p id="clrcrt-clear-cart-btn" style="cursor: pointer; text-decoration:underline; text-underline-offset: 0.1rem; color:'+ response.clearCart.link_text_color + '">' + response.clearCart.link_label + '</p></div>');
                                    }
                                } else if (Shopify.shop == '0f747e-2.myshopify.com') {
                                    var cartDrawerForm = document.querySelectorAll('.kaching-cart__subtotal')[0];
                                    if (cartDrawerForm) {
                                        // first we have empty it to prevent repeatition
                                        var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                        if (adf_clr_crt_btn_container) {
                                            $('#adf_clr_crt_btn_container').remove();
                                        }
                                        cartDrawerForm.insertAdjacentHTML('afterend', '<div id="adf_clr_crt_btn_container" style="text-align: ' + response.clearCart.clear_cart_position + ';padding-right: 1.25rem;padding-left: .61rem;margin: 1rem;">\
                                                <button id="clrcrt-clear-cart-btn" style="background: '+ response.clearCart.button_color + ';color: ' + response.clearCart.button_text_color + ';border-radius:3px; border: 1px solid ' + response.clearCart.button_text_color + 'width: 8rem;padding: .6rem;">' + response.clearCart.button_label + '</button></div>');
                                    }
                                }


                                $('#clrcrt-clear-cart-button').html('<p id="clrcrt-clear-cart-btn" style="cursor:pointer; text-decoration:underline; text-underline-offset: 0.3rem; color:' + response.clearCart.link_text_color + '">' + response.clearCart.link_label + '</p>')

                                if (Shopify.shop == 'mixtapekitchens.myshopify.com') {
                                    $('#clrcrt-clear-cart-button').remove();
                                    $('[data-cart-items]').append(`<div id="clrcrt-clear-cart-button">
                                            <p id="clrcrt-clear-cart-btn" style="cursor:pointer; text-decoration:underline; text-underline-offset: 0.3rem; color:${response.clearCart.link_text_color};">${response.clearCart.link_label}
                                            </p>
                                            </div>`);
                                    // document.querySelector('[data-cart-items]').insertAdjacentHTML(
                                }

                                clearCartbuttonHtml = `<div id="clrcrt-clear-cart-button" class="clear-cart-div-drawer">
                                    <p id="clrcrt-clear-cart-btn" style="cursor:pointer; text-decoration:underline; text-underline-offset: 0.3rem; color:${response.clearCart.link_text_color};">${response.clearCart.link_label}
                                                </p>
                                    </div>`;
                            }
                        }

                        // Appending button in drawer


                        // $('.drawer__footer').prepend(clearCartbuttonHtml);

                        let divElems = document.querySelectorAll('div');

                        console.log('length: ' + divElems.length);

                        let interv = setInterval(() => {
                            divElems = document.querySelectorAll('div');

                            console.log('length: ' + divElems.length);

                            for (let i = 0; i < divElems.length; i++) {
                                if (divElems[i].hasAttribute('class') && divElems[i].getAttribute('class').includes('drawer') && divElems[i].getAttribute('class').includes('footer')) {
                                    console.log(divElems[i]);
                                    $('.clear-cart-div-drawer').remove();
                                    $(divElems[i]).prepend(clearCartbuttonHtml);

                                    clearInterval(interv);
                                }
                            }
                        }, 1000);

                        if (Shopify.shop == 'iacd61-vp.myshopify.com') {
                            $('.clear-cart-div-drawer').remove();
                            $('.xb_slide_cart_footer_wrapper').prepend(clearCartbuttonHtml);
                        }


                        setTimeout(() => {
                            clearInterval(interv);
                        }, 5000);


                    } else {
                        $('#clrcrt-clear-cart-button').html('');
                        var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                        if (adf_clr_crt_btn_container) {
                            $('#adf_clr_crt_btn_container').remove();
                        }
                    }



                    // Code for popup box





                    // checking popup-box status

                    if (response.clearCart.popup_box == 1) {
                        $(document).on('click', '#clrcrt-popup-confirm-btn', function (e) {
                            e.preventDefault();
                            $.ajax({
                                type: "POST",
                                url: "/cart/clear.js",
                                dataType: "json",
                                success: function (result) {
                                    if (redirect_url_after_clear != null) {


                                        window.location.href = redirect_url_after_clear;
                                    } else {
                                        location.reload();
                                    }
                                }
                            });
                        });
                    } else {
                        $(document).on('click', '#clrcrt-clear-cart-btn', function (e) {
                            console.log('clickeddd...');

                            e.preventDefault();
                            $.ajax({
                                type: "POST",
                                url: "/cart/clear.js",
                                dataType: "json",
                                success: function (result) {
                                    if (redirect_url_after_clear != null) {


                                        window.location.href = redirect_url_after_clear;
                                    } else {
                                        location.reload();
                                    }
                                }
                            });
                        }, true);
                    }

                    let clearCartPopup = document.getElementById('clrcrt-popup-box-inner');
                    console.log('div inner');



                    //code for button / link position

                    var clearCartBtnDiv = document.getElementById('clrcrt-clear-cart-button');
                    if (clearCartBtnDiv) {
                        if (response.clearCart.clear_cart_position == 'left') {
                            clearCartBtnDiv.style.textAlign = 'left';
                        } else if (response.clearCart.clear_cart_position == 'center') {
                            clearCartBtnDiv.style.textAlign = 'center';
                        } else if (response.clearCart.clear_cart_position == 'right') {
                            clearCartBtnDiv.style.textAlign = 'right';
                        }

                    }

                    // code for inactivity time


                    var inactivity_time = parseInt(response.clearCart.inactivity_time) * 60000; // converting min into millisec
                    console.log(inactivity_time);
                    var idleTime = 0;

                    if (response.clearCart.app_status == 1) {

                        var intervalID;

                        if (intervalID == null) {
                            intervalID = setInterval(timerIncrement, 5000);
                            console.log('set interv');
                        }

                        // Function to reset idle time and interval
                        function resetIdleTime() {
                            idleTime = 0;
                            clearInterval(intervalID);
                            localStorage.removeItem('idleTime');
                            intervalID = setInterval(timerIncrement, 5000);
                        }

                        // Zero the idle timer on mouse movement and other events
                        $(document).mousemove(resetIdleTime);
                        $(document).keypress(resetIdleTime);
                        $(document).keyup(resetIdleTime);
                        $(document).keydown(resetIdleTime);
                        $(document).mouseenter(resetIdleTime);
                        $(document).mousedown(resetIdleTime);
                        $(document).click(resetIdleTime);
                        $(document).scroll(resetIdleTime);

                        //Increment the idle time counter every minute.
                        function timerIncrement() {

                            let sessionIdleTime = localStorage.getItem('idleTime');
                            if (sessionIdleTime == null) {
                                idleTime = idleTime + 5000;

                            } else {
                                idleTime = parseInt(sessionIdleTime) + 5000;

                            }

                            localStorage.setItem('idleTime', idleTime);

                            // idleTime = idleTime * 60000;  // convrting idle time from min to milisec



                            if (idleTime >= inactivity_time) {
                                var item_count = fetch(window.Shopify.routes.root + 'cart.js')
                                    .then(response => response.json())
                                    .then(data => { return data.item_count });
                                const printContents = () => {
                                    item_count.then((item) => {
                                        var product_count = item;
                                        console.log('inside interval: ');
                                        if (product_count > 0 && response.clearCart.enable_inactivity_time == 1) {
                                            $.ajax({
                                                type: "POST",
                                                url: "/cart/clear.js",
                                                dataType: "json",
                                                success: function (result) {
                                                    if (redirect_url_after_clear != null) {


                                                        window.location.href = redirect_url_after_clear;
                                                    } else {
                                                        location.reload();
                                                    }
                                                }
                                            });
                                        }
                                    });
                                }
                                printContents();
                            }
                        }

                        // Check for inactivity on page load
                        window.onload = function () {
                            let sessionIdleTime = localStorage.getItem('idleTime');
                            if (sessionIdleTime != null) {
                                idleTime = parseInt(sessionIdleTime);
                                timerIncrement();
                            }
                        };
                    }



                    var inactivity_time = parseInt(response.clearCart.inactivity_time) * 60000; // converting hours into milliseconds
                    console.log('aa71ca only:' + inactivity_time);

                    // Function to clear the cart
                    function clearCart() {
                        fetch(window.Shopify.routes.root + 'cart.js')
                            .then(response => response.json())
                            .then(data => {
                                if (data.item_count > 0 && response.clearCart.enable_inactivity_time == 1) {
                                    $.ajax({
                                        type: "POST",
                                        url: "/cart/clear.js",
                                        dataType: "json",
                                        success: function (result) {
                                            if (redirect_url_after_clear != null) {


                                                window.location.href = redirect_url_after_clear;
                                            } else {
                                                location.reload();
                                            }
                                        }
                                    });
                                }
                            });
                    }

                    // Function to store the store closed time
                    function storeClosed() {
                        localStorage.setItem('storeClosedAt', Date.now());
                    }

                    // Function to update the last activity timestamp on store open
                    function updateLastActivity() {
                        localStorage.setItem('lastActivity', Date.now());
                    }

                    // Function to check inactivity on store open
                    function checkInactivityOnOpen() {
                        var storeClosedAt = parseInt(localStorage.getItem('storeClosedAt'));
                        var lastActivity = parseInt(localStorage.getItem('lastActivity'));
                        console.log('check inact aa71ca');
                        if (!isNaN(storeClosedAt)) {
                            var currentTime = Date.now();
                            var elapsedTime = currentTime - storeClosedAt;
                            console.log('curr aa71ca:' + currentTime);
                            console.log('elaps aa71ca:' + elapsedTime);
                            console.log('clos at aa71ca:' + storeClosedAt);

                            if (elapsedTime >= inactivity_time) {
                                console.log('clr cart for aa71ca');
                                clearCart();
                            } else {
                                console.log('open before aa71ca');
                                updateLastActivity(); // Reset the last activity timestamp
                            }
                        } else {
                            updateLastActivity(); // Initialize the last activity timestamp if it doesn't exist
                        }
                    }

                    // Check inactivity on window load



                    // Document ready as a backup
                    $(document).ready(function () {
                        console.log('document ready through jquery');
                        checkInactivityOnOpen();
                    });

                    // Set store closed time on window unload

                    $(window).on('beforeunload', function () {
                        console.log('beforeonload through jquery');
                        storeClosed();
                    });


                    document.addEventListener('click', function (e) {
                        console.log('inner div');
                        if (e.target.closest('#clrcrt-popup-box-inner')) {
                            return;
                        } else if (e.target.closest('#clrcrt-clear-cart-btn') || e.target.id == 'clrcrt-clear-cart-btn') {
                            console.log('clickeddd...');

                            $('#clrcrt-popup-box-outer-div')[0].style.setProperty('display', 'block', 'important');
                            if (response.clearCart.popup_box == 1) {
                                addContentToPopup(response);
                                $('#clrcrt-popup-box-inner').show();
                            } else if (response.clearCart.popup_box == 0) { // Test Change H-Dev
                                $.ajax({
                                    type: "POST",
                                    url: "/cart/clear.js",
                                    dataType: "json",
                                    success: function (result) {
                                        if (redirect_url_after_clear != null) {
                                            window.location.href = redirect_url_after_clear;
                                        } else {
                                            location.reload();
                                        }
                                    }
                                });
                            }
                        } else {
                            $('#clrcrt-popup-box-outer-div')[0].style.setProperty('display', 'none', 'important');

                            $('#clrcrt-popup-box-inner').hide();
                        }
                    }, true);

                } // SessionResponse function end here



            });
        };

        printContents(item_count);

        // #################################################################################################

        /**        
         *         Support for stores when any element clicked.. please first update above printContents() 
         *         function and then call this function here on click event
         */

        // ################################################################################################

        if (Shopify.shop == 'rosewood-hk-shop.myshopify.com') {
            var cartAddButton = document.querySelector('form[action="/cart/add"]').querySelector('button[type="submit"]');
            var qtyIncrBtns = document.querySelectorAll('a[data-plus]');
            var qtyDecrBtns = document.querySelectorAll('a[data-minus]');
            var cartQtyInputFields = document.querySelector('form[action="/cart"]');
            // for add to cart btn
            if (cartAddButton) {
                cartAddButton.addEventListener('click', function () {

                    setTimeout(() => {
                        qtyIncrBtns = document.querySelectorAll('a[data-plus]');
                        qtyDecrBtns = document.querySelectorAll('a[data-minus]');
                        console.log('add to cart clicked');
                        var item_count = fetch(window.Shopify.routes.root + 'cart.js')
                            .then(response => response.json())
                            .then(data => { return data.item_count });
                        printContents(item_count);
                    }, 1000);

                    setTimeout(() => {
                        location.reload();
                    }, 2000);
                });
            }
            // // for incr btns
            if (qtyIncrBtns) {
                for (let i = 0; i < qtyIncrBtns.length; i++) {
                    qtyIncrBtns[i].addEventListener('click', function () {
                        setTimeout(() => {
                            console.log('incr clicked');
                            var item_count = fetch(window.Shopify.routes.root + 'cart.js')
                                .then(response => response.json())
                                .then(data => { return data.item_count });
                            printContents(item_count);
                        }, 1000);
                    });
                }
            }
            // // for decr btns
            if (qtyDecrBtns) {
                for (let i = 0; i < qtyDecrBtns.length; i++) {
                    qtyDecrBtns[i].addEventListener('click', function () {
                        setTimeout(() => {
                            console.log('decr clicked');
                            var item_count = fetch(window.Shopify.routes.root + 'cart.js')
                                .then(response => response.json())
                                .then(data => { return data.item_count });
                            printContents(item_count);
                        }, 1000);
                    });

                }
            }

        }


        /*************************************************************/
        /** 
         *
         *   The Code below will run when quantity is changed
         * 
         */
        /*************************************************************/

        let timeout;

        if (Shopify.theme.schema_name != 'Horizon' && Shopify.theme.schema_name != 'Dawn' && Shopify.shop != 'qn0itj-n9.myshopify.com' && Shopify.shop != 'latabledarc-prod.myshopify.com') {
            // $(document).on('click change input', ' .quantity__button, .minus, .plus, .qty-minus, .qty-plus, button.h-full, [name="updates[]"], [name="quantity"], button, span, svg', function (e) {
            //     console.log('clickeddd...');
            //     clearTimeout(timeout);
            //     timeout = setTimeout(() => {
            //         console.log('qty click or chn');

            //         runCodeOnchangeQty();
            //     }, 400);
            // });


            $(document).on('click', ' .quantity__button,[name="updates[]"], [action="/cart/add"]', function (e) {
                console.log('clickeddd...');
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    console.log('qty click or chn');

                    // runCodeOnchangeQty();
                }, 400);
            });
        } else {
            console.log('NOT DAWN CHECK');
        }



        if (Shopify.shop == 'y1kinx-1r.myshopify.com---Store_NOT_Avalible') {
            $(document).on('click', 'button , .cleverapps-collections-add-to-cart-add-to-cart-button', function (e) {

                setTimeout(() => {
                    console.log('qty click or chn');

                    runCodeOnchangeQty();
                }, 2000);

            }, true);



            let intr = setInterval(() => {
                let cartItems = document.querySelector('.drawer__cart-items-wrapper');
                console.log('...');
                if (cartItems != null) {
                    runCodeOnchangeQty();
                    clearInterval(intr);
                }

            }, 2000);



        }


        if (Shopify.shop == 'mixtapekitchens.myshopify.com') {


            const intr = setInterval(() => {

                // Select the node that will be observed for mutations
                const targetNode = document.querySelector('[x-data="CartItems"]');

                console.log('here');
                if (targetNode) {
                    console.log('here1');

                    clearInterval(intr);
                    // Options for the observer (which mutations to observe)
                    const config = { attributes: true, childList: true, subtree: true };

                    // Callback function to execute when mutations are observed
                    const callback = (mutationList, observer) => {

                        console.log('changes occured');
                        runCodeOnchangeQty();
                    };

                    // Create an observer instance linked to the callback function
                    const observer = new MutationObserver(callback);

                    // Start observing the target node for configured mutations
                    observer.observe(targetNode, config);

                }
            }, 500);
        }



        function runCodeOnchangeQty() {
            setTimeout(() => {

                var item_count = fetch(window.Shopify.routes.root + 'cart.js')
                    .then(response => response.json())
                    .then(data => { return data.item_count });
                const printContents = () => {
                    item_count.then((item) => {
                        var product_count = item;

                        // ###############################################

                        $.ajax({
                            type: "GET",
                            // url: baseURL + "/api/clearcart?shopName=" + Shopify.shop,
                            url: baseURL + "/api/settingsclearcart?shopName=" + Shopify.shop,
                            dataType: "json",
                            contentType: "application/json",
                            success: function (response) {

                                var redirect_url_after_clear = null;
                                if (response.clearCart.redirect_url != null) {
                                    redirect_url_after_clear = 'https://' + Shopify.shop + response.clearCart.redirect_url;
                                }

                                if (product_count > response.clearCart.products_limit && response.clearCart.app_status == 1) {

                                    let clearCartbuttonHtml = '';

                                    if (response.clearCart.all_tag == 2) {
                                        if ($.inArray(cust_tags, response.clearCart.user_tags) >= 0) {
                                            if (response.clearCart.display_as == 'button') {
                                                if (Shopify.shop == 'rosewood-hk-shop.myshopify.com') {
                                                    var cartDrawerForm = document.querySelector('form[action="/cart"]').getElementsByTagName('ul')[0];
                                                    if (cartDrawerForm) {
                                                        // first we have empty it to prevent repeatition
                                                        var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                                        if (adf_clr_crt_btn_container) {
                                                            $('#adf_clr_crt_btn_container').remove();
                                                        }
                                                        cartDrawerForm.insertAdjacentHTML('afterend', '<div id="adf_clr_crt_btn_container" style="text-align: ' + response.clearCart.clear_cart_position + ';padding-right: 1.25rem;padding-left: .61rem;margin: 1rem;">\
                                                        <button id="clrcrt-clear-cart-btn" style="background: '+ response.clearCart.button_color + ';color: ' + response.clearCart.button_text_color + ';border-radius:3px; border: 1px solid ' + response.clearCart.button_text_color + 'width: 8rem;padding: .6rem;">' + response.clearCart.button_label + '</button></div>');
                                                    }
                                                } else if (Shopify.shop == '0f747e-2.myshopify.com') {
                                                    var cartDrawerForm = document.querySelectorAll('.kaching-cart__subtotal')[0];
                                                    if (cartDrawerForm) {
                                                        // first we have empty it to prevent repeatition
                                                        var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                                        if (adf_clr_crt_btn_container) {
                                                            $('#adf_clr_crt_btn_container').remove();
                                                        }
                                                        cartDrawerForm.insertAdjacentHTML('afterend', '<div id="adf_clr_crt_btn_container" style="text-align: ' + response.clearCart.clear_cart_position + ';padding-right: 1.25rem;padding-left: .61rem;margin: 1rem;">\
                                                        <button id="clrcrt-clear-cart-btn" style="background: '+ response.clearCart.button_color + ';color: ' + response.clearCart.button_text_color + ';border-radius:3px; border: 1px solid ' + response.clearCart.button_text_color + 'width: 8rem;padding: .6rem;">' + response.clearCart.button_label + '</button></div>');
                                                    }
                                                }


                                                $('#clrcrt-clear-cart-button').html('<button id="clrcrt-clear-cart-btn" style="background-color:' + response.clearCart.button_color + '; color:' + response.clearCart.button_text_color + ';border-radius:3px; border: 1px solid ' + response.clearCart.button_text_color + '">\
                                                '+ response.clearCart.button_label + '\
                                                </button>');

                                                if (Shopify.shop == 'mixtapekitchens.myshopify.com') {
                                                    $('#clrcrt-clear-cart-button').remove();
                                                    $('[data-cart-items]').append(`<div id="clrcrt-clear-cart-button">
                                                        <button id="clrcrt-clear-cart-btn" style="background-color:${response.clearCart.button_color}; color:${response.clearCart.button_text_color}; border-radius:3px; border:1px solid ${response.clearCart.button_text_color}">${response.clearCart.button_label}
                                                        </button>
                                                        </div>`);
                                                    // document.querySelector('[data-cart-items]').insertAdjacentHTML(
                                                }

                                                clearCartbuttonHtml = `<div id="clrcrt-clear-cart-button" class="clear-cart-div-drawer">
                                                <button id="clrcrt-clear-cart-btn" style="background-color:${response.clearCart.button_color}; color:${response.clearCart.button_text_color}; border-radius:3px; border:1px solid ${response.clearCart.button_text_color}">${response.clearCart.button_label}
                                                        </button>
                                                </div>`;

                                            } else if (response.clearCart.display_as == 'link') {
                                                if (Shopify.shop == 'rosewood-hk-shop.myshopify.com') {
                                                    var cartDrawerForm = document.querySelector('form[action="/cart"]').getElementsByTagName('ul')[0];

                                                    if (cartDrawerForm) {
                                                        // first we have empty it to prevent repeatition
                                                        var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                                        if (adf_clr_crt_btn_container) {
                                                            $('#adf_clr_crt_btn_container').remove();
                                                        }
                                                        cartDrawerForm.insertAdjacentHTML('afterend', '<div id="adf_clr_crt_btn_container" style="text-align: ' + response.clearCart.clear_cart_position + ';padding-right: 1.25rem;padding-left: .61rem;margin: 1rem;">\
                                                        <p id="clrcrt-clear-cart-btn" style="cursor: pointer; text-decoration:underline; text-underline-offset: 0.1rem; color:'+ response.clearCart.link_text_color + '">' + response.clearCart.link_label + '</p></div>');
                                                    }

                                                } else if (Shopify.shop == '0f747e-2.myshopify.com') {
                                                    var cartDrawerForm = document.querySelectorAll('.kaching-cart__subtotal')[0];
                                                    if (cartDrawerForm) {
                                                        // first we have empty it to prevent repeatition
                                                        var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                                        if (adf_clr_crt_btn_container) {
                                                            $('#adf_clr_crt_btn_container').remove();
                                                        }
                                                        cartDrawerForm.insertAdjacentHTML('afterend', '<div id="adf_clr_crt_btn_container" style="text-align: ' + response.clearCart.clear_cart_position + ';padding-right: 1.25rem;padding-left: .61rem;margin: 1rem;">\
                                                <button id="clrcrt-clear-cart-btn" style="background: '+ response.clearCart.button_color + ';color: ' + response.clearCart.button_text_color + ';border-radius:3px; border: 1px solid ' + response.clearCart.button_text_color + 'width: 8rem;padding: .6rem;">' + response.clearCart.button_label + '</button></div>');
                                                    }
                                                }



                                                $('#clrcrt-clear-cart-button').html('<p id="clrcrt-clear-cart-btn" style="cursor:pointer; text-decoration:underline; text-underline-offset: 0.3rem; color:' + response.clearCart.link_text_color + '">' + response.clearCart.link_label + '</p>')

                                                if (Shopify.shop == 'mixtapekitchens.myshopify.com') {
                                                    $('#clrcrt-clear-cart-button').remove();
                                                    $('[data-cart-items]').append(`<div id="clrcrt-clear-cart-button">
                                                        <p id="clrcrt-clear-cart-btn" style="cursor:pointer; text-decoration:underline; text-underline-offset: 0.3rem; color:${response.clearCart.link_text_color};">${response.clearCart.link_label}
                                                        </p>
                                                        </div>`);
                                                    // document.querySelector('[data-cart-items]').insertAdjacentHTML(
                                                }

                                                clearCartbuttonHtml = `<div id="clrcrt-clear-cart-button" class="clear-cart-div-drawer">
                                                <p id="clrcrt-clear-cart-btn" style="cursor:pointer; text-decoration:underline; text-underline-offset: 0.3rem; color:${response.clearCart.link_text_color};">${response.clearCart.link_label}
                                                        </p>
                                                </div>`;

                                            }

                                        }
                                    } else {
                                        if (response.clearCart.display_as == 'button') {
                                            if (Shopify.shop == 'rosewood-hk-shop.myshopify.com') {
                                                var cartDrawerForm = document.querySelector('form[action="/cart"]').getElementsByTagName('ul')[0];
                                                console.log(cartDrawerForm);
                                                if (cartDrawerForm) {
                                                    // first we have empty it to prevent repeatition
                                                    var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                                    if (adf_clr_crt_btn_container) {
                                                        $('#adf_clr_crt_btn_container').remove();
                                                    }
                                                    cartDrawerForm.insertAdjacentHTML('afterend', '<div id="adf_clr_crt_btn_container" style="text-align: ' + response.clearCart.clear_cart_position + ';padding-right: 1.25rem;padding-left: .61rem;margin: 1rem;">\
                                                    <button id="clrcrt-clear-cart-btn" style="background: '+ response.clearCart.button_color + ';color: ' + response.clearCart.button_text_color + ';border-radius:3px; border: 1px solid ' + response.clearCart.button_text_color + 'width: 8rem;padding: .6rem;">' + response.clearCart.button_label + '</button></div>');
                                                }

                                            } else if (Shopify.shop == '0f747e-2.myshopify.com') {
                                                var cartDrawerForm = document.querySelectorAll('.kaching-cart__subtotal')[0];
                                                if (cartDrawerForm) {
                                                    // first we have empty it to prevent repeatition
                                                    var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                                    if (adf_clr_crt_btn_container) {
                                                        $('#adf_clr_crt_btn_container').remove();
                                                    }
                                                    cartDrawerForm.insertAdjacentHTML('afterend', '<div id="adf_clr_crt_btn_container" style="text-align: ' + response.clearCart.clear_cart_position + ';padding-right: 1.25rem;padding-left: .61rem;margin: 1rem;">\
                                                <button id="clrcrt-clear-cart-btn" style="background: '+ response.clearCart.button_color + ';color: ' + response.clearCart.button_text_color + ';border-radius:3px; border: 1px solid ' + response.clearCart.button_text_color + 'width: 8rem;padding: .6rem;">' + response.clearCart.button_label + '</button></div>');
                                                }
                                            }

                                            $('#clrcrt-clear-cart-button').html('<button id="clrcrt-clear-cart-btn" style="background-color:' + response.clearCart.button_color + '; color:' + response.clearCart.button_text_color + ';border-radius:3px; border: 1px solid ' + response.clearCart.button_text_color + '">\
                                            '+ response.clearCart.button_label + '\
                                            </button>');


                                            if (Shopify.shop == 'mixtapekitchens.myshopify.com') {
                                                $('#clrcrt-clear-cart-button').remove();
                                                $('[data-cart-items]').append(`<div id="clrcrt-clear-cart-button">
                                                    <button id="clrcrt-clear-cart-btn" style="background-color:${response.clearCart.button_color}; color:${response.clearCart.button_text_color}; border-radius:3px; border:1px solid ${response.clearCart.button_text_color}">${response.clearCart.button_label}
                                                    </button>
                                                    </div>`);
                                                // document.querySelector('[data-cart-items]').insertAdjacentHTML(
                                            }

                                            clearCartbuttonHtml = `<div id="clrcrt-clear-cart-button" class="clear-cart-div-drawer">
                                                <button id="clrcrt-clear-cart-btn" style="background-color:${response.clearCart.button_color}; color:${response.clearCart.button_text_color}; border-radius:3px; border:1px solid ${response.clearCart.button_text_color}">${response.clearCart.button_label}
                                                        </button>
                                                </div>`;


                                        } else if (response.clearCart.display_as == 'link') {
                                            if (Shopify.shop == 'rosewood-hk-shop.myshopify.com') {
                                                var cartDrawerForm = document.querySelector('form[action="/cart"]').getElementsByTagName('ul')[0];
                                                console.log(cartDrawerForm);
                                                if (cartDrawerForm) {
                                                    // first we have empty it to prevent repeatition
                                                    var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                                    if (adf_clr_crt_btn_container) {
                                                        $('#adf_clr_crt_btn_container').remove();
                                                    }
                                                    cartDrawerForm.insertAdjacentHTML('afterend', '<div id="adf_clr_crt_btn_container" style="text-align: ' + response.clearCart.clear_cart_position + ';padding-right: 1.25rem;padding-left: .61rem;margin: 1rem;">\
                                                    <p id="clrcrt-clear-cart-btn" style="cursor: pointer; text-decoration:underline; text-underline-offset: 0.1rem; color:'+ response.clearCart.link_text_color + '">' + response.clearCart.link_label + '</p></div>');
                                                }
                                            } else if (Shopify.shop == '0f747e-2.myshopify.com') {
                                                var cartDrawerForm = document.querySelectorAll('.kaching-cart__subtotal')[0];
                                                if (cartDrawerForm) {
                                                    // first we have empty it to prevent repeatition
                                                    var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                                    if (adf_clr_crt_btn_container) {
                                                        $('#adf_clr_crt_btn_container').remove();
                                                    }
                                                    cartDrawerForm.insertAdjacentHTML('afterend', '<div id="adf_clr_crt_btn_container" style="text-align: ' + response.clearCart.clear_cart_position + ';padding-right: 1.25rem;padding-left: .61rem;margin: 1rem;">\
                                                <button id="clrcrt-clear-cart-btn" style="background: '+ response.clearCart.button_color + ';color: ' + response.clearCart.button_text_color + ';border-radius:3px; border: 1px solid ' + response.clearCart.button_text_color + 'width: 8rem;padding: .6rem;">' + response.clearCart.button_label + '</button></div>');
                                                }
                                            }


                                            $('#clrcrt-clear-cart-button').html('<p id="clrcrt-clear-cart-btn" style="cursor:pointer; text-decoration:underline; text-underline-offset: 0.3rem; color:' + response.clearCart.link_text_color + '">' + response.clearCart.link_label + '</p>')

                                            if (Shopify.shop == 'mixtapekitchens.myshopify.com') {
                                                $('#clrcrt-clear-cart-button').remove();
                                                $('[data-cart-items]').append(`<div id="clrcrt-clear-cart-button">
                                                    <p id="clrcrt-clear-cart-btn" style="cursor:pointer; text-decoration:underline; text-underline-offset: 0.3rem; color:${response.clearCart.link_text_color};">${response.clearCart.link_label}
                                                    </p>
                                                    </div>`);
                                                // document.querySelector('[data-cart-items]').insertAdjacentHTML(
                                            }

                                            clearCartbuttonHtml = `<div id="clrcrt-clear-cart-button" class="clear-cart-div-drawer">
                                            <p id="clrcrt-clear-cart-btn" style="cursor:pointer; text-decoration:underline; text-underline-offset: 0.3rem; color:${response.clearCart.link_text_color};">${response.clearCart.link_label}
                                                        </p>
                                            </div>`;
                                        }
                                    }

                                    // Appending button in drawer
                                    // $('.drawer__footer').prepend(clearCartbuttonHtml);

                                    let divElems = document.querySelectorAll('div');

                                    console.log('length: ' + divElems.length);

                                    let interv = setInterval(() => {
                                        divElems = document.querySelectorAll('div');

                                        console.log('length: ' + divElems.length);

                                        for (let i = 0; i < divElems.length; i++) {
                                            if (divElems[i].hasAttribute('class') && divElems[i].getAttribute('class').includes('drawer') && divElems[i].getAttribute('class').includes('footer')) {
                                                console.log(divElems[i]);
                                                $('.clear-cart-div-drawer').remove();

                                                $(divElems[i]).prepend(clearCartbuttonHtml);

                                                clearInterval(interv);
                                            }
                                        }
                                    }, 1000);


                                    if (Shopify.shop == 'iacd61-vp.myshopify.com') {
                                        $('.clear-cart-div-drawer').remove();
                                        $('.xb_slide_cart_footer_wrapper').prepend(clearCartbuttonHtml);
                                    }

                                    setTimeout(() => {
                                        clearInterval(interv);
                                    }, 5000);


                                } else {
                                    $('#clrcrt-clear-cart-button').html('');
                                    var adf_clr_crt_btn_container = $('#adf_clr_crt_btn_container');
                                    if (adf_clr_crt_btn_container) {
                                        $('#adf_clr_crt_btn_container').remove();
                                    }
                                }





                                let clearCartPopup = document.getElementById('clrcrt-popup-box-inner');
                                console.log('div inner');

                                //code for button / link position

                                var clearCartBtnDiv = document.getElementById('clrcrt-clear-cart-button');
                                if (clearCartBtnDiv) {
                                    if (response.clearCart.clear_cart_position == 'left') {
                                        clearCartBtnDiv.style.textAlign = 'left';
                                    } else if (response.clearCart.clear_cart_position == 'center') {
                                        clearCartBtnDiv.style.textAlign = 'center';
                                    } else if (response.clearCart.clear_cart_position == 'right') {
                                        clearCartBtnDiv.style.textAlign = 'right';
                                    }

                                }

                                // checking popup-box status

                                if (response.clearCart.popup_box == 1) {
                                    $(document).on('click', '#clrcrt-popup-confirm-btn', function (e) {
                                        e.preventDefault();
                                        $.ajax({
                                            type: "POST",
                                            url: "/cart/clear.js",
                                            dataType: "json",
                                            success: function (result) {
                                                if (redirect_url_after_clear != null) {


                                                    window.location.href = redirect_url_after_clear;
                                                } else {
                                                    location.reload();
                                                }
                                            }
                                        });
                                    });
                                } else {
                                    $(document).on('click', '#clrcrt-clear-cart-btn', function (e) {
                                        console.log('clickeddd...');

                                        e.preventDefault();
                                        $.ajax({
                                            type: "POST",
                                            url: "/cart/clear.js",
                                            dataType: "json",
                                            success: function (result) {
                                                if (redirect_url_after_clear != null) {


                                                    window.location.href = redirect_url_after_clear;
                                                } else {
                                                    location.reload();
                                                }
                                            }
                                        });
                                    }, true);
                                }

                                // code for inactivity time

                                var inactivity_time = parseInt(response.clearCart.inactivity_time) * 60000; // converting min into millisec
                                console.log('herrrr');
                                var idleTime = 0;

                                if (response.clearCart.app_status == 1) {

                                    var intervalID;

                                    if (intervalID == null) {
                                        intervalID = setInterval(timerIncrement, 5000);
                                        console.log('set interv');
                                    }

                                    // Function to reset idle time and interval
                                    function resetIdleTime() {
                                        idleTime = 0;
                                        clearInterval(intervalID);
                                        localStorage.removeItem('idleTime');
                                        intervalID = setInterval(timerIncrement, 5000);
                                    }

                                    // Zero the idle timer on mouse movement and other events
                                    $(document).mousemove(resetIdleTime);
                                    $(document).keypress(resetIdleTime);
                                    $(document).keyup(resetIdleTime);
                                    $(document).keydown(resetIdleTime);
                                    $(document).mouseenter(resetIdleTime);
                                    $(document).mousedown(resetIdleTime);
                                    $(document).click(resetIdleTime);
                                    $(document).scroll(resetIdleTime);

                                    //Increment the idle time counter every minute.
                                    function timerIncrement() {


                                        let sessionIdleTime = localStorage.getItem('idleTime');
                                        if (sessionIdleTime == null) {
                                            idleTime = idleTime + 5000;

                                        } else {
                                            idleTime = parseInt(sessionIdleTime) + 5000;

                                        }

                                        localStorage.setItem('idleTime', idleTime);

                                        // idleTime = idleTime * 60000;
                                        if (idleTime >= inactivity_time) {
                                            var item_count = fetch(window.Shopify.routes.root + 'cart.js')
                                                .then(response => response.json())
                                                .then(data => { return data.item_count });
                                            const printContents = () => {
                                                item_count.then((item) => {
                                                    var product_count = item;

                                                    if (product_count > 0 && response.clearCart.enable_inactivity_time == 1) {
                                                        $.ajax({
                                                            type: "POST",
                                                            url: "/cart/clear.js",
                                                            dataType: "json",
                                                            success: function (result) {
                                                                if (redirect_url_after_clear != null) {


                                                                    window.location.href = redirect_url_after_clear;
                                                                } else {
                                                                    location.reload();
                                                                }
                                                            }
                                                        });
                                                    }

                                                });
                                            }
                                            printContents();
                                        }
                                    }

                                    // Check for inactivity on page load
                                    window.onload = function () {
                                        let sessionIdleTime = localStorage.getItem('idleTime');
                                        if (sessionIdleTime != null) {
                                            idleTime = parseInt(sessionIdleTime);
                                            timerIncrement();
                                        }
                                    };
                                }



                                var inactivity_time = parseInt(response.clearCart.inactivity_time) * 60000; // converting hours into milliseconds
                                console.log(inactivity_time);

                                // Function to clear the cart
                                function clearCart() {
                                    fetch(window.Shopify.routes.root + 'cart.js')
                                        .then(response => response.json())
                                        .then(data => {
                                            if (data.item_count > 0 && response.clearCart.enable_inactivity_time == 1) {
                                                $.ajax({
                                                    type: "POST",
                                                    url: "/cart/clear.js",
                                                    dataType: "json",
                                                    success: function (result) {
                                                        if (redirect_url_after_clear != null) {


                                                            window.location.href = redirect_url_after_clear;
                                                        } else {
                                                            location.reload();
                                                        }
                                                    }
                                                });
                                            }
                                        });
                                }

                                // Function to store the store closed time
                                function storeClosed() {
                                    localStorage.setItem('storeClosedAt', Date.now());
                                }

                                // Function to update the last activity timestamp on store open
                                function updateLastActivity() {
                                    localStorage.setItem('lastActivity', Date.now());
                                }

                                // Function to check inactivity on store open
                                function checkInactivityOnOpen() {
                                    var storeClosedAt = parseInt(localStorage.getItem('storeClosedAt'));
                                    var lastActivity = parseInt(localStorage.getItem('lastActivity'));

                                    if (!isNaN(storeClosedAt)) {
                                        var currentTime = Date.now();
                                        var elapsedTime = currentTime - storeClosedAt;

                                        if (elapsedTime >= inactivity_time) {
                                            clearCart();
                                        } else {
                                            updateLastActivity(); // Reset the last activity timestamp
                                        }
                                    } else {
                                        updateLastActivity(); // Initialize the last activity timestamp if it doesn't exist
                                    }
                                }

                                // Set store closed time on window unload
                                window.onbeforeunload = function () {
                                    storeClosed();
                                };

                                // Check inactivity on window load
                                window.onload = function () {
                                    checkInactivityOnOpen();
                                };


                                document.addEventListener('click', function (e) {
                                    console.log('inner div');
                                    if (e.target.closest('#clrcrt-popup-box-inner')) {
                                        return;
                                    } else if (e.target.closest('#clrcrt-clear-cart-btn') || e.target.id == 'clrcrt-clear-cart-btn') {
                                        console.log('clickeddd...');

                                        $('#clrcrt-popup-box-outer-div')[0].style.setProperty('display', 'block', 'important');
                                        if (response.clearCart.popup_box == 1) {
                                            addContentToPopup(response);
                                            $('#clrcrt-popup-box-inner').show();
                                        }
                                    } else {
                                        $('#clrcrt-popup-box-outer-div')[0].style.setProperty('display', 'none', 'important');

                                        $('#clrcrt-popup-box-inner').hide();
                                    }
                                }, true);

                            }
                        });
                    });
                }

                printContents();

            }, 1000);
        }

        // Closing popup box

        $(document).on('click', '#clrcrt-popup-cancel-btn', function (e) {
            e.preventDefault();
            $('#clrcrt-popup-box-outer-div')[0].style.setProperty('display', 'none', 'important');
            $('#clrcrt-popup-box-inner').hide();
        });

        // Displaying again popup box after closing..

        $(document).on('click', '#clrcrt-clear-cart-btn', function (e) {
            e.preventDefault();
            console.log('clickeddd...');
            $('#clrcrt-popup-box-outer-div')[0].style.setProperty('display', 'block', 'important');

            $('#clrcrt-popup-box-inner').show();
        }, true);





        function addContentToPopup(response) {
            $('#clrcrt-popup-box-outer-div').html('<div style="padding:1rem" id="clrcrt-popup-box-inner">\
                <h3>'+ response.clearCart.popup_text + '</h3>\
                <div id="clrcrt-popup-buttons-div">\
                <button style="cursor: pointer;" id="clrcrt-popup-cancel-btn">'+ adf_cancelBtn_text + '</button>\
                <button style="cursor: pointer;" id="clrcrt-popup-confirm-btn">'+ adf_confirmBtn_text + '</button>\
                </div>\
                </div>');
        }



        // window.addEventListener('click', function (e) {
        //     console.log('e.target.id');
        //     console.log(e.target.id);
        // }, true);


    };

    /* If jQuery has not yet been loaded or if it has but it's too old for our needs,
    we will load jQuery from the Google CDN, and when it's fully loaded, we will run
    our app's JavaScript. Set your own limits here, the sample's code below uses 1.9.1
    as the minimum version we are ready to use, and if the jQuery is older, we load 1.9.1 */
    if ((typeof jQuery === 'undefined') || (parseInt(jQuery.fn.jquery) === 1 && parseFloat(jQuery.fn.jquery.replace(/^1\./, "")) < 9.1)) {
        loadScript('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function () {
            jQuery191 = jQuery.noConflict(true);
            myAppJavaScript(jQuery191);
        });
    } else {
        myAppJavaScript(jQuery);
    }


})();