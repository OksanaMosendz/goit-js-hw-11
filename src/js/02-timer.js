import '../sass/main.scss';

const dataInput=document.getElementById('date-selector');
const startBtn=document.querySelector('[data-start]');
const days=document.querySelector('[data-days]');
const hours=document.querySelector('[data-hours]');
const minutes=document.querySelector('[data-minutes]');
const seconds=document.querySelector('[data-seconds]');

let dateNow=0;
let userDate=0;


startBtn.disabled=true;


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


const checkDate=()=>{
  userDate=Date.parse(dataInput.value);
  dateNow=Date.now();

  if (userDate<=dateNow){
  startBtn.disabled=true;
  }
  else startBtn.disabled=false;
}

const startCountdown=()=>{
  
  const intervalId=setInterval(()=>{
    dateNow=Date.now();
    if(userDate<dateNow){
      clearInterval(intervalId)
    }
    else console.log(convertMs(userDate-dateNow));
  },1000)
}
  
dataInput.addEventListener('input',checkDate);
startBtn.addEventListener('click', startCountdown);




// // Задание 2 - таймер обратного отсчета
// // Напиши скрипт таймера, который ведёт обратный отсчет до определенной даты. Такой таймер может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.

// // Preview

// // В HTML есть готовая разметка таймера, поле для выбора конечной даты и кнопка, при клике по которой таймер должен запускаться. Добавь минимальное оформление элементов интерфейса.

// <input type="date" id="date-selector" />
// <button type="button" data-start>Start countdown</button>

// <div class="timer">
//   <div class="field">
//     <span class="value" data-days>11</span>
//     <span class="label">Days</span>
//   </div>
//   <div class="field">
//     <span class="value" data-hours>11</span><span class="label">Hours</span>
//   </div>
//   <div class="field">
//     <span class="value" data-minutes>11</span>
//     <span class="label">Minutes</span>
//   </div>
//   <div class="field">
//     <span class="value" data-seconds>11</span>
//     <span class="label">Seconds</span>
//   </div>
// </div>

// Если пользователь выбрал дату в прошлом, необходимо показать уведомление "Please choose a date in the future". Используй библиотеку sweetalert2.
// Кнопка должа быть не активна до тех пор, пока пользователь не выбрал дату в будущем.
// Если выбрана валидная дата и пользователь нажал кнопку - начинается отсчет времени.
// Скрипт должен вычислять раз в секунду сколько времени осталось до указанной даты и обновлять интерфейс, показывая четыре цифры: дни, часы, минуты и секунды в формате xx:xx:xx:xx.

// Количество дней может состоять из более чем двух цифр.
// Таймер должен останавливаться когда дошел до конечной даты, то есть 00:00:00:00.
// Для подсчета значений используй готовую функцию, где ms - разница между конечной и текущей датой в миллисекундах.


