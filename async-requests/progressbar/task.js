const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    
    xhr.upload.onprogress = function(event) {
        const progress = document.getElementById( 'progress' );
        progress.value = event.loaded / event.total;
    }
    xhr.send(formData);
})