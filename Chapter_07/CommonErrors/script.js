// Issue 1: Syntax errors
/*
function myFunction() {
	console.log("You called myFunction");
}

window.onload = function() {
	myFunction();
}

// fixed
*/

// Issue 2: calling a non-existent function
/*
function myFunction() {
	console.log("You called myFunction");
}

window.onload = function() {
	// fixed the typo'd function name
    myFunction();
}
*/

/*
// Issue 2b: typos very common with DOM methods
// fixed typo'd case for Id
var x = document.getElementById("something");

// Issue 2c: using a non-existent object method
var myArray = ["one","two","three"];
//typo in 'reverse' fixed
console.log(myArray.reverse());

*/

// Issue 4: using document.getElementById before the element is part of the DOM.
// make sure the DOM is loaded - use window.load
var myImage = document.getElementById("someImage");

// Issue 5 - assignment instead of equality
// This is NOT technically an error

var a = 10;
var b = 20;

// fixed the following equality vs assignment typo
if ( a == b) {
	console.log("Something is wrong with the universe.");
} else {
	console.log("This is what I expect!")
}


// Issue 6: missing parameters in function calls:
// This is NOT an error - it's just an unexpected result.
/*
function calculateSum(a,b,c) {
	return a + b + c;
}

var result = calculateSum(500,1000);
console.log(result);

*/


