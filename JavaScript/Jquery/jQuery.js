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

    //text,html,value, Attribute
    $('#btn15').click(()=>{
        alert($('#test').text());
    });
    $('#btn16').click(()=>{
        alert($('#test').html());
    });
    $('#btn17').click(()=>{
        alert($('#test1').val());
    });
    $('#btn18').click(()=>{
        alert($('#test1').attr("value"));
    });

    //paragraph append or prepend
    $('#btn19').click(()=>{
        $('#test').append("APPENDED");
    });
    $('#btn20').click(()=>{
        $('#test').prepend("PREPENDED");
    });

    //before or after
    $('#btn21').click(()=>{
        $('#test').before("before");
    });
    $('#btn22').click(()=>{
        $('#test').after("after");
    });

    //.remove and .empty for deleting attributre and empty the attribute

    // addClass(), removeClass(), toggleClass()
    $('#btn23').click(()=>{
        $('div').addClass('container');
    });
    $('#btn24').click(()=>{
        $('div').removeClass('container');
    });
    $('#btn25').click(()=>{
        $('div').toggleClass('container');
    });

    //width, innerWidth, outerWidth.
    $('#btn26').click(()=>{
        alert("width:"+$('div').width() + " height:" +$('div').height()+" Inner height:" +$('div').innerHeight()+" Outer height:" +$('div').outerHeight()+" Inner Width:" +$('div').innerWidth()+" Outer Width:" +$('div').outerWidth());
    });

    //parent
    $('div').parent().css({"background-color":"gray"});
    //parents(): all parents
    //parentsUntil():  [$("span").parentsUntil("div");]=selects all the selector in between span and div.
    //children : apply in childeren
    //find : finds the attribute
    // Other Methods: siblings(), next(), nextAll(), nextUntil(), prev(), prevAll(), prevUntil(), first(), last(), .eq(n){for nth element}, filter(), not()

    //if we dont want to use $ then we can use jQuery() or any word by noConflict()
    // $.noConflict();
    // jQuery('.container').click(()=>{
    //     alert("container clicked.");
    // });

    //or
    // var jq = $.noConflict();
    // jq('.container').click(()=>{
    //     alert("container clicked.");
    // });

    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myList li").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

});
