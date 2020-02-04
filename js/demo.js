$(function () {
        getLike();
        getVisit();
        load();
        demo_menu();
        demosidenav();
        demofirst();

        function load() {
            head(2);

            var dTop = $(document).scrollTop();//可视区域到页面顶部的距离
            var wTop = $(window).height();//浏览器可视高度
            var demo = $("#demo1").offset().top;//浏览器可视高度
            var eTop = $('.demo-content-banner-demo1').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                demo_load(1);
                if (dTop + wTop - 100 < eTop + 700) {
                    nav_anchor(1);
                }
            }
             eTop = $('.demo-content-banner-demo2').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                demo_load(2);
                if (dTop + wTop - 100 < eTop + 700) {
                    nav_anchor(2);
                }
            }
            eTop = $('.demo-content-banner-demo3').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                demo_load(3);
                if (dTop + wTop - 100 < eTop + 700) {
                    nav_anchor(3);
                }
            }
            eTop = $('.demo-content-banner-demo4').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                demo_load(4);
                if (dTop + wTop - 100 < eTop + 700) {
                    nav_anchor(4);
                }
            }
           eTop = $('.demo-content-banner-demo5').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                demo_load(5);
                if (dTop + wTop - 100 < eTop + 700) {
                    nav_anchor(5);
                }
            }
            eTop = $('.demo-content-banner-demo6').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                demo_load(6);
                if (dTop + wTop - 100 < eTop + 700) {
                    nav_anchor(6);
                }
            }
            eTop = $('.demo-content-banner-demo7').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                demo_load(7);
                if (dTop + wTop - 100 < eTop + 700) {
                    nav_anchor(7);
                }
            }
            eTop = $('.demo-content-banner-demo8').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                demo_load(8);
                if (dTop + wTop - 100 < eTop + 700) {
                    nav_anchor(8);
                }
            }
        }

        //侧边栏
        function demosidenav() {
            $(".demo-side-nav").click(function () {
            }, function () {
                $('.demo-side-nav-img').toggle();
                $('.demo-side-nav-close').toggle();
                $('.demo-side-nav-list').toggle(300)
            }, true)
        }


        window.addEventListener('scroll', function () {
            load();
        })

        function nav_anchor(demo) {
            var top = (demo - 1) * 38;
            $(".demo-side-nav-anchor").css("opacity", "1");
            $(".demo-side-nav-anchor").css("margin-top", top + "px");
            $(".demo-side-nav-list>ul>li>a").css("color", "#666666");
            $(".demo-side-nav-list>ul>li:nth-child(" + demo + ")>a").css("color", "#3dcd58");
            console.log()
        }

        function demo_load(demo) {
            if (demo % 2 == 1) {
                $('.demo-content-banner-demo' + demo).delay(100).animate({
                    marginLeft: '512px',
                    opacity: 1
                }, 850, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-line").delay(100).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-title").delay(150).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-explain").delay(200).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-tags").delay(250).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-value").delay(300).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-value-content li:nth-child(1)").delay(350).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-value-content li:nth-child(2)").delay(400).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-value-content li:nth-child(3)").delay(450).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function").delay(500).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function-content li:nth-child(1)").delay(550).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function-content li:nth-child(2)").delay(600).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function-content li:nth-child(3)").delay(650).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function-content li:nth-child(4)").delay(700).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-link").delay(200).animate({opacity: 1}, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-like").delay(200).animate({opacity: 1}, 650, 'easeOutCirc');
            } else {
                $('.demo-content-banner-demo' + demo).delay(100).animate({left: '-261px', opacity: 1}, 850, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-line").delay(100).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-title").delay(150).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-explain").delay(200).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-tags").delay(250).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-value").delay(300).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-value-content li:nth-child(1)").delay(350).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-value-content li:nth-child(2)").delay(400).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-value-content li:nth-child(3)").delay(450).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function").delay(500).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function-content li:nth-child(1)").delay(550).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function-content li:nth-child(2)").delay(600).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function-content li:nth-child(3)").delay(650).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function-content li:nth-child(4)").delay(700).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-link").delay(200).animate({opacity: 1}, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-like").delay(200).animate({opacity: 1}, 650, 'easeOutCirc');
            }
        }

        function demofirst() {
            $('.demo-first-title').delay(300).animate({opacity: 1}, 3000, 'easeOutCirc');
        }

    }
)
