let minutesEL= document.querySelector('#minutes');
let secondsEL= document.querySelector('#seconds');
let startBtn = document.querySelector('#button-start');
let stopButton = document.querySelector('#button-stop');
let resetBtn = document.querySelector('#button-reset');

let [minute, second] =[0, 0];
let counter = 0;
let timerId;
let isRunning = false;

const timer = () => {
  second++;

  if (second === 60) {
    second = 0;
    minute++;
  }

  minutesEL.textContent = minute < 10 ? '0'+ minute : minute;
  secondsEL.textContent = second < 10 ? '0'+ second : second;
}

function clearTimer() {
  isRunning= false;
  clearInterval(timerId);
}

startBtn.addEventListener('click', () => {
  if (!isRunning){
    isRunning = true;
    timerId = setInterval(timer, 1000);
  }
});

stopButton.addEventListener('click', clearTimer);

resetBtn.addEventListener('click', () => {
  [minute, second] = [0, 0];
  minutesEL.textContent = '00';
  secondsEL.textContent = '00';

  clearTimer();
});






