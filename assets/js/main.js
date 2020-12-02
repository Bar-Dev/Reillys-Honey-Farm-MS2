// global variables
let hiveOne;
let hiveTwo;
let hiveThree;
let honeyInterval;

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
    let totalHoney = ['A','B','C'];
    totalHoney[0] = hiveOne.toString();
    totalHoney[1] = hiveTwo.toString();
    totalHoney[2] = hiveThree.toString();
    
    let jarAmount = 0; // empty jar
    honeyInterval = setInterval(() => {
        if (jarAmount <= hiveOne) {
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
            document.getElementById("honey-fill").innerHTML = `<img id="honey" src="assets/images/${hiveOne}-full.png">`;
        }
    }, 500);
    console.log(totalHoney);
};




