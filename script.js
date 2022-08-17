const initialPass = document.getElementById('newPass');
const confirmPass = document.getElementById('confPass');
const errorMessage = document.getElementById('error-message');

let validateForm = e => {
  if (initialPass.value !== confirmPass.value) {
    errorMessage.classList.remove('hidden');
    initialPass.classList.add('error');
    confirmPass.classList.add('error');
  }
  else {
    errorMessage.classList.add('hidden');
    initialPass.classList.remove('error');
    confirmPass.classList.remove('error');
  }
  e.preventDefault();
}

const submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', validateForm);