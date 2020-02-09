function indexfirst() {
    $('.index-first-banner-bg').animate({opacity: 1}, 500);
    $('.index-first-banner-title-bottom').delay(1000).animate({opacity: 1}, 1000);
    $('.index-first-down-img').delay(1600).animate({opacity: 1}, 350);
    $('.index-first-banner-title-top').delay(300).animate({opacity: 1}, 1000);
    $('.index-first-banner-title-bottom').delay(900).animate({opacity: 1}, 1000);
    $('.index-first-down-img').delay(1000).animate({opacity: 1}, 350);
}

$(function () {
        demo_menu();
        indexfirst();
        getLike();
        getVisit()
        load();


        window.addEventListener('scroll', function () {
            head(1);
            if ($('.index-third-dome').css("opacity") != 1) {
           load();
            }
            var head_hight = $(document.documentElement).scrollTop() + $(document.body).scrollTop();  // 目前监听的是整个body的滚动条距离
            $('.head-list>li:nth-child(' + page + ')>a').css("font-weight", "520");
            if (head_hight > 30) {
                $('.index-first-down-img').animate({opacity: 0},{queue:false, duration:100});
            } else if (head_hight < 30) {
                $('.index-first-down-img').animate({opacity: 1},{queue:false, duration:100});
            }
            $(".head-nav-demo-list").slideUp(400);
        })


    }
);

function changebanner(id) {
    if (id == 1) {
        $('.index-third-banner-arrows-icon').animate({marginLeft: "334px"}, 250);
        $("#index-third-banner-ul").animate({marginLeft: "0px"}, {queue:false, duration:500})
    } else if (id == 2) {

        $('.index-third-banner-arrows-icon').animate({marginLeft: "501px"}, 250);
        $("#index-third-banner-ul").animate({marginLeft: "-1124px"},{queue:false, duration:500})
    } else if (id == 3) {
        $('.index-third-banner-arrows-icon').animate({marginLeft: "687px"}, 250);
        $("#index-third-banner-ul").animate({marginLeft: "-2248px"}, {queue:false, duration:500})

    }
}

function load() {
    head(1);

    var dTop = $(document).scrollTop();//可视区域到页面顶部的距离
    var wTop = $(window).height();//浏览器可视高度
    var eTop = 0;
    if ($('.index-second-title').css("opacity") != 1) {
        eTop = $('.index-second-title').offset().top;//容器距离整个页面顶部的距离
        if (dTop + wTop - ($('.index-second-title').height() * 0.25) - 380 > eTop) {
            $('.index-second-title').animate({opacity: 1}, 500);
        }
    }
    if ($('.index-second-title').css("opacity") != 1) {
        eTop = $('.index-second-banner').offset().top;
        if (dTop + wTop - ($('.index-second-banner').height() * 0.25) - 380 > eTop) {
            $('.index-second-banner').animate({opacity: 1}, 500);
        }
    }
    if ($('.index-third-title').css("opacity") != 1) {
        eTop = $('.index-third-title').offset().top;//容器距离整个页面顶部的距离
        if (dTop + wTop - ($('.index-third-title').height() * 0.25) - 300 > eTop) {
            $('.index-third-title').animate({opacity: 1}, 500);
        }
    }
    if ($('.index-third-banner').css("opacity") != 1) {
        eTop = $('.index-third-banner').offset().top;
        if (dTop + wTop - ($('.index-third-banner').height() * 0.25) - 300 > eTop) {
            $('.index-third-banner').animate({opacity: 1}, 500);
        }
    }
    if ($('.index-third-banner-tab').css("opacity") != 1) {
        eTop = $('.index-third-banner-tab').offset().top;
        if (dTop + wTop - ($('.index-third-banner-tab').height() * 0.25) - 180 > eTop) {
            $('.index-third-banner-tab').animate({opacity: 1}, 500);
        }
    }
    if ($('.index-third-banner ul').css("opacity") != 1) {
        eTop = $('.index-third-banner ul').offset().top;
        if (dTop + wTop - ($('.index-third-banner ul').height() * 0.25) - 180 > eTop) {
            $('.index-third-banner ul').animate({opacity: 1}, 500);

        }
    }
    if ($('.index-third-dome').css("opacity") != 1) {
        eTop = $('.index-third-dome').offset().top;
        if (dTop + wTop - ($('.index-third-dome').height() * 0.25) - 80 > eTop) {
            $('.index-third-dome').animate({opacity: 1}, 500);
        }
    }
}
