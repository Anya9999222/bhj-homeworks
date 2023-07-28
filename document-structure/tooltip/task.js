const tools = document.querySelectorAll(".has-tooltip");
let element = document.createElement("div");
element.classList.add("tooltip");

tools.forEach((el,index) => {
    el.addEventListener('click', function(e){
        e.preventDefault()
        element.textContent = tools[index].title;
        tools[index].insertAdjacentElement("beforeend", element);
        element.classList.add("tooltip_active");
    })
})



