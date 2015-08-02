// Two methods for timers - setTimeout and SetInterval (single / repeating)

function simpleMessage() {
	alert("Images will now start rotating.");
}

// settimeout is in milliseconds
setTimeout(simpleMessage, 5000);

var myImage = document.getElementById("mainImage");

var imageArray = ["_images/overlook.jpg","_images/winery_sign.jpg","_images/lunch.jpg",
				  "_images/bigSur.jpg","_images/flag_photo.jpg","_images/mission_look.jpg"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
// call the function changeImage every 5 seconds.
var intervalHandler = setInterval(changeImage,5000);

// Now - if someone clicks on the image being rotated, let's stop it.

myImage.onclick = function () {

    clearInterval(intervalHandler);
    console.log("You clicked on the image - stopping the rotation");
}
