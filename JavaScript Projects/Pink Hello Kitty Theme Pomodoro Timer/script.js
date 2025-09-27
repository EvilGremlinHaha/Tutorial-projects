// Hard started to learn how to use const,let,btn!// 
const toggleBtn = document.querySelector('.btn-toggle');
const minuteDiv = document.querySelector('.minutes');
const secondDiv = document.querySelector('.seconds');
const message = document.querySelector('.app-message');

// start let
let myInterval;
let totalSeconds = 25 * 60;
let isRunning = false;

// Update the displayed time
const updateDisplay = (seconds) => {
  const minutesLeft = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  minuteDiv.textContent = `${minutesLeft}`;
  secondDiv.textContent = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
};

// Countdown
const countdown = () => {
  if (totalSeconds > 0) {
    totalSeconds--;
    updateDisplay(totalSeconds);
  } else {
    clearInterval(myInterval);
    isRunning = false;
    toggleBtn.textContent = 'start';
    message.textContent = "Session complete!";
  }
};

// Toggle Start/Stop
const toggleTimer = () => {
  if (!isRunning) {
    // Start the timer
    isRunning = true;
    updateDisplay(totalSeconds);
    myInterval = setInterval(countdown, 900);
    toggleBtn.textContent = 'stop';
    message.textContent = "Session running...";
  } else {
    // Stop and reset the timer
    clearInterval(myInterval);
    isRunning = false;
    totalSeconds = 25 * 60;
    updateDisplay(totalSeconds);
    toggleBtn.textContent = 'start';
    message.textContent = "Timer stopped.";
  }
};

// Event listener
toggleBtn.addEventListener('click', toggleTimer);

// Initialize display
updateDisplay(totalSeconds);
