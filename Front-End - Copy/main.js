
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "1968") {
		correct++;
}
	if (question2 == "Zuidplein") {
		correct++;
}
	if (question3 == "Ahmed Aboutaleb") {
		correct++;
	}

	var pictures = ["img/Ri.gif", "img/k.gif", "img/l.gif"];
	var messages = ["Good job", "That's okay, I guess", "Oh no"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("total_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
