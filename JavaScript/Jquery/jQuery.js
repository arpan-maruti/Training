$(document).ready(function() {
    $('#btn1').click(() => {
        $('.container').animate({ width: "200px" }, 1000);
    });
    $('#btn2').click(() => {
        $('.container').animate({ height: "200px" }, 1000);
    });
    $('#btn3').click(() => {
        $('.container').toggle();
    });
    $('#btn4').click(() => {
        $('.container').animate({opacity:0.5},200);
    });
    $('#btn5').click(() => {
        $('.container').animate({left:"200px"},1000,()=>{
            $('.container').animate({left:"0px"},1000);
        });
    });
    
});
