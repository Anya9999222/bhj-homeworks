document.addEventListener("click", function(e){
    e.preventDefault();
    let tooltip = e.target;
    let nextEl = tooltip.nextElementSibling;

    if(nextEl && nextEl.classList.contains('tooltip_active')){
        nextEl.classList.remove("tooltip_active");
        nextEl.remove()
        return
    }
    if(tooltip.classList.contains("has-tooltip")){
        let element = document.createElement("div");
        element.classList.add("tooltip");
        tooltip.insertAdjacentElement("afterEnd", element);
        element.textContent = tooltip.title;
        
        let coordinate = tooltip.getBoundingClientRect();
        element.style.top = String(coordinate.top + 20) + 'px';
        element.style.left = String(coordinate.left) + 'px';
        element.classList.add("tooltip_active");
    }
})

// const tools = document.querySelectorAll(".has-tooltip");
// let element = document.createElement("div");
// element.classList.add("tooltip");

// tools.forEach((el,index) => {
//     el.addEventListener('click', function(e){
//         e.preventDefault()
        
//         if(element){
//             element.classList.remove("tooltip_active")
//         } else {
           
//         let coordinate = el.getBoundingClientRect();
//         element.textContent = tools[index].title;
//         tools[index].insertAdjacentElement("afterEnd", element);
//         element.style.top = String(coordinate.top + 20) + 'px';
//         element.style.left = String(coordinate.left) + 'px';
//         element.classList.add("tooltip_active");
//         }
        
//     })
// })
