let startTime, updatedTime, difference, timerInterval;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

startBtn.onclick = () => {
  if (!running) {
    running = true;
    startTime = new Date().getTime() - (difference || 0);
    timerInterval = setInterval(updateDisplay, 1000);
  }
};

stopBtn.onclick = () => {
  if (running) {
    running = false;
    clearInterval(timerInterval);
    difference = new Date().getTime() - startTime;
  }
};

resetBtn.onclick = () => {
  running = false;
  clearInterval(timerInterval);
  difference = 0;
  display.textContent = "00:00:00";
};

function updateDisplay() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor(difference / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  display.textContent = 
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(unit) {
  return ("0" + unit).slice(-2);
}
