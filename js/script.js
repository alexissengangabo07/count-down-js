//HTML ELEMENTS SELECTED

const pomodoroBtn = document.querySelector('.pomodoro');
const shortBtn = document.querySelector('.short-break');
const longBtn = document.querySelector('.long-break');
const startBtn = document.querySelector('.start-btn');
const clock = document.querySelector('.clock');
//Variables
let timeMin = 25;
let timeSecond = 0;
let click = new Audio('clickSound.mp3');
let end = new Audio('endSound.mp3');
let clockInterval;
let minBreak = 5;
let secBreak = 5;


//functions
function setClock() {
    const min = timeMin >= 10 ? timeMin : '0' + timeMin;
    const sec = timeSecond >= 10 ? timeSecond : '0' + timeSecond;

    clock.innerHTML = min + ':' + sec;
}

function timer() {
    if (timeMin === 0 && timeSecond == 0) {
        end.play();
        clearInterval(clockInterval);
        startBtn.textContent = 'Start';
        startStop = true;
    } else if (timeSecond == 0) {
        timeMin--;
        timeSecond = 59;
    } else {
        timeSecond--;
    }
    setClock();
}


//button events
function setButton(min, sec) {
    timeMin = min;
    timeSecond = sec;
    clearInterval(clockInterval);
    setClock();
    click.play();
    startBtn.textContent = 'Start';
    startStop = true;
}

pomodoroBtn.addEventListener('click', () => {
    setButton(25, 0);
})

shortBtn.addEventListener('click', () => {
    setButton(5, 0);
})

longBtn.addEventListener('click', () => {
    setButton(15, 0);
})

let startStop = true;
startBtn.addEventListener('click', () => {
    click.play();
    if (startStop) {
        startBtn.textContent = 'Pause';
        clockInterval = setInterval(timer, 1000);
    } else {
        startBtn.textContent = 'Recommencer';
        clearInterval(clockInterval);
    }

    startStop = !startStop;
})