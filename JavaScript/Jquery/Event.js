$(document).ready(function() {

    // Click Event
    $("#clickBtn").click(function() {
        alert("Button clicked!");
    });

    // Double Click Event
    $("#dblclickBtn").dblclick(function() {
        alert("Button double-clicked!");
    });

    // Mouse Enter Event
    $("#mouseenterBtn").mouseenter(function() {
        $(this).css("background-color", "yellow");
    });

    // Mouse Leave Event
    $("#mouseleaveBtn").mouseleave(function() {
        $(this).css("background-color", "initial");
    });

    // Mouse Down Event
    $("#mousedownBtn").mousedown(function() {
        alert("Mouse button down on the button!");
    });

    // Hover Event (Both mouseenter and mouseleave)
    $("#hoverBtn").hover(
        function() {
            $(this).css("background-color", "lightgreen");
        },
        function() {
            $(this).css("background-color", "initial");
        }
    );

    // Focus Event
    $("#test1").focus(function() {
        $(this).css("background-color", "lightblue");
    });

    // Blur Event
    $("#test1").blur(function() {
        $(this).css("background-color", "blue");
    });

    // Using .on() for multiple events (click and mouseenter)
    $("#onEventBtn").on("click mouseenter", function() {
        $(this).css("color", "blue");
    });

});
