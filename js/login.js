function login() {
    if ($('#mail').val() == ""  ) {
        $(".login-input-mail").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    } else if($('#password').val() == ""){
        $(".login-input-password").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    }
    else  {
        $.post("/innovationlab/login",{"email":$('#email').val(),"password":$('#password').val()},function (data) {
            console.log(data);
            var page= window.location.href;
            console.log(page);
            return false;
        })
    }
}