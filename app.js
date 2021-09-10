let [miliseconds, seconds, minutes, hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int;

const startBtn = document.querySelector('#startTimer')
const pauseBtn = document.querySelector('#pauseTimer')

startBtn.addEventListener('click', () => {
    if(pauseBtn.classList.contains('hidden')){
        startBtn.classList.add('hidden')
        pauseBtn.classList.remove('hidden')
    }
});

pauseBtn.addEventListener('click', () => {
    if(startBtn.classList.contains('hidden')){
        pauseBtn.classList.add('hidden')
        startBtn.classList.remove('hidden')
    }
});




document.getElementById('startTimer').addEventListener('click', () => {
    int = setInterval(DisplayTimer, 10);
});

// Implimenting Pause function

document.querySelector('#pauseTimer').addEventListener('click', () => {
    clearInterval(int);
})

// Implimenting Reset function

document.querySelector('#resetTimer').addEventListener('click', () => {
    clearInterval(int);
    [miliseconds, seconds, minutes, hours] = [0,0,0,0];
    timerRef.innerHTML = "00 : 00 : 00 : 000";

})

// Implimenting Start function

function DisplayTimer(){
    miliseconds += 10;
    if(miliseconds == 1000){
        miliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

   let h = hours < 10 ? "0" + hours : hours;
   let m = minutes < 10 ? "0" + minutes : minutes;
   let s = seconds < 10 ? "0" + seconds : seconds;
   let ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;
   
   timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms} `;

   
}