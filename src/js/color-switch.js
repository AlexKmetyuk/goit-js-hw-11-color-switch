const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let switchColorTimer = null;

startBtn.addEventListener('click', () => {
    switchColorTimer = setInterval(() => { body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)] }, 1000)
    startBtn.setAttribute('disabled','disabled')
})

stopBtn.addEventListener('click', () => {
    clearInterval(switchColorTimer)
    startBtn.removeAttribute('disabled')
})
