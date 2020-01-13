window.addEventListener('scroll', function(){
    let t = $('body, html').scrollTop();   // 目前监听的是整个body的滚动条距离
    if(t>10){
        $('.head').addClass('head-active')
    }else{
        $('.head').removeClass('head-active')
    }
})