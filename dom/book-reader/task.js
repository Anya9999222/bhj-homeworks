let button = document.querySelectorAll(".font-size");
let book = document.querySelector(".book");
let dataValue;
button.forEach((item, index) => {
    
    item.addEventListener("click", function(event){
        dataValue = item.dataset;
        button.forEach(el => {
            el.classList.remove("font-size_active");
        })
        button[index].classList.add("font-size_active");
        if(dataValue.size === "small"){
            book.classList.remove("book_fs-big")
            book.classList.add("book_fs-small")
        } else if(dataValue.size === "big"){
            book.classList.remove("book_fs-small")
            book.classList.add("book_fs-big")
        } else{
            book.classList.remove("book_fs-small")
            book.classList.remove("book_fs-big")
        }
        event.preventDefault();
    })
})