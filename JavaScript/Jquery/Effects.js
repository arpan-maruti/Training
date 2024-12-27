$(document).ready(function() {
    // width and opacity 
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
        //jQuery using Callback
        // $('.container').animate({left:"200px"},1000,()=>{
        //     $('.container').animate({left:"0px"},1000);
        // });

        $('.container').animate({left:"200px"},1000);
        $('.container').animate({left:"0px"},1000);
    });

    // fade 
    $('#btn6').click(()=>{
        $('.container').fadeIn("slow");
    });
    $('#btn7').click(()=>{
        $('.container').fadeOut();
    });
    $('#btn8').click(()=>{
        $('.container').fadeToggle(1000);
    });
    $('#btn9').click(()=>{
        $('.container').fadeTo("slow",0.1);
    });

    // slide 
    $('#btn10').click(()=>{
        $('.container').slideUp(3000);
    });
    $('#btn11').click(()=>{
        $('.container').slideDown();
    });
    $('#btn12').click(()=>{
        $('.container').slideToggle();
    });
    $('#btn13').click(()=>{
        $('.container').stop();
    });

    // chaining
    $('#btn14').click(()=>
    {
        $('.container').css("backgound-color","blue").fadeOut(2000).fadeIn(2000);
    });

});
