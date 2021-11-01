var timer1 = Math.round(Math.random() * 999);
var timer2 = Math.round(Math.random() * 99);
var timer3 = Math.round(Math.random() * 999);
var timer4 = Math.round(Math.random() * 99);

window.onload = function () {
    mainTimer(timer1, 1);
    mainTimer(timer2, 2);
    mainTimer(timer3, 3);
    mainTimer(timer4, 4);
};

function startTimer(i, duration, x) {
    var timer = duration, seconds;
    var randomTimer = i;
         setInterval(function () {
         seconds = parseInt(timer % randomTimer, 10);

        if (seconds < 100 && seconds > 10) {
            document.querySelector(`#timer${x}`).innerHTML = `<span class= "teste">0</span>${seconds}`;
        } else if (seconds < 10) {
            document.querySelector(`#timer${x}`).innerHTML = `<span class= "teste">00</span>${seconds}`;
        } else {
            document.querySelector(`#timer${x}`).innerHTML = `${seconds}`;
        }

        if (--timer <= 0) {
             timer = duration;
        }
    }, 1000);
}

function mainTimer (randomTimer, x) {
    var duration = randomTimer * 5;
    startTimer(randomTimer, duration, x);
}