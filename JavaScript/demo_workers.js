
try {
    document.getElementById("outputWorker"); 
} catch (exception){
    console.log(exception);
    postMessage("DOM access is not allowed in Web Workers.");
}

// async function callDemoWorker()
// {
//     try {
//         let myObject = await fetch("ajax_data.txt");
//         let myText = await myObject.text();
//         postMessage(myText);
//     } catch {
//         postMessage("DOM access is not allowed in Web Workers.");
//     }
// }
// callDemoWorker();
