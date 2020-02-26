function login() {
    if ($('#email').val() == ""  ) {
        $(".login-input-mail-error").text("请输入邮箱")
        $(".login-input-mail-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    } else if($('#email').val().indexOf("@se.com")<0 && $('#email').val().indexOf("@non.se.com")<0){
        $(".login-input-mail-error").text("邮箱格式错误")
        $(".login-input-mail-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    }else if($('#password').val() == ""){
        $(".login-input-password-error").text("请输入密码")
        $(".login-input-password-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    }else if($('#code').val() == ""){
        $(".login-input-code-error").text("请输入验证码")
        $(".login-input-code-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    }else if($('#code').val()!= sum){
        $(".login-input-code-error").text("验证码错误")
        $(".login-input-code-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    }
    else  {

        $.post("/innovationlab/login",{"email":$('#email').val(),"password":$('#password').val()},function (data) {
           if(data=="1"){
           var page= GetQueryString("page")+".html";
             window.location.href=page;
             if(GetQueryString("demo")!=""){
                getDemo(GetQueryString("page"),GetQueryString("demo"));
               }
           }

        })
    }
}


function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}
function pwd(){
    $(".login-pwd-no").css("opacity", 1);
    $(".login-pwd").css("opacity", 0); //点击登录后显示loading，隐藏输入框
    $("#password").attr("type","text");
}
function pwdno(){
    $(".login-pwd-no").css("opacity", 0);
    $(".login-pwd").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    $("#password").attr("type","password");
}

$(function () {
    var sum;
    $("#email").focus(function(){
        $(".login-input-mail").css("opacity", 1);
        $(".login-input-mail-error").css("opacity", 0);
    });
    $("#email").blur(function(){$(".login-input-mail").css("opacity", 0);});
    $("#password").focus(function(){
        $(".login-input-password").css("opacity", 1);
        $(".login-input-password-error").css("opacity", 0);
    });
    $("#password").blur(function(){$(".login-input-password").css("opacity", 0);});
    $("#code").focus(function(){
        $(".login-input-code").css("opacity", 1);
        $(".login-input-code-error").css("opacity", 0);
    });
    $("#code").blur(function(){$(".login-input-code").css("opacity", 0);});

   code()

});
function code() {
    var numa=Math.floor(Math.random() * 100);
    var numb=Math.floor(Math.random() * 100);
    var x=Math.floor(Math.random() *2);
    var char;
    if(x==0){
        char='+';
        sum=numa+numb;
    }else {
        char='-';
        sum=numa+numb;
    }
    $(".login-code-text").text(numa+char+numb+"=?");


}











