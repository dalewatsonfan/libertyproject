// =====================
// Create required vars
// =====================
var output = $('.output');
var input = $('textarea.input');
var toOutput;
input.keypress(function(e) {
	if (e.which == 13) {
		var inputVal = $.trim(input.val());
		//console.log(inputVal);

		if (inputVal == "help") {
			help();
			input.val('');
		} else {
			Output('<span>command not found</span></br>');
			input.val('');
		}
	}
});
// functions related to the commands typed
// =======================================

// prints out a seperator
function seperator() {
	Output('<span class="seperator">== == == == == == == == == == == == == == == == == ==</span></br>');
}

//clears the screen
function clearConsole() {
	output.html("");
	Output('<span>clear</span></br>');
}

// Prints out the result of the command into the output div
function Output(data) {
	$(data).appendTo(output);
}