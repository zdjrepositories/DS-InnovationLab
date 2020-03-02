function dispose(){
    $(".demo-button-text-dispose").html("<img class='await-ing' src='images/circle.png'>&nbsp;正在诊断");
    setTimeout("disposeing()",1500);
}
function analyze(){
    $(".demo-button-text-analyze").html("<img class='await-ing' src='images/circle.png'>&nbsp;正在分析");
    setTimeout("analyzeing()",1200);
}
function disposeing(){
    var obj = document.getElementsByName('point');
    var demand = '';
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked) {
            demand += obj[i].value + ',';//如果选中，将value添加到变量s中
        }
    }
    console.log(demand);
   $(".demo-button-text-dispose").text("智能诊断");
}
function analyzeing(){
    $(".demo-button-text-analyze").text("智能分析");
}