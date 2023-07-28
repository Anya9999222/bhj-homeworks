let button = document.querySelectorAll(".font-size");
let book = document.querySelector(".book");
let reader = document.querySelector(".book__content");
let dataValue;
button.forEach((item, index) => {
    
    item.addEventListener("click", function(event){
        dataValue = item.dataset;
        button.forEach(el => {
            el.classList.remove("font-size_active");
        })
        button[index].classList.add("font-size_active");
        const size = event.target.dataset.size;
        console.log(event.target);
        if (size) {
          reader.className = `book__content book_fs-${size}`;
        } else {
            reader.className = "book__content";
          }
        event.preventDefault();
    }
    )
})