let secondsLeft = document.getElementById("timer");
let timer = Number(secondsLeft.textContent);
let timerId = null;

function countdown() {
    timer = timer - 1;
    secondsLeft.textContent = timer;
    if(timer <= 0){
        clearInterval(timerId);
        alert('Вы победили в конкурсе!');
    }
}

timerId = setInterval(countdown, 1000);