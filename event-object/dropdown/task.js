let dropdown = document.querySelector(".dropdown__value");
let list = document.querySelector(".dropdown__list");
let items = document.querySelectorAll(".dropdown__link");
let allItems = Array.from(items);

dropdown.addEventListener("click", function() {
    list.classList.add("dropdown__list_active");
})



allItems.forEach((item, index) => {
    item.addEventListener("click", function(event){
        event.preventDefault();
        dropdown.textContent = allItems[index].textContent;
        list.classList.remove("dropdown__list_active");
    })
})

