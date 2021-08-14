(function() {

    $(window).on('load', function() {

        //preloader code start
        var preloader = $('.loader-overlay');
        if(preloader.length) {
            preloader.fadeOut(1000, function () {
                //$(this).remove();
            });
        }
        //preloader code end

    });

    $(document).ready(function() {

        //sidebar code start
        $(".sidebar-switcher").click(function(e){
            e.preventDefault();
            if($(this).parent().hasClass('open')) {
                $(this).parent().removeClass('open');
            } else {
                $(this).parent().addClass('open');
            }
        });
        //sidebar end start

        //color switch code start
        var $stylesheet = $('link[rel=stylesheet][title]');
        if($stylesheet.length) {
            var currentColor = $stylesheet.attr('title');
            $(".sidebar").find(".bg-"+currentColor).addClass("active");
            $(document).on('click.stylesheet', '.color-switcher', function (e) {
                e.preventDefault();
                $(".color-switcher").removeClass('active');
                $(this).addClass('active');
                var title = $(this).data('color');
                $('link[rel~=stylesheet][title]').each(function () {
                    var el = $(this);
                    el.prop('disabled', el.attr('title') !== title);
                });
            });
        }
        $('link[rel~=stylesheet][title]').each(function () {
            var el = $(this);
            el.prop('disabled', el.is('[rel~=alternate]'));
        });
        //color switch code end

        //scrollspy code start
        var $body = $('body');
        var $navTop = $('#navbar-main');
        var offset = Math.floor($navTop.outerHeight());
        $body.scrollspy({
            target: '#navbar-main',
            offset: offset
        })
        function fixSpy($body, $navTop) {
            var data = $body.data('bs.scrollspy');
            if (data) {
                offset = Math.floor($navTop.outerHeight());
                data.options.offset = offset;
                $body.data('bs.scrollspy', data);
                $body.scrollspy('refresh');
                data.offsets[0] = offset;
            }
        }
        fixSpy($body, $navTop);
        $(window).resize(function() {
            fixSpy($body, $navTop);
        });
        //scrollspy code start

        //scrolling to the top code start
        $("#to-top").click(function(){
            $("html, body").animate({
                scrollTop:0
            },500);
            return false;
        });
        function appearScroller() {
            if($(window).scrollTop() > 50){
                $("#to-top").addClass("active");
            } else {
                $("#to-top").removeClass("active");
            }
        }
        appearScroller();
        $(window).scroll(function(){
            appearScroller();
        });
        //scrolling to the top code end

        //tooltip initialization code start
        if (!Modernizr.touchevents) {
            $("[data-toggle='tooltip']").tooltip();
            $('[data-toggle="tooltip-clickable"]').on('click', function(e){
                e.preventDefault();
            });
            $('[data-toggle="tooltip-clickable"]').tooltip({
                'trigger': 'click',
                'html': true
            });
        }
        //tooltip initialization code end

        //hero height code start
        function heroHeight() {
            var heroContainerHeight = $("#home").outerHeight();
            var heroHeight = $("#home .table-container-inner").outerHeight();
            if(heroHeight > heroContainerHeight) {
                $(".section-hero").addClass("fluid-content")
            }
            if(heroHeight < heroContainerHeight) {
                $(".section-hero").removeClass("fluid-content")
            }
        }
        heroHeight();
        $(window).resize(function() {
            heroHeight();
        });
        //hero height code end

        //skorllr plugin initialize - only for no-touch devices - code start
        var desktop = Modernizr.mq('(min-width: 1200px)');
        if (($('body').data('skrollr')) && (!Modernizr.touchevents) && (Modernizr.csstransitions) && desktop) {
            var skrollrObj = skrollr.init({
                forceHeight: false,
                edgeStrategy: 'set',
                easing: {
                    WTF: Math.random,
                    inverted: function(p) {
                        return 1-p;
                    }
                }
            });
        }
        $('.panel-collapse').on('hidden.bs.collapse shown.bs.collapse', function () {
            skrollr.get().refresh();
        });
        $(window).resize(function() {
            skrollr.get().refresh();
        });
        //skorllr plugin initialize - only for no-touch devices - code end

    });

})();