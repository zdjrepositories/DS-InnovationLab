$(function () {
        // getLike();
        // getVisit();
        load();
        demomenu();
        demosidenav();
        demofirst();

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

        function getVisit() {
            $.ajax({
                url: '/giveVisit',
                type: 'get',
                async: false,
                success: function (data) {
                    console.log(data);
                    $("#visit").text(data);
                }
            })
        }

        function demomenu() {//导航栏动画
            $(".head-nav-demo").hover(function () {
                $(".head-nav-demo-list").slideDown(400);
            }, function () {
                $(".head-nav-demo-list").slideUp(400);
            })
        }

        //导航栏Demo菜单
        $(".head-nav-demo-list>li").hover(function () {
            $(".head-nav-demo-list>li:hover").css("background-color", "#f0fff0");
            $(".head-nav-demo-list>li:hover>a").css("color", "#3dcd58");
        }, function () {
            $(".head-nav-demo-list>li").css("background-color", "#fff");
            $(".head-nav-demo-list>li>a").css("color", "#666");
        });

        function nav_anchor(demo) {
            var dTop = $(document).scrollTop();//可视区域到页面顶部的距离
            var wTop = $(window).height();//浏览器可视高度
            var demo = $("#demo1").offset().top;//浏览器可视高度
            var eTop = $('.demo-content-banner-demo1').offset().top;//容器距离整个页面顶部的距离

        }

        function demo_load(demo) {
            $(".demo-side-nav-anchor").animate({opacity: 1, marginTop: "152px"});
            $(".demo-side-nav-list>ul>li:nth-child(" + demo + ")>a").css("color", "#3dcd58");
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

        function load() {
            var t = $(document.documentElement).scrollTop() + $(document.body).scrollTop();   // 目前监听的是整个body的滚动条距离
            if (t > 20) {
                $(".head-nav>ul>li>a").css("border-color", "#fff");
                $('.head-list>li:nth-child(2)>a').css("color", "#fff")
                $('.head').addClass("head-active");
            } else if (t < 20) {
                $(".head-nav>ul>li>a").css("border-color", "#3dcd58");
                $('.head-list>li:nth-child(2)>a').css("color", "#3dcd58")
                $('.head').removeClass("head-active");
            }

            var dTop = $(document).scrollTop();//可视区域到页面顶部的距离
            var wTop = $(window).height();//浏览器可视高度
            var demo = $("#demo1").offset().top;//浏览器可视高度
            var eTop = $('.demo-content-banner-demo1').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                demo_load(1);
            }
            var eTop = $('.demo-content-banner-demo3').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                demo_load(3);
            }
            var eTop = $('.demo-content-banner-demo5').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                demo_load(5);
            }
            var eTop = $('.demo-content-banner-demo7').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                demo_load(7);
            }
            var eTop = $('.demo-content-banner-demo2').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                demo_load(2);
            }
            var eTop = $('.demo-content-banner-demo4').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                demo_load(4);
            }
            var eTop = $('.demo-content-banner-demo6').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                demo_load(6);
            }
            var eTop = $('.demo-content-banner-demo8').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - 100 > eTop) {
                demo_load(8);
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

    }
)

function like(id) {
    var img = ".demo-like-img" + id;
    var img_on = ".demo-like-img" + id + "-on";
    var sum = ".demo-like-sum" + id;
    $(img).css("opacity", "0");
    $(img_on).css("opacity", "1");
    $(sum).css("color", "#3dcd58");
    var sum1 = parseInt($(sum).text());
    $(sum).text(sum1 + 1);
    $(img).attr('onclick', '');
    giveLike(id)
}

function giveLike(id) {
    $.ajax({
        url: '/giveLike?id=' + id,
        type: 'get',
        async: false,
        data: {},
        success: function () {
        }
    })
}