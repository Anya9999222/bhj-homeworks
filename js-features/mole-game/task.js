const deadMoles = document.getElementById("dead");
const lostMoles = document.getElementById("lost");

let counterDead = 0;
let counterLost = 0;

getHole = index => document.getElementById(`hole${index}`);

for(i = 1; i < 10; i++){
    let hole = getHole(i);
    hole.onclick = function() {
        if(hole.className.includes('hole_has-mole')){
            counterDead++;
            deadMoles.textContent = counterDead;
        } else{
            counterLost++;
            lostMoles.textContent = counterLost;
        }
        if(counterLost === 5){
            alert("Вы проиграли! :(")
            counterDead = 0;
            counterLost = 0;
            deadMoles.textContent = counterDead;
            lostMoles.textContent = counterLost;
        } else if(counterDead === 10){
            alert("Вы великолепны!")
            counterDead = 0;
            counterLost = 0;
            deadMoles.textContent = counterDead;
            lostMoles.textContent = counterLost;
        }
    }
    }

