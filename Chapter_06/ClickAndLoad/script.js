//document.onclick = function () {
//    alert("You clicked somewhere on the document");
//}


function preparedEventHandlers() {

    var myImage = document.getElementById("mainImage");

    myImage.onclick = function() {
        alert("You clicked somewhere on the main image!");
    }
    
}



window.onload = function() {

    // call our handler once the document has completely loaded
    preparedEventHandlers();
}
