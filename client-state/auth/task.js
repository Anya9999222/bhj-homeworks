const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const divForm = document.getElementById('signin');
const spanId = document.getElementById('user_id');


function checkGuest(){
  let authUser = localStorage.getItem('user');
  if(authUser){
    welcomeGuest(authUser);
  }
 
}

function welcomeGuest(id){
  spanId.textContent = id;
  form.reset();
  divForm.classList.remove('signin_active')
  welcome.classList.add('welcome_active')  
}

function sendData(e){
  e.preventDefault();

  const formData = new FormData(form);
  const request = new XMLHttpRequest();
  
  request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
  request.responseType = 'json';
  request.send(formData);

  request.addEventListener('load', function () {
      let response = request.response
      if(response.success === true){
        localStorage.setItem('user', response.user_id )
        user = response.user_id
        welcomeGuest(user)
      }else{
        alert('Неверный логин/пароль')
      }
    }
  ) 
}


form.addEventListener('submit', sendData)
document.addEventListener('DOMContentLoaded',checkGuest)