$(function () {
        demomenu()
        demosidenav()
        demofirst()

        function demofirst() {
            $('.demo-first-title').delay(100).animate({opacity: 1}, 500);
            $('.index-first-banner-title-bottom').delay(1200).animate({opacity: 1}, 1000);
            $('.index-first-down-img').delay(1800).animate({opacity: 1}, 350);
            $('.index-first-banner-title-top').delay(500).animate({opacity: 1}, 1000);
            $('.index-first-banner-title-bottom').delay(1200).animate({opacity: 1}, 1000);
            $('.index-first-down-img').delay(1800).animate({opacity: 1}, 350);
        }

        function demosecond() {

            $('.demo-even-content-banner').delay(100).animate({left: '-261px',}, 650);
            // $('.index-first-banner-title-bottom').delay(1200). animate({opacity:1},1000);
            // $('.index-first-down-img').delay(1800).animate({opacity:1},350);
            // $('.index-first-banner-title-top').delay(500).animate({opacity:1},1000);
            // $('.index-first-banner-title-bottom').delay(1200). animate({opacity:1},1000);
            // $('.index-first-down-img').delay(1800).animate({opacity:1},350);
        }

        window.addEventListener('scroll', function () {
            let t = $(document.documentElement).scrollTop() + $(document.body).scrollTop();   // 目前监听的是整个body的滚动条距离
            if (t > 10) {
                $('.head').addClass('head-active')
            } else {
                $('.head').removeClass('head-active')
            }

            var dTop = $(document).scrollTop();//可视区域到页面顶部的距离
            var wTop = $(window).height();//浏览器可视高度
            var demo = $("#demo1").offset().top;//浏览器可视高度
            console.log($('#demo-circle:nth-child(1):nth-child(2)'))
            // if ( ($('#demo1').offset().top)> ($(document).scrollTop())+300){
            //     $('.demo-side-nav-line:nth-child(1)').addClass("demo-side-nav-circle-arrive")
            // }
            var eTop = $('.demo-content-banner-demo1').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 200> eTop) {
                $('#demo-circle:nth-child(1):nth-child(2)').addClass("demo-side-nav-circle-arrive")
                $('.demo-content-banner-demo1').delay(100).animate({marginLeft: '512px'}, 650);
              //.  $('#demo1').animate({opacity: 1}, 500);
            }
            var eTop = $('.demo-content-banner-demo3').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 200> eTop) {
                $('.demo-content-banner-demo3').delay(100).animate({marginLeft: '512px'}, 650);
                //.  $('#demo1').animate({opacity: 1}, 500);
            }
            var eTop = $('.demo-content-banner-demo5').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 200> eTop) {
                $('.demo-content-banner-demo5').delay(100).animate({marginLeft: '512px'}, 650);
                //.  $('#demo1').animate({opacity: 1}, 500);
            }
            var eTop = $('.demo-content-banner-demo7').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 200> eTop) {
                $('.demo-content-banner-demo7').delay(100).animate({marginLeft: '512px'}, 650);
                //.  $('#demo1').animate({opacity: 1}, 500);
            }
            var eTop = $('.demo-content-banner-demo2').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 200> eTop) {
                $('.demo-content-banner-demo2').delay(100).animate({left: '-261px'}, 650);
                //.  $('#demo1').animate({opacity: 1}, 500);
            }
            var eTop = $('.demo-content-banner-demo4').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 200> eTop) {
                $('.demo-content-banner-demo4').delay(100).animate({left: '-261px'}, 650);
                //.  $('#demo1').animate({opacity: 1}, 500);
            }
            var eTop = $('.demo-content-banner-demo6').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 200> eTop) {
                $('.demo-content-banner-demo6').delay(100).animate({left: '-261px'}, 650);
                //.  $('#demo1').animate({opacity: 1}, 500);
            }
            var eTop = $('.demo-content-banner-demo8').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 200> eTop) {
                $('.demo-content-banner-demo8').delay(100).animate({left: '-261px'}, 650);
                //.  $('#demo1').animate({opacity: 1}, 500);
            }

        })
        if (t > 10) {
            $('.head').addClass('head-active')
        } else {
            $('.head').removeClass('head-active')
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

        //导航栏动画
        function demomenu() {
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


    }
)
