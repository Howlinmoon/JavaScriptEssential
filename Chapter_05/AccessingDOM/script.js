var mainTitle = document.getElementById("mainTitle");

console.log("This is an element of type: ", mainTitle.nodeType );
console.log("The inner HTML is ", mainTitle.innerHTML);
console.log("Child nodes: ", mainTitle.childNodes.length);

var myLinks = document.getElementsByTagName("a");
console.log("Links: ", myLinks.length);

var mainContent = document.getElementById("mainContent");
mainContent.setAttribute("align", "right");

var sidebar = document.getElementById("sidebar");
console.log(sidebar.innerHTML);
