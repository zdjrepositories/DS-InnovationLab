{
    $(function () {
            demomenu()
            changebanner1()
            changebanner2()
            changebanner3()
        // changebanner()
            titlehover1()
            titlehover2()
            titlehover3()
        demosidenav()


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

        function changebanner() {
            $(".index-third--title1").click(function () {
                $('.index-third-content1').toggle( "slide" );
                $('.index-third-content2').animate({width: 1024}, 1000);
                $('.index-third-content3').animate({width: 0}, 1000);

            });
        }
            function changebanner1() {
                $(".index-third--title1").click(function () {
                    $('.index-third-content1').animate({width: 1024}, 1000);
                    $('.index-third-content2').animate({width: 0}, 1000);
                    $('.index-third-content3').animate({width: 0}, 1000);

                });
            }

            function changebanner2() {
                $(".index-third--title2").click(function () {
                    $('.index-third-content1').animate({width: 0}, 1000);
                    $('.index-third-content2').animate({width: 1024}, 1000);
                    $('.index-third-content3').animate({width: 0}, 1000);

                });
            }

            function changebanner3() {
                $(".index-third--title3").click(function () {
                    $('.index-third-content1').animate({width: 0}, 1000);
                    $('.index-third-content2').animate({width: 0}, 1000);
                    $('.index-third-content3').animate({width: 1024}, 1000);

                });
            }

            function titlehover1() {
                $(".index-third--title1").hover(function () {
                    $('.index-third-banner-arrows-icon').animate({marginLeft: 310}, 300);

                });
            }

            function titlehover2() {

                $(".index-third--title2").hover(function () {
                    $('.index-third-banner-arrows-icon').animate({marginLeft: 500}, 300);

                });
            }

            function titlehover3() {
                $(".index-third--title3").hover(function () {
                    $('.index-third-banner-arrows-icon').animate({marginLeft: 680}, 300);

                });
            }


            function demosidenav() {
                $(".demo-side-nav").click(function () {

                }, function () {
                    $('.demo-side-nav-img').toggle();
                    $('.demo-side-nav-close').toggle();
                    $('.demo-side-nav-list').toggle(300)
                },true)
            }

        }
    )
}
// $(function () {
// //     var p = $("body");
// //     var offset = p.offset();
// //     $(".index-first").css({
// //         top: offset.top,
// //         left: offset.left,
// //         width: $(".index-first").width(),
// //         height: $("body").height(),
// //         backgroundColor: "white",
// //         opacity: 1,
// //         position: "absolute"
// //     });
// //     if (jQuery.isReady) {
// //         $(".index-first").fadeIn(1000);
// //     }
// // })
// $(document).ready(function () {
//     $(".index-first-banner-title-top").fadeIn(500, function () {
//         $(".index-first-banner-title-bottom").fadeIn(1200, function () {
//             $(".index-first-down-img").fadeIn(1800);
//         });
//     });
// });

// $(function() {
//     // 运行当前选中的特效
//     function runEffect() {
//         // 从中获取特效类型
//         var selectedEffect = $( "#effectTypes" ).val();
//
//         // 大多数的特效类型默认不需要传递选项
//         var options = {};
//         // 一些特效带有必需的参数
//         if ( selectedEffect === "scale" ) {
//             options = { percent: 100 };
//         } else if ( selectedEffect === "size" ) {
//             options = { to: { width: 280, height: 185 } };
//         }
//
//         // 运行特效
//         $( "#effect" ).show( selectedEffect, options, 500, callback );
//     };
//
//     // 回调函数
//     function callback() {
//         setTimeout(function() {
//             $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
//         }, 1000 );
//     };
//
//     // 根据选择菜单值设置特效
//     $( "#button" ).click(function() {
//         runEffect();
//         return false;
//     });
//
//     $( "#effect" ).hide();
// });