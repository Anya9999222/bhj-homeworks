const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const divForm = document.getElementById('signin');
const spanId = document.getElementById('user_id');

function welcomeGuest(){
  divForm.classList.remove('signin_active')
  welcome.classList.add('welcome_active')
  
}
form.addEventListener('submit', function(e){
  e.preventDefault();

  const formData = new FormData(form);
  const request = new XMLHttpRequest();
  request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
  request.send(formData);
  request.onload = function () {
    if(request.readyState === request.DONE){
      let response = JSON.parse(request.response)
      if(response.success === true){
        localStorage.setItem('user', response.user_id )
        spanId.textContent = response.user_id
        welcomeGuest()
      }else{
        alert('Неверный логин/пароль')
      }
    }
  } 
})