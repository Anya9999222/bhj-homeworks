let xhr = new XMLHttpRequest();
const loader = document.getElementById('loader');
const items = document.getElementById('items')

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()

xhr.addEventListener("readystatechange", () => {
    if(xhr.readyState === xhr.DONE){
        loader.classList.remove('loader_active');
        
        const json = JSON.parse(xhr.responseText).response.Valute;
        
        for (let item in json) {
            console.log(json[item])
            items.insertAdjacentHTML('beforeend', 
        `<div class="item">
            <div class="item__code">
                ${json[item].CharCode}
            </div>
            <div class="item__value">
                ${json[item].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>`);
        }
    }
})