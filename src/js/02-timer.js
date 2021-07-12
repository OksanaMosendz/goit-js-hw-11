import '../sass/main.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const dataInput=document.getElementById('date-selector');
const startBtn=document.querySelector('[data-start]');
const daysTimer=document.querySelector('[data-days]');
const hoursTimer=document.querySelector('[data-hours]');
const minutesTimer=document.querySelector('[data-minutes]');
const secondsTimer=document.querySelector('[data-seconds]');
const timer=document.querySelector('.timer');
const fields=document.querySelectorAll('.field');

const setTimer=(...args)=>{
  startBtn.disabled=true;
  timer.style.display='flex';
  args.forEach(arg =>{
    arg.textContent='00';
    arg.style.fontSize='40px';
  });
  }

setTimer(daysTimer, hoursTimer, minutesTimer, secondsTimer);
fields.forEach(field=>{field.style.marginRight='20px'});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

let dateNow=0;
let userDate=0;

const checkDate=()=>{
  userDate=Date.parse(dataInput.value);
  dateNow=Date.now();

  if(userDate>dateNow){
    startBtn.disabled=false;
    return;
  }
}

const checkDateAlert=()=>{
if (userDate<=dateNow){
  Swal.fire('Please choose a date in the future');
  return;}
}

const startCountdown=()=>{
  
  const intervalId=setInterval(()=>{
    dateNow=Date.now();
    let dateObject={};

    if(userDate>dateNow){
      dateObject=convertMs(userDate-dateNow);
      const {days, hours, minutes, seconds}=dateObject;
  
      daysTimer.textContent=`${days}`;
      hoursTimer.textContent=`${hours}`;
      minutesTimer.textContent=`${minutes}`;
      secondsTimer.textContent=`${seconds}`;
    }

    else {clearInterval(intervalId);
     }
    },1000)
}
  
dataInput.addEventListener('input',checkDate);
dataInput.addEventListener('blur',checkDateAlert);
startBtn.addEventListener('click', startCountdown);