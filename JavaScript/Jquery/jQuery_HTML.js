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