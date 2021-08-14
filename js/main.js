(function() {

    $(document).ready(function() {

        //background parallax code start
        var query = Modernizr.mq('(min-width: 992px)');
        if (!Modernizr.touchevents & query) {
            if($('.section-parallax').length) {
                $('.section-parallax').parallax("0%", 0.2, true);
            }
        }
        //background parallax code end

        //main menu scrolling code start
        var $body = $('body');
        var $navTop = $('#navbar-main');
        var offset = Math.floor($navTop.outerHeight());
        $('#navbar-main .navbar-nav a').not('.external-link, .dropdown-toggle').click(function(e){
            e.preventDefault();
            var href = $(this).attr('href');
            var target = Math.floor($(href).offset().top + 1);
            $('html, body').animate({
                scrollTop: target - offset
            }, 500);
        });
        //main menu scrolling code end

        //scrolling to the specific hash code start
        var hash = window.location.hash;
        if (hash) {
            if ($(hash).length > 0) {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - offset
                }, 500);
            }
        }
        //scrolling to the specific hash code end

    });

    //google maps code start
    var markerImage = 'img/marker.png';
    var markerImageInverse = 'img/marker-inverse.png';
    function initialize() {
        var map_canvas = document.getElementById('map');
        var map_options = {
            center: new google.maps.LatLng(50.0559661,19.9308796),
            zoom: 17,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
        }
        var map = new google.maps.Map(map_canvas, map_options)
        var myLatlng = new google.maps.LatLng(50.0559661,19.9308796);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title:"Outside office",
            icon: markerImage
        });
        marker.setMap(map);
    }
    function initializeLight() {
        var map_canvas = document.getElementById('map');
        var map_options = {
            center: new google.maps.LatLng(50.0559661,19.9308796),
            zoom: 17,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
        }
        var map = new google.maps.Map(map_canvas, map_options)
        var myLatlng = new google.maps.LatLng(50.0559661,19.9308796);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title:"Outside office",
            icon: markerImageInverse
        });
        marker.setMap(map);
    }
    window.initMap = initialize;
    window.initMapLight = initializeLight;
    //google maps code end

})();