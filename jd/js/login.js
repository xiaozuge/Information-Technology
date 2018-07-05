/**
 * Created by Jack on 2018/6/28.
 */
$(function () {
    $(".qrcode-main").mouseover(function () {
        $(".qrcode-img").stop().animate({"left":"0"},300,function () {
            $(".qrcode-help").show();
        });
    }).mouseleave(function () {
        $(".qrcode-help").hide();
        $(".qrcode-img").stop().animate({"left":"60"},300);
    });
    //叉号的点击事件
    //叉号显示的时机

    $(".login-item input").keyup(function (){
        //console.log(this.value.length);
        if (this.value.length>0){
            $(this).next().show();
        }

    });
    $(".deltext").click(function () {
        $(this).siblings("input").val("");
        $(this).hide();
    });
    $(".title span:eq(0)").click(function () {
        $(".qrcode-main").show();
        $(".login-box").hide();
        $(this).addClass("current");
        $(".title span:eq(1)").removeClass("current");
    });
    $(".title span:eq(1)").click(function () {
        $(".qrcode-main").hide();
        $(".login-box").show();
        $(this).addClass("current");
        $(".title span:eq(0)").removeClass("current");
    });
});