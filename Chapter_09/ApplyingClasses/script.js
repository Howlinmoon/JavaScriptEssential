// prevent a form from submitting
function preparePage() {
	document.getElementById("mainContent").onclick = function() {
        if ( document.getElementById("mainContent").className == "example") {
             document.getElementById("mainContent").className = "";
             console.log("className is now: empty");
        } else {
           document.getElementById("mainContent").className = "example";
            console.log("className is now: example");
        }
	};
}

window.onload =  function() {
	preparePage();
};