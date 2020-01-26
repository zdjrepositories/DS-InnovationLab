$(function () {
        load();
        //myscroll()
        demomenu()
        changebanner1();
        changebanner2();
        changebanner3();
        indexfirst();
        indexthird();

        // thirdtitle();
        function load() {
            var h = $('.index-first').height() + $('.index-first-banner-title').height();
            $('.index-first-banner-title').animate({top: h});

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
        }

        function indexfirst() {
            $('.index-first-banner-bg').delay(100).animate({opacity: 1}, 500);
            $('.index-first-banner-title-bottom').delay(1200).animate({opacity: 1}, 1000);
            $('.index-first-down-img').delay(1800).animate({opacity: 1}, 350);
            $('.index-first-banner-title-top').delay(500).animate({opacity: 1}, 1000);
            $('.index-first-banner-title-bottom').delay(1200).animate({opacity: 1}, 1000);
            $('.index-first-down-img').delay(1800).animate({opacity: 1}, 350);

        }

        function indexsecond() {


        }

        function indexthird() {
            $('.index-third-title').animate({opacity: 1}, 500);
            // $('.index-third-banner-title').delay(500).animate({height: '22px'}, 350);
            // $('index-third-banner-arrows').slideDown(350);
            // $('index-third-content-text-line').delay(350).animate({height: '2px'}, 350);
            // $('index-third-dome').delay(350).animate({opacity: '1'}, 500);

        }

        var x=0;
        window.addEventListener('scroll', function () {
            var t = $(document.documentElement).scrollTop() + $(document.body).scrollTop();   // 目前监听的是整个body的滚动条距离
            if (t > 20 ) {
                $('.head').addClass("head-active");
            } else if(t<20 ) {
                $('.head').removeClass("head-active");
            }

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
        })


        function demomenu() {//导航栏动画
            $(".head-nav-demo").hover(function () {
                $(".head-nav-demo-list").show()
            }, function () {
                $(".head-nav-demo-list").hide();
            })
            $(".head-nav-demo-list").hover(function () {
                $(".head-nav-demo-list").show()
            }, function () {
                $(".head-nav-demo-list").hide();
            })
        }

        function changebanner1() {
            $(".index-third--title1").click(function () {
                $('.index-third-banner-arrows-icon').animate({marginLeft: "334px"}, 100);
                $('.index-third-content1').animate({width: 1024}, 500);
                $('.index-third-content2').animate({width: 0}, 500);
                $('.index-third-content3').animate({width: 0}, 500);

            });
        }

        function changebanner2() {
            $(".index-third--title2").click(function () {
                $('.index-third-banner-arrows-icon').animate({marginLeft: "501px"}, 100);
                $('.index-third-content1').animate({width: 0}, 500);
                $('.index-third-content2').animate({width: 1024}, 500);
                $('.index-third-content3').animate({width: 0}, 500);

            });
        }

        function changebanner3() {
            $(".index-third--title3").click(function () {
                $('.index-third-banner-arrows-icon').animate({marginLeft: "687px"}, 100);
                $('.index-third-content1').animate({width: 0}, 500);
                $('.index-third-content2').animate({width: 0}, 500);
                $('.index-third-content3').animate({width: 1024}, 500);

            });
        }


    }
)