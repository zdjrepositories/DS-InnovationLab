function dispose(){
    $(".demo-button-text-dispose").text("正在诊断");
    setTimeout("disposeing()",1200);
}
function analyze(){
    $(".demo-button-text-analyze").text("正在分析");
    setTimeout("analyzeing()",800);
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