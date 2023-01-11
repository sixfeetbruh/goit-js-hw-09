const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let intervalId = null;

startBtn.addEventListener('click', startBtnClick);
stopBtn.addEventListener('click', stopBtnClick);

function startBtnClick() {
  stopBtn.removeAttribute('disabled');
  startBtn.setAttribute('disabled', 'disabled');
  changeBgColor();
};

function stopBtnClick() {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'disabled');
  clearInterval(intervalId);
};

function changeBgColor() {
  return intervalId = setInterval(() => {
      body.style.backgroundColor =  getRandomHexColor();
  }, 1000)
};

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};