function login() {
    if ($('#mail').val() == ""  ) {
        $(".login-input-mail").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    } else if($('#password').val() == ""){
        $(".login-input-password").css("opacity", 1); //点击登录后显示loading，隐藏输入框
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
}
function pwdno(){
    $(".login-pwd-no").css("opacity", 0);
    $(".login-pwd").css("opacity", 1); //点击登录后显示loading，隐藏输入框
}