const popup = document.getElementById('subscribe-modal');

getCookie('popup')


function getCookie(name){
    const cookies = document.cookie.split('; ')
    console.log(cookies)
    const item = cookies.find(p => p.startsWith(name))
    if(!item){
        popup.classList.add('modal_active')
    }
    
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal__close')){
        popup.classList.remove('modal_active')
        document.cookie = "popup=close; expires=Tue, 19 Jan 2038 03:14:07 GMT;"
    }
})