const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body=document.querySelector('body');
let intervalId=0;

function getRandomHexColor(){
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startSwitch=()=>{
intervalId=setInterval(()=>{body.style.backgroundColor=`${getRandomHexColor()}`;}, 1000);
};

const stopSwitch=()=>{
  clearInterval(intervalId);
};

startBtn.addEventListener('click',startSwitch);
stopBtn.addEventListener('click',stopSwitch);

