const tools = document.querySelectorAll(".has-tooltip");
let element = document.createElement("div");
element.classList.add("tooltip");

tools.forEach((el,index) => {
    el.addEventListener('click', function(e){
        e.preventDefault()
        let coordinate = el.getBoundingClientRect();
        element.textContent = tools[index].title;
        tools[index].insertAdjacentElement("afterEnd", element);
        element.style.top = String(coordinate.top + 20) + 'px';
        element.style.left = String(coordinate.left) + 'px';
        element.classList.toggle("tooltip_active");
    })
})



