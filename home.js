const signin = document.querySelector('.signin');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconclose = document.querySelector('.icon-close');

registerlink .addEventListener('click', ()=> {
    signin .classList.add('active');
}) ;

loginlink .addEventListener('click', ()=> {
    signin .classList.remove('active');
}) ;

btnpopup .addEventListener('click', ()=> {
    signin.classList.add('active-popup');
}) ;

iconclose.addEventListener('click', ()=> {
    signin.classList.remove('active-popup');
}) ;