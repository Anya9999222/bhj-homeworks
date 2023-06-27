let counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

cookie.onclick = function(){
    counter.textContent ++;
    cookie.width = 250;
    
    if(counter.textContent % 2 === 0){
        cookie.width = 200;
        
    }
}