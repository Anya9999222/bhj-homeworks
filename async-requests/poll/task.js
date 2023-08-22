let request = new XMLHttpRequest();

request.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
request.send()

const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers')

request.addEventListener('readystatechange', () => {
    if(request.readyState === request.DONE){
        const json = JSON.parse(request.responseText).data;
        const answers = json.answers;
        pollTitle.textContent = json.title;
        for(let item in answers){
            pollAnswers.insertAdjacentHTML('beforeend', 
                `<button class="poll__answer">
                    ${answers[item]}
                </button>`)
        }
        const button = document.querySelectorAll('.poll__answer')
        button.forEach((i) => {
            i.style.marginRight = '5px'
        })
    }   
})

document.addEventListener('click', (e) =>{
    if(e.target.classList.contains('poll__answer')){
        alert('Спасибо, ваш голос засчитан!')
        location.reload()
    }
})