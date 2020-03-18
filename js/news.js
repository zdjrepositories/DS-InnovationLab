$(function () {
        getUser('news');
        load();
        demo_menu();
        getVisit();
        newfirst();

        function load() {
            head(4);
            var dTop = $(document).scrollTop();//可视区域到页面顶部的距离
            var wTop = $(window).height();//浏览器可视高度
            var eTop = $('.news-third-title').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - ($('.news-third-title').height() * 0.25) - 100 > eTop) {
                $('.news-third-title').animate({opacity: 1}, 500);
            }
            var eTop = $('.news-third-content-years').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - ($('.news-third-content-years').height() * 0.25) - 100 > eTop) {
                $('.news-third-content-years').animate({opacity: 1}, 500);
            }
            var eTop = $('.news-third-content-monthly-2019').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - ($('.news-third-content-monthly-2019').height() * 0.25) - 100 > eTop) {
                $('.news-third-content-monthly-2019').animate({opacity: 1}, 500);
            }
        }

        function newfirst() {
            $('.news-first-banner-img').animate({opacity: 1}, 500);
            $('.news-first-title').delay(150).animate({opacity: 1}, 500);
            $('.news-second-title').delay(300).animate({opacity: 1}, 500);
            $('.news-second-content').delay(450).animate({opacity: 1}, 500);
        }

        window.addEventListener('scroll', function () {
                load();
            }
        )
    }
)

function click2019() {
    $('.news-third ').css("height", "1340");


    $('.news-third-content-year-2019').css("background-color", "#3dcd58");
    $('.news-third-content-year-2020').css("background-color", "#ffffff");
    $('.news-third-content-year-2019>div').css("color", "#ffffff");
    $('.news-third-content-year-2020>div').css("color", "#3dcd58");
    $('.news-third-content-year-2020').css("border", "solid 1px #3dcd58");

    $('.news-third-content-monthly-2020').hide();
    $('.news-third-content-monthly-2019').show();
}

function click2020() {
    $('.news-third ').css("height", "640");
    $('.news-third-content-year-2020').css("background-color", "#3dcd58");
    $('.news-third-content-year-2019').css("background-color", "#ffffff");
    $('.news-third-content-year-2019 div').css("color", "#3dcd58");
    $('.news-third-content-year-2020 div').css("color", "#ffffff");
    $('.news-third-content-year-2019').css("border", "solid 1px #3dcd58");
    $('.news-third-content-monthly-2019').hide();
    $('.news-third-content-monthly-2020').show();
}

