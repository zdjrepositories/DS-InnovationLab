$(function () {
        load();
        demomenu();
        indexfirst();
        indexthird();
        changebanner1();
        changebanner2();
        changebanner3();

        // getLike();
        //getVisit()
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

        //导航栏动画
        function demomenu() {
            $(".head-nav-demo").hover(function () {
                $(".head-nav-demo-list").slideDown(400);
            }, function () {
                $(".head-nav-demo-list").slideUp(400);
            })
        }

        //导航栏Demo菜单
        $(".head-nav-demo-list li").hover(function () {
            $(".head-nav-demo-list>li:hover").css("background-color", "#f0fff0");
            $(".head-nav-demo-list>li:hover>a").css("color", "#3dcd58");
        }, function () {
            $(".head-nav-demo-list>li").css("background-color", "#fff");
            $(".head-nav-demo-list>li>a").css("color", "#666");
        });

        function load() {
            var t = $(document.documentElement).scrollTop() + $(document.body).scrollTop();   // 目前监听的是整个body的滚动条距离
            if (t > 20) {
                $(".head-nav>ul>li>a").css("border-color", "#fff");
                $('.head-list>li:nth-child(1) a').css("color", "#fff")
                $('.head').addClass("head-active");
            } else if (t < 20) {
                $(".head-nav>ul>li>a").css("border-color", "#3dcd58");
                $('.head-list>li:nth-child(1) a').css("color", "#3dcd58")
                $('.head').removeClass("head-active");
            }

            var h = $('.index-first').height() * 0.5 - $('.index-first-banner-title').height() * 0.5;
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

        var p = 0;
        window.addEventListener('scroll', function () {
            var t = $(document.documentElement).scrollTop() + $(document.body).scrollTop();  // 目前监听的是整个body的滚动条距离
            if (p < t) {
                $('.index-first-down-img').animate({opacity: 1});
            } else {
                $('.index-first-down-img').animate({opacity: 0});
            }
            p = t;
            if (t > 20) {
                $(".head-nav>ul>li>a").css("border-color", "#fff");
                $('.head-list>li:nth-child(1) a').css("color", "#fff")
                $('.head').addClass("head-active");
            } else if (t < 20) {
                $(".head-nav>ul>li>a").css("border-color", "#3dcd58");
                $('.head-list>li:nth-child(1) a').css("color", "#3dcd58")
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

        // $(".index-third-content-like-img").click(function (){
        //     $('.index-third-content-like-img').css("opacity", "0");
        //     $('.index-third-content-like-img-on').css("opacity", "1");
        //     $('.index-third-content-like-sum').css("color", "#3dcd58");
        // });


    }
);

function like(id) {
    var img = ".index-third-content-like-img" + id;
    var img_on = ".index-third-content-like-img-on" + id;
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
