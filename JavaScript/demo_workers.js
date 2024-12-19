let i=0;
function timeCount()
{
    
    i++;
    postMessage(i);
    setTimeout("timeCount()",500);
}
timeCount();

//can't access DOM Element in Worker Thread
// console.log(window.location.href);