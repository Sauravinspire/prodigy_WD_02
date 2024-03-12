const display = document.querySelector('.display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapsList = document.getElementById('laps');

let startTime = 0;
let elapsedTime = 0;
let intervalId;
let isRunning = false;
let laps = [];

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);

function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateDisplay, 10);
    isRunning = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
}

function stopTimer() {
  if (isRunning) {
    clearInterval(intervalId);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
}

function resetTimer() {
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  display.textContent = '00:00:00.000';
  isRunning = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  laps = [];
  lapsList.innerHTML = '';
}

function updateDisplay() {
  const now = Date.now();
  const diffInMs = now - startTime;
  const seconds = Math.floor(diffInMs / 1000) % 60;
  const minutes = Math.floor(diffInMs / (1000 * 60)) % 60;
  const hours = Math.floor(diffInMs / (1000 * 60 * 60));
  const milliseconds = Math.floor
}