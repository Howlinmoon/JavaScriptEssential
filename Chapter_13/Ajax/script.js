// Simple Ajax example.

// 1: Create the request 
var myRequest;

// feature check!
if (window.XMLHttpRequest) {  // does it exist? we're in Firefox, Safari etc.
    myRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // if not, we're in IE
    myRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

// 2: create an event handler for our request to call back
myRequest.onreadystatechange = function(){
    console.log("We were called!");
    console.log(myRequest.readyState);
    // we care about readyState == 4
    if (myRequest.readyState == 4) {
        // create a paragraph
        var p = document.createElement("p");
        // create a text node for that paragraph
        var t = document.createTextNode(myRequest.responseText);
        // append the text node to the paragraph
        p.appendChild(t);
        // now append it to the 'mainContent' id in the document
        document.getElementById("mainContent").appendChild(p);
    }
};

// This triggers the Ajax
// open and send it
myRequest.open('GET', 'simple.txt', true);
// any parameters?
myRequest.send(null);
