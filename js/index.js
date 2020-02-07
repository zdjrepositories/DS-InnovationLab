$(function () {
        load();
        demo_menu();
        indexfirst();
        changebanner1();
        changebanner2();
        changebanner3();
        getLike();
        getVisit()

        function load() {
            var h = $('.index-first').height() * 0.5 - $('.index-first-banner-title').height() * 0.5;
            $('.index-first-banner-title').animate({top: h});

            var t = $(document.documentElement).scrollTop() + $(document.body).scrollTop();  // 目前监听的是整个body的滚动条距离
            var p = t;
            if (p < t) {
                $('.index-first-down-img').animate({opacity: 1});
            } else {
                $('.index-first-down-img').animate({opacity: 0});
            }
            head(1);

            var dTop = $(document).scrollTop();//可视区域到页面顶部的距离
            var wTop = $(window).height();//浏览器可视高度

            var eTop = $('.index-second-title').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - ($('.index-second-title').height() * 0.25) - 380 > eTop) {
                $('.index-second-title').animate({opacity: 1}, 500);
            }
            eTop = $('.index-second-banner').offset().top;
            if (dTop + wTop - ($('.index-second-banner').height() * 0.25) - 380 > eTop) {
                $('.index-second-banner').animate({opacity: 1}, 500);
            }


            var eTop = $('.index-third-title').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - ($('.index-third-title').height() * 0.25) - 300 > eTop) {
                $('.index-third-title').animate({opacity: 1}, 500);
            }
            eTop = $('.index-third-banner').offset().top;
            if (dTop + wTop - ($('.index-third-banner').height() * 0.25) - 300 > eTop) {
                $('.index-third-banner').animate({opacity: 1}, 500);
            }

            eTop = $('.index-third-banner-tab').offset().top;
            if (dTop + wTop - ($('.index-third-banner-tab').height() * 0.25) - 180 > eTop) {
                $('.index-third-banner-tab').animate({opacity: 1}, 500);
            }

            eTop = $('.index-third-banner ul').offset().top;
            if (dTop + wTop - ($('.index-third-banner ul').height() * 0.25) - 180 > eTop) {
                $('.index-third-banner ul').animate({opacity: 1}, 500);
            }


            eTop = $('.index-third-dome').offset().top;
            if (dTop + wTop - ($('.index-third-dome').height() * 0.25) - 80 > eTop) {
                $('.index-third-dome').animate({opacity: 1}, 500);
            }
        }

        var p = 0;
        window.addEventListener('scroll', function () {
            load();
            $(".head-nav-demo-list").slideUp(400);
        })

        function indexfirst() {
            $('.index-first-banner-bg').animate({opacity: 1}, 500);
            $('.index-first-banner-title-bottom').delay(1000).animate({opacity: 1}, 1000);
            $('.index-first-down-img').delay(1600).animate({opacity: 1}, 350);
            $('.index-first-banner-title-top').delay(300).animate({opacity: 1}, 1000);
            $('.index-first-banner-title-bottom').delay(900).animate({opacity: 1}, 1000);
            $('.index-first-down-img').delay(1000).animate({opacity: 1}, 350);

        }
        function changebanner1() {
            $(".index-third-title1").click(function () {
                $('.index-third-banner-arrows-icon').animate({marginLeft: "334px"}, 100);
                $(".index-third-banner>ul").css("margin-left", "-0px");
            });
        }

        function changebanner2() {
            $(".index-third-title2").click(function () {
                $('.index-third-banner-arrows-icon').animate({marginLeft: "501px"}, 100);
                $(".index-third-banner>ul").css("margin-left", "-1124px");
            });
        }

        function changebanner3() {
            $(".index-third-title3").click(function () {
                $('.index-third-banner-arrows-icon').animate({marginLeft: "687px"}, 100);
                $(".index-third-banner>ul").css("margin-left", "-2248px");
            });
        }

    }
);


