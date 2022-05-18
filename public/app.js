const startTiming=25;
let time = startTiming*60;
let minutes;
let seconds;
const count=document.getElementById("timer");
let interval;
function updateTimer(){
    minutes = Math.floor(time/60);
    seconds = time%60;
    seconds = seconds<10?'0'+seconds : seconds;
    count.innerHTML=`${minutes}:${seconds}`;
    time--;
}
function init(){
    document.getElementById("timer").innerHTML=`${25}:${00}`;
    document.getElementById("seconds-holder").style.display="none";
}

function startTimer(){
    interval=setInterval(updateTimer,1000);
}

function stopTimer(){
    clearInterval(interval);
}

function reset(){
    clearInterval(interval);
    minutes=25;
    seconds=00;
    count.innerHTML=`${minutes}:${seconds}`;
    time=startTiming*60;
}