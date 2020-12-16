// global variables
let hiveOne;
let hiveTwo;
let hiveThree;
let honeyInterval;
let totalHoney;


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


function fillJar() {
    let totalArray = ['A','B','C'];
    totalArray[0] = Number(hiveOne);
    totalArray[1] = Number(hiveTwo);
    totalArray[2] = Number(hiveThree);

    let totalHoney= totalArray.reduce(function(a, b){
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
                        <img id="honey" src="assets/images/${jarAmount-10}-full.png">
                        <img id="honey" class="fade-in" src="assets/images/${jarAmount}-full.png">`;
                }
            }
            jarAmount += 10; // increment by 10
        } else {
            // jarAmount === hiveOne amount, so clear interval
            clearInterval(honeyInterval);
            document.getElementById("honey-fill").innerHTML = `<img id="honey" src="assets/images/${totalHoney}-full.png">`;
        }
    }, 500);
} else if (totalHoney > 100) {
    swal("Please fill jar to exactly 100%");
} if (totalHoney === 100) {
    document.getElementById("checkout-quiz-button").innerHTML = `<button onclick="verify()" id="quiz-page-button" class="stylish-button rounded-pill main-page-button-text">Try our quiz for a discount!</button>`;
    }
console.log(totalHoney);
};


function fillListOne() {
      document.getElementById("dungarvan").innerHTML = hiveOne;
      let totalArray = [0,0,0];
    totalArray[0] = Number(hiveOne);
    totalArray[1] = Number(hiveTwo);
    totalArray[2] = Number(hiveThree);

    let totalHoney= totalArray.reduce(function(a, b){
        return a + b;
    }, 0);
      document.getElementById("listTotal").innerHTML = totalHoney;
      console.log(totalHoney);
    };

function fillListTwo() {
      document.getElementById("cappagh").innerHTML = hiveTwo;
      let totalArray = [0,0,0];
    totalArray[0] = Number(hiveOne);
    totalArray[1] = Number(hiveTwo);
    totalArray[2] = Number(hiveThree);

    let totalHoney= totalArray.reduce(function(a, b){
        return a + b;
    }, 0);
      document.getElementById("listTotal").innerHTML = totalHoney;
      console.log(totalHoney);
    };

function fillListThree() {
      document.getElementById("modelligo").innerHTML = hiveThree;
      let totalArray = [0,0,0];
    totalArray[0] = Number(hiveOne);
    totalArray[1] = Number(hiveTwo);
    totalArray[2] = Number(hiveThree);

    let totalHoney= totalArray.reduce(function(a, b){
        return a + b;
    }, 0);
      document.getElementById("listTotal").innerHTML = totalHoney;
      console.log(totalHoney);
    };



document.addEventListener("DOMContentLoaded", function() {
    hiveOne = 0;
    hiveTwo = 0;
    hiveThree = 0;
        let startHoney = [0,0,0];
    startHoney[0] = 0;
    startHoney[1] = 0;
    startHoney[2] = 0;

    let totalHoney= startHoney.reduce(function(a, b){
        return a + b;
    }, 0);
      document.getElementById("listTotal").innerHTML = totalHoney;
    
    
  document.getElementById("modelligo").innerHTML = hiveOne;
  document.getElementById("cappagh").innerHTML = hiveTwo;
  document.getElementById("dungarvan").innerHTML = hiveThree;
  document.getElementById("listTotal").innerHTML = totalHoney;
});
/*
function honeyButton() {
document.getElementById("honey-mix-button").onclick = function () {
        location.href = "honey.html";
}
    };
*/
function Redirect() {
               window.location = "honey.html";
            };




function verify() {  
    let verifyHoney;
    verifyHoney = Number(document.getElementById("listTotal").innerHTML);
    if (verifyHoney === 100) {
        window.open("quiz.html", "_self");
    } else if (verifyHoney !== 100) {
        swal("Please fill jar to exactly 100%");
    }
    console.log(verifyHoney);
};



