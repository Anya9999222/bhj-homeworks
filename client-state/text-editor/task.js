let storedText = localStorage.getItem('textInEditor')

if(storedText) {
    document.getElementById('editor').innerHTML = storedText;
}

document.addEventListener('keyup', function(){
    localStorage.setItem('textInEditor', document.querySelector('#editor').value)
})
