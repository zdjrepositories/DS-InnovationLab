$(function () {
       // getLike();
       // giveLike()
        demomenu()
        demosidenav()
        demofirst()

        function getLike() {
            $.ajax({
                url: '/showLike',
                type: 'get',
                async: false,
                data: {},
                success: function (data) {
                    $(".demo-like-sum1").text(data.demo1);
                    $(".demo-like-sum2").text(data.demo2);
                    $(".demo-like-sum3").text(data.demo3);
                    $(".demo-like-sum4").text(data.demo4);
                    $(".demo-like-sum5").text(data.demo5);
                    $(".demo-like-sum6").text(data.demo6);
                    $(".demo-like-sum7").text(data.demo7);
                    $(".demo-like-sum8").text(data.demo8);
                }
            })
        }
        function giveLike(){

        }

        function demofirst() {
            $('.demo-first-title').delay(300).animate({opacity: 1}, 3000,'easeOutCirc');
        }

        window.addEventListener('scroll', function () {
            var t = $(document.documentElement).scrollTop() + $(document.body).scrollTop();   // 目前监听的是整个body的滚动条距离
            if (t > 10) {
                $('.head').addClass('head-active')
            } else {
                $('.head').removeClass('head-active')
            }

            var dTop = $(document).scrollTop();//可视区域到页面顶部的距离
            var wTop = $(window).height();//浏览器可视高度
            var demo = $("#demo1").offset().top;//浏览器可视高度
            var eTop = $('.demo-content-banner-demo1').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                $('.demo-content-banner-demo1').delay(100).animate({marginLeft: '512px', opacity: 1}, 850,'easeOutCirc');
                $(".demo-content-text-demo1>.demo-banner-line").delay(100).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo1>.demo-banner-title").delay(150).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo1>.demo-banner-explain").delay(200).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo1>.demo-banner-tags").delay(250).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo1>.demo-banner-value").delay(300).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo1>.demo-banner-value-content li:nth-child(1)").delay(350).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo1>.demo-banner-value-content li:nth-child(2)").delay(400).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo1>.demo-banner-value-content li:nth-child(3)").delay(450).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo1>.demo-banner-function").delay(500).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo1>.demo-banner-function-content li:nth-child(1)").delay(550).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo1>.demo-banner-function-content li:nth-child(2)").delay(600).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo1>.demo-banner-function-content li:nth-child(3)").delay(650).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo1>.demo-banner-function-content li:nth-child(4)").delay(700).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo1>.demo-banner-link").delay(200).animate({opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo1>.demo-like").delay(200).animate({opacity: 1}, 650,'easeOutCirc');
                 }
            var eTop = $('.demo-content-banner-demo3').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                $('.demo-content-banner-demo3').delay(100).animate({marginLeft: '512px', opacity: 1}, 850,'easeOutCirc');
                $(".demo-content-text-demo3>.demo-banner-line").delay(100).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo3>.demo-banner-title").delay(150).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo3>.demo-banner-explain").delay(200).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo3>.demo-banner-tags").delay(250).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo3>.demo-banner-value").delay(300).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo3>.demo-banner-value-content li:nth-child(1)").delay(350).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo3>.demo-banner-value-content li:nth-child(2)").delay(400).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo3>.demo-banner-value-content li:nth-child(3)").delay(450).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo3>.demo-banner-function").delay(500).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo3>.demo-banner-function-content li:nth-child(1)").delay(550).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo3>.demo-banner-function-content li:nth-child(2)").delay(600).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo3>.demo-banner-function-content li:nth-child(3)").delay(650).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo3>.demo-banner-function-content li:nth-child(4)").delay(700).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo3>.demo-banner-link").delay(200).animate({opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo3>.demo-like").delay(200).animate({opacity: 1}, 650,'easeOutCirc');
            }
            var eTop = $('.demo-content-banner-demo5').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                $('.demo-content-banner-demo5').delay(100).animate({marginLeft: '512px', opacity: 1}, 850,'easeOutCirc');
                $(".demo-content-text-demo5>.demo-banner-line").delay(100).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo5>.demo-banner-title").delay(150).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo5>.demo-banner-explain").delay(200).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo5>.demo-banner-tags").delay(250).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo5>.demo-banner-value").delay(300).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo5>.demo-banner-value-content li:nth-child(1)").delay(350).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo5>.demo-banner-value-content li:nth-child(2)").delay(400).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo5>.demo-banner-value-content li:nth-child(3)").delay(450).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo5>.demo-banner-function").delay(500).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo5>.demo-banner-function-content li:nth-child(1)").delay(550).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo5>.demo-banner-function-content li:nth-child(2)").delay(600).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo5>.demo-banner-function-content li:nth-child(3)").delay(650).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo5>.demo-banner-function-content li:nth-child(4)").delay(700).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo5>.demo-banner-link").delay(200).animate({opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo5>.demo-like").delay(200).animate({opacity: 1}, 650,'easeOutCirc');
            }
            var eTop = $('.demo-content-banner-demo7').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                $('.demo-content-banner-demo7').delay(100).animate({marginLeft: '512px', opacity: 1}, 850,'easeOutCirc');
                $(".demo-content-text-demo7>.demo-banner-line").delay(100).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo7>.demo-banner-title").delay(150).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo7>.demo-banner-explain").delay(200).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo7>.demo-banner-tags").delay(250).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo7>.demo-banner-value").delay(300).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo7>.demo-banner-value-content li:nth-child(1)").delay(350).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo7>.demo-banner-value-content li:nth-child(2)").delay(400).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo7>.demo-banner-value-content li:nth-child(3)").delay(450).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo7>.demo-banner-function").delay(500).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo7>.demo-banner-function-content li:nth-child(1)").delay(550).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo7>.demo-banner-function-content li:nth-child(2)").delay(600).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo7>.demo-banner-function-content li:nth-child(3)").delay(650).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo7>.demo-banner-function-content li:nth-child(4)").delay(700).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo7>.demo-banner-link").delay(200).animate({opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo7>.demo-like").delay(200).animate({opacity: 1}, 650,'easeOutCirc');
            }
            var eTop = $('.demo-content-banner-demo2').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                $('.demo-content-banner-demo2').delay(100).animate({left: '-261px', opacity: 1}, 850,'easeOutCirc');
                $(".demo-content-text-demo2>.demo-banner-line").delay(100).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo2>.demo-banner-title").delay(150).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo2>.demo-banner-explain").delay(200).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo2>.demo-banner-tags").delay(250).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo2>.demo-banner-value").delay(300).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo2>.demo-banner-value-content li:nth-child(1)").delay(350).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo2>.demo-banner-value-content li:nth-child(2)").delay(400).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo2>.demo-banner-value-content li:nth-child(3)").delay(450).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo2>.demo-banner-function").delay(500).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo2>.demo-banner-function-content li:nth-child(1)").delay(550).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo2>.demo-banner-function-content li:nth-child(2)").delay(600).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo2>.demo-banner-function-content li:nth-child(3)").delay(650).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo2>.demo-banner-function-content li:nth-child(4)").delay(700).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo2>.demo-banner-link").delay(200).animate({opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo2>.demo-like").delay(200).animate({opacity: 1}, 650,'easeOutCirc');
            }
            var eTop = $('.demo-content-banner-demo4').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                $('.demo-content-banner-demo4').delay(100).animate({left: '-261px', opacity: 1}, 850,'easeOutCirc');
                $(".demo-content-text-demo4>.demo-banner-line").delay(100).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo4>.demo-banner-title").delay(150).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo4>.demo-banner-explain").delay(200).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo4>.demo-banner-tags").delay(250).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo4>.demo-banner-value").delay(300).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo4>.demo-banner-value-content li:nth-child(1)").delay(350).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo4>.demo-banner-value-content li:nth-child(2)").delay(400).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo4>.demo-banner-value-content li:nth-child(3)").delay(450).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo4>.demo-banner-function").delay(500).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo4>.demo-banner-function-content li:nth-child(1)").delay(550).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo4>.demo-banner-function-content li:nth-child(2)").delay(600).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo4>.demo-banner-function-content li:nth-child(3)").delay(650).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo4>.demo-banner-function-content li:nth-child(4)").delay(700).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo4>.demo-banner-link").delay(200).animate({opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo4>.demo-like").delay(200).animate({opacity: 1}, 650,'easeOutCirc');
            }
            var eTop = $('.demo-content-banner-demo6').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                $('.demo-content-banner-demo6').delay(100).animate({left: '-261px', opacity: 1}, 850,'easeOutCirc');
                $(".demo-content-text-demo6>.demo-banner-line").delay(100).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo6>.demo-banner-title").delay(150).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo6>.demo-banner-explain").delay(200).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo6>.demo-banner-tags").delay(250).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo6>.demo-banner-value").delay(300).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo6>.demo-banner-value-content li:nth-child(1)").delay(350).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo6>.demo-banner-value-content li:nth-child(2)").delay(400).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo6>.demo-banner-value-content li:nth-child(3)").delay(450).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo6>.demo-banner-function").delay(500).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo6>.demo-banner-function-content li:nth-child(1)").delay(550).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo6>.demo-banner-function-content li:nth-child(2)").delay(600).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo6>.demo-banner-function-content li:nth-child(3)").delay(650).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo6>.demo-banner-function-content li:nth-child(4)").delay(700).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo6>.demo-banner-link").delay(200).animate({opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo6>.demo-like").delay(200).animate({opacity: 1}, 650,'easeOutCirc');
            }
            var eTop = $('.demo-content-banner-demo8').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                $('.demo-content-banner-demo8').delay(100).animate({left: '-261px', opacity: 1}, 850,'easeOutCirc');
                $(".demo-content-text-demo8>.demo-banner-line").delay(100).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo8>.demo-banner-title").delay(150).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo8>.demo-banner-explain").delay(200).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo8>.demo-banner-tags").delay(250).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo8>.demo-banner-value").delay(300).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo8>.demo-banner-value-content li:nth-child(1)").delay(350).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo8>.demo-banner-value-content li:nth-child(2)").delay(400).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo8>.demo-banner-value-content li:nth-child(3)").delay(450).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo8>.demo-banner-function").delay(500).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo8>.demo-banner-function-content li:nth-child(1)").delay(550).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo8>.demo-banner-function-content li:nth-child(2)").delay(600).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo8>.demo-banner-function-content li:nth-child(3)").delay(650).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo8>.demo-banner-function-content li:nth-child(4)").delay(700).animate({marginLeft: '0px', opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo8>.demo-banner-link").delay(200).animate({opacity: 1}, 650,'easeOutCirc');
                $(".demo-content-text-demo8>.demo-like").delay(200).animate({opacity: 1}, 650,'easeOutCirc');
            }

        })


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
               // $(".head-nav-demo-list").toggle(300)
            }, function () {
             //   (".head-nav-demo-list").toggle(300)
            })
            $(".head-nav-demo-list").hover(function () {
                $(".head-nav-demo-list").show()
            }, function () {
                $(".head-nav-demo-list").hide();
            })
        }


    }
)
