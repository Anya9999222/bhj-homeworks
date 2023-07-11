let tab = document.querySelectorAll(".tab");
let tabContent = document.querySelectorAll(".tab__content");

tab.forEach((elem, index) => {
    elem.addEventListener("click", function(){
        tab.forEach(prevElem => {
            prevElem.classList.remove("tab_active");
        })
        tabContent.forEach(index =>{
            index.classList.remove("tab__content_active")
        })
        elem.classList.toggle("tab_active")
        tabContent[index].classList.add("tab__content_active")
    })
})