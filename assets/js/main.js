// global variables
let hiveOne;
let hiveTwo;
let hiveThree;
let honeyInterval;
let totalHoney;

// EventListeners for changes in Honey Quantities
const cappagh = document.getElementById('hiveOne');
cappagh.addEventListener('change', event => {
    hiveOne = (event.target.value);
});

const modelligo = document.getElementById('hiveTwo');
modelligo.addEventListener('change', event => {
    hiveTwo = (event.target.value);
});

const dungarvan = document.getElementById('hiveThree');
dungarvan.addEventListener('change', event => {
    hiveThree = (event.target.value);
});

// Fills the Honey Jar to the amount selected
function fillJar() {
    let totalArray = ['A', 'B', 'C'];
    totalArray[0] = Number(hiveOne);
    totalArray[1] = Number(hiveTwo);
    totalArray[2] = Number(hiveThree);

    let totalHoney = totalArray.reduce(function (a, b) {
        return a + b;
    }, 0);

    if (totalHoney === 0) {
        swal("Please select some honey!");
    } else if (totalHoney <= 100) {
        let jarAmount = 0; // empty jar
        honeyInterval = setInterval(() => {
            if (jarAmount <= totalHoney) {
                if (jarAmount != 0) {
                    if (jarAmount === 10) {
                        document.getElementById("honey-fill").innerHTML = `<img id="honey" class="fade-in" src="assets/images/${jarAmount}-full.png">`;
                    } else {
                        document.getElementById("honey-fill").innerHTML = `
                        <img id="honey" src="assets/images/${jarAmount - 10}-full.png">
                        <img id="honey" class="fade-in" src="assets/images/${jarAmount}-full.png">`;
                    }
                }
                jarAmount += 10; // increment by 10
            } else {
                // jarAmount === hiveOne amount, so clear interval
                clearInterval(honeyInterval);
                document.getElementById("honey-fill").innerHTML = `<img id="honey" src="assets/images/${totalHoney}-full.png">`;
            }
        }, 200);
    } else if (totalHoney > 100) {
        swal("Please fill jar to exactly 100%").then(function () {
            document.getElementById("honey").className = "empty-jar";
            document.getElementById("cappagh").innerHTML = 0;
            document.getElementById("dungarvan").innerHTML = 0;
            document.getElementById("modelligo").innerHTML = 0;
            document.getElementById("listTotal").innerHTML = 0;
            hiveOne = 0;
            hiveTwo = 0;
            hiveThree = 0;
            $("button").click(function () {
                $('select').prop('selectedIndex', 0);
            });
        });
    } 
};


function fillListOne() {
    document.getElementById("dungarvan").innerHTML = hiveOne;
    let totalArray = [0, 0, 0];
    totalArray[0] = Number(hiveOne);
    totalArray[1] = Number(hiveTwo);
    totalArray[2] = Number(hiveThree);

    let totalHoney = totalArray.reduce(function (a, b) {
        return a + b;
    }, 0);
    document.getElementById("listTotal").innerHTML = totalHoney;
    console.log(totalHoney);
    fillJar();

};

function fillListTwo() {
    document.getElementById("cappagh").innerHTML = hiveTwo;
    let totalArray = [0, 0, 0];
    totalArray[0] = Number(hiveOne);
    totalArray[1] = Number(hiveTwo);
    totalArray[2] = Number(hiveThree);

    let totalHoney = totalArray.reduce(function (a, b) {
        return a + b;
    }, 0);
    document.getElementById("listTotal").innerHTML = totalHoney;
    console.log(totalHoney);
    fillJar();
};

function fillListThree() {
    document.getElementById("modelligo").innerHTML = hiveThree;
    let totalArray = [0, 0, 0];
    totalArray[0] = Number(hiveOne);
    totalArray[1] = Number(hiveTwo);
    totalArray[2] = Number(hiveThree);

    let totalHoney = totalArray.reduce(function (a, b) {
        return a + b;
    }, 0);
    document.getElementById("listTotal").innerHTML = totalHoney;
    console.log(totalHoney);
    fillJar();
};



document.addEventListener("DOMContentLoaded", function () {
    hiveOne = 0;
    hiveTwo = 0;
    hiveThree = 0;
    let startHoney = [0, 0, 0];
    startHoney[0] = 0;
    startHoney[1] = 0;
    startHoney[2] = 0;

    let totalHoney = startHoney.reduce(function (a, b) {
        return a + b;
    }, 0);
   
    document.getElementById("modelligo").innerHTML = hiveOne;
    document.getElementById("cappagh").innerHTML = hiveTwo;
    document.getElementById("dungarvan").innerHTML = hiveThree;
    document.getElementById("listTotal").innerHTML = totalHoney;
});

function Redirect() {
    window.location = "honey.html";
};


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
    // Notification of result
    if (correct < 4) {
        swal({
            title: "Ooops!!",
            text: "No discount this time, Please proceed to Checkout!",
            type: "fail"
        }).then(function () {
            window.location = "index.html";
        });
    } else if (correct === 4) {
        swal({
            title: "Well Done!",
            text: "Your discounted Honey is on the way!",
            type: "success"
        }).then(function () {
            window.location = "index.html";
        });
    }

    //Reveals results
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct out of 4.";
}

// Each question continues on to next

function startQuiz() {
    let verifyHoney;
    verifyHoney = Number(document.getElementById("listTotal").innerHTML);
    if (verifyHoney !== 100) {
        swal("Please select 100% of Honey first");
    } else if (verifyHoney === 100) {
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
};

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
};

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
};

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
};


