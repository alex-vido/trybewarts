const btnLogin = document.getElementById('btn-login');
const email = document.getElementById('email');
const password = document.getElementById('password');

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
const botaoSubmit = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
botaoSubmit.disabled = true;
checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    botaoSubmit.disabled = false;
  } else {
    botaoSubmit.disabled = true;
  }
});
const span = document.getElementById('counter');
const textarea = document.getElementById('textarea');
span.innerText = '500';
const counter = () => {
  span.innerText = `${500 - textarea.value.length}`;
};
textarea.addEventListener('keyup', counter);
