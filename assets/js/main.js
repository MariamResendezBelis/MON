/*
 *****************************************************
 *	CUSTOM JS DOCUMENT                              *
 *	Single window load event                        *
 *   "use strict" mode on                            *
 *****************************************************
 */
$(window).on("load", function() {

    "use strict";

    var preLoader = $('.preloader');
	var headerSticky = $(".sticky-nav");
    var helpButton = $("#help_button");
    var Help = $("#help");
    var dataToggleTooTip = $('[data-toggle="tooltip"]');
    var scrollTop = $('#scroll-top');
    var fancyboxImg = $('.fancybox');
    var boDy = $('body');
    var scrolls = $('.navbar-nav a[href*="#"]');
    var bodyScroll = $('html, body');
    var mapDiv = $('#gmap_canvas');
	var MixItUp1 = $('#MixItUp1');

    
    // ============================================
    // PreLoader On window Load
    // =============================================
    if (preLoader.length) {
        preLoader.fadeOut();
    }
	// ============================================
    // Sticky Header
    // =============================================
    if (headerSticky.length) {
        $(window).on('scroll', function() {

            if ($(this).scrollTop() > 30) {
                headerSticky.addClass('sticky-header');
            } else {
                headerSticky.removeClass('sticky-header');
            }
        });
    }
    //============================
    // Search Popup
    //============================
    if (helpButton.length) {
        helpButton.on('click', function() {
            Help.slideToggle(1000, function() {
                if (helpButton.val() == "close") {
                    helpButton.val("show table");
                } else {
                    helpButton.val("close");
                }
            });
        });
    }

    //========================================
    // Owl Carousel functions Calling
    //======================================== 	
    owlCarouselInit();
    //========================================
    // Scroll top
    //======================================== 		
    if (scrollTop.length) {
        scrollTop.on('click', function() {
            boDy.animate({
                    scrollTop: 0
                },
                2000);
        });

        $(window).on('scroll', function() {

            if ($(this).scrollTop() > 500) {
                scrollTop.addClass('showScrollTop');
            } else {
                scrollTop.removeClass('showScrollTop');
            }
        });
    }
    if (scrolls.length) {
        scrolls.on('click', function(e) {
            e.preventDefault();
            bodyScroll.animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 1000, 'linear');
        });
    }
    //===================
    // FANCY-BOX SECTION
    //===================

    if (fancyboxImg.length) {
        fancyboxImg.fancybox();
    }
    //===================
    // MAP SECTION
    //===================
    if (mapDiv.length) {
        initMap();
    }
    //=====================
    //	MixItUp
    //=====================

    if (MixItUp1.length) {
        MixItUp1.mixItUp({
            selectors: {
                filter: '.filter-1'
            }
        });
    }

});
//========================================
// Owl Carousel functions
//======================================== 	

function owlCarouselInit() {

    "use strict";

    //========================================
    // owl carousels settings
    //======================================== 	
    var mainSlider = $('.main_slider');
    var aboutSlider = $('.about-slider');
    var testimonialSlider = $('.testimonial-slider');
    var nextNav = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
    var prevNav = '<i class="fa fa-angle-left" aria-hidden="true"></i>';


    if (mainSlider.length) {
        mainSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            navText: [prevNav, nextNav],
            dots: true,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }

    if (aboutSlider.length) {
        aboutSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [prevNav, nextNav],
            dots: false,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }
    if (testimonialSlider.length) {
        testimonialSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            navText: [prevNav, nextNav],
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }

}

function initMap() {
    "use strict";

    var mapDiv = $('#gmap_canvas');

    if (mapDiv.length) {
        var myOptions = {
            zoom: 5,
            scrollwheel: false,
            draggable: true,
            //backgroundColor:grey,
            center: new google.maps.LatLng(22.9623, 76.0508),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(22.9623, 76.0508)
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<strong>ITGEEkS</strong>'
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });

        infowindow.open(map, marker);

    }
}



/*
 *****************************************************
 *	END OF THE JS 									*
 *	DOCUMENT                       					*
 *****************************************************
 */