let reveal = document.querySelectorAll(".reveal");

function showText(){

    for (i = 0; i < reveal.length; i++) {
        const { top, bottom } = reveal[i].getBoundingClientRect();
        if(top > 0 && bottom < window.innerHeight){
          reveal[i].classList.add("reveal_active")
        }
        if(top < 0 || bottom > window.innerHeight){
          reveal[i].classList.remove("reveal_active")
        }
    }  
}
window.addEventListener('scroll' , showText);


