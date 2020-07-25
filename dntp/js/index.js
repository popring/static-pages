$(function(){
    $(".items").mouseover(function(){
        $(this).addClass("active");
    })
    $(".items").mouseout(function(){
        $(this).removeClass("active");
    })

    $(".b_btn>li").click(function(){
        $(".b_btn>li").removeClass('active');
        $(this).addClass("active")
    })
})