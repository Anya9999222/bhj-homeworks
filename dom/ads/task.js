let parent = document.querySelector(".rotator")
let firstElement = parent.firstElementChild;
let nextElement = firstElement.nextElementSibling;
let delay = 1000;



setInterval( () => {
    firstElement.style.color = firstElement.dataset.color;
    nextElement.classList.add("rotator__case_active");
    firstElement.classList.remove("rotator__case_active");
    
    firstElement = nextElement;
    nextElement = firstElement.nextElementSibling;
    delay = Number(firstElement.dataset.speed);
    
    if(nextElement === null){
        nextElement = parent.firstElementChild;
    }
}, delay);