function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;

//Sets the result to zero at the beginning of the quiz
    var correct = 0;

    //Increases user result by one point if correct answer is selected
    if (question1 == "Mar-Sep") {
        correct++;
    }

    if (question2 == "6 weeks") {
        correct++;
    }

    if (question3 == "Pollen") {
        correct++;
    }

    if (question4 == "1,500") {
        correct++;
    }

    if (correct < 4) {
        document.getElementById("fullReset").innerHTML = `<button  class="stylish-button">Try Again</button>`;
    } else if (correct === 4) {
        swal({
    title: "Well Done!",
    text: "Your discounted Honey is on the way!",
    type: "success"
}).then(function() {
    window.location = "index.html";
});
    }

//Reveals results
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct out of 4.";    
}

//Refreshes the page so the user can start again with the score resetting to zero
var fullReset = document.getElementById('fullReset');

fullReset.addEventListener('click', function() {
    location.reload();
}, false);

// Sources of guidance used: 

//https://stackoverflow.com/questions/40371972/resetting-a-quiz-with-reset-button

function startQuiz() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("fullReset").style.visibility = "hidden";
    document.getElementById("questionOne").innerHTML =
    `<div class="quizspan">
                        <p class="question">1. When are bee's most active?</p>
                        <input type="radio" id="mc1" name="question1" value="Mar-Sep" class="answer">Mar-Sep</input><br>
                        <input type="radio" id="mc2" name="question1" value="Sep-Mar" class="answer">Sep-Mar</input><br>
                     </div>
                     <div class="quiz-next">
											<button type="button" class="stylish-button" onclick="quizNextOne()" id="quiz-next-one" class="btn btn-default">Next</button>
										</div>`;
}

function quizNextOne() {
    document.getElementById("quiz-next-one").style.display = "none";
    document.getElementById("fullReset").style.visibility = "hidden";
    document.getElementById("questionOne").style.display = "none";
    document.getElementById("questionTwo").innerHTML =
                        `<div class="quizspan">
                        <p class="question">2. How long do honey bee's live?</p>
                        <input type="radio" id="mc3" name="question2" value="6 weeks" class="answer">6 weeks<br>
                        <input type="radio" id="mc4" name="question2" value="6 months" class="answer">6 months<br>
                     </div>
                     <div class="quiz-nextOne">
											<button type="button" class="stylish-button" onclick="quizNextTwo()" id="quiz-next-two" class="btn btn-default">Next</button>
										</div>`;
}

function quizNextTwo() {
    document.getElementById("quiz-next-two").style.display = "none";
    document.getElementById("fullReset").style.visibility = "hidden";
    document.getElementById("questionTwo").style.display = "none";
    document.getElementById("questionThree").innerHTML =
                        `<div class="quizspan">
                        <p class="question">3. What do bee's collect from flowers?</p>
                        <input type="radio" id="mc5" name="question3" value="Pollen" class="answer">Pollen<br>
                        <input type="radio" id="mc6" name="question3" value="Honey" class="answer">Honey<br>
                     </div>
                     <div class="quiz-nextTwo">
											<button type="button" class="stylish-button" onclick="quizNextThree()" id="quiz-next-three" class="btn btn-default">Next</button>
										</div>`;
}

function quizNextThree() {
    document.getElementById("quiz-next-three").style.display = "none";
    document.getElementById("fullReset").style.visibility = "visible";
    document.getElementById("questionThree").style.display = "none";
    document.getElementById("questionFour").innerHTML =
                        `<div class="quizspan">
                        <p class="question">4. How many eggs does a Queen Bee lay a day? </p>
                        <input type="radio" id="mc7" name="question4" value="150" class="answer">150<br>
                        <input type="radio" id="mc8" name="question4" value="1,500" class="answer">1,500<br>
                     </div>
                     <input type="button" id="button" class="stylish-button" value="Results" onclick= "check()" class="btn btn-info">`;
}
