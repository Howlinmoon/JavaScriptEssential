
var emailField = document.getElementById("email");

// If the use clicks in the "Email:" text entry box - AND the current contents are 'your email', then
// this will blank the text box in preparation for the user to input a real email address
emailField.onfocus = function() {
	if ( emailField.value == "your email") {
		emailField.value = "";
	}
};

// if the user selects a different portion of the form and leaves the email entry box - this executes
// to check and see if the value is still blank.  If so - the prompt 'your email' is restored.
emailField.onblur = function() {
	if ( emailField.value == "") {
		emailField.value = "your email";
	}
};
