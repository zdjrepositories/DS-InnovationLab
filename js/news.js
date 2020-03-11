$(function () {
    getUser('news');
        load();
        demo_menu();
        getVisit();

        function load() {
            head(4);
            var dTop = $(document).scrollTop();//可视区域到页面顶部的距离
            var wTop = $(window).height();//浏览器可视高度
            var eTop = $('.about-third-title').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - ($('.about-third-title').height() * 0.25) - 100 > eTop) {
                $('.about-third-title').animate({opacity:1},500).css({flter:"Alpha(Opacity=100)"});
            }
            eTop = $('.about-third-banner-table').offset().top;
            if (dTop + wTop - ($('.about-third-banner-table').height() * 0.25) - 100 > eTop) {
                $('.about-third-banner-table').animate({opacity: "1"},500);
            }
            eTop = $('.about-fourth-title').offset().top;
            if (dTop + wTop - ($('.about-fourth-title').height() * 0.25) - 150 > eTop) {
                $('.about-fourth-title').animate({opacity: 1},500);
            }
            eTop = $('.about-fourth-banner').offset().top;
            if (dTop + wTop - ($('.about-fourth-banner').height() * 0.25) - 100 > eTop) {
                $('.about-fourth-banner').animate({opacity: 1},500);
            }
        }

        window.addEventListener('scroll', function () {
                load();
            }
        )
    }
)

