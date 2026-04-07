const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
const REGEX_USERNAME = /^[a-zA-Z0-9_]{3,16}$/;
const REGEX_PHONE = /^(\+?\d{1,3})?(\d{7,12})$/;
const REGEX_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const countries = document.querySelector("#countries");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const phoneCode = document.querySelector("#phone-code");
const phoneInput = document.querySelector('#phone');
const passwordInput = document.querySelector('#Password');
const confirmPasswordInput = document.querySelector('#Confirm-Password');
const button = document.querySelector('#form-btn');


let usernameValidation = false;
let emailValidation = false;
let phoneValidation = false;
let passwordValidation = false;
let confirmPasswordValidation = false;

//esto verifica que todos los espacios del formulario esten correctos 
const checkForm = () => {
    if (usernameValidation && emailValidation && phoneValidation && passwordValidation && confirmPasswordValidation) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
};

//esta funcion valida cada uno de los input

const validation = (event, validation, element) => {
    const information = event.target.parentElement.children[2];
    console.log(information)

    if(validation){
        element.classList.add('correct');
        element.classList.remove('incorrect');
        information.classList.remove('show-information');
    }else{
        element.classList.add('incorrect');
        element.classList.remove('correct');
        information.classList.add('show-information');
    }
}


//operador de propagacion para convertir a un array 

[...countries].forEach((countri) => {
  countri.innerHTML = countri.innerHTML.split(" (")[0];
});

//cada uno de los inputs y sus verificacion 
usernameInput.addEventListener('input', event =>{
    usernameValidation = REGEX_USERNAME.test(event.target.value);
    validation(event, usernameValidation, usernameInput);
    checkForm();
});
emailInput.addEventListener('input', event =>{
    emailValidation = REGEX_EMAIL.test(event.target.value);
    validation(event, emailValidation, emailInput);
    checkForm();
})

countries.addEventListener('input', event =>{
    const countriSelected = [...event.target.children].find(countri => countri.selected);
    phoneCode.innerHTML = `+${countriSelected.value}`
    checkForm();
});

//verificar el numero de telefono 
phoneInput.addEventListener('input', event => {
    phoneValidation = REGEX_PHONE.test(event.target.value);
    const information = event.target.parentElement.children[3];
    console.log(information)


    if(phoneValidation){
        phoneInput.classList.add('correct');
        phoneInput.classList.remove('incorrect');
        information.classList.remove('show-information');
    }else{
        phoneInput.classList.add('incorrect');
        phoneInput.classList.remove('correct');
        information.classList.add('show-information');
    }
    checkForm();
});

//verificacion de la contrase;a y confirmar contrase;a



const passwordsValidation = () => {
    
    const information = confirmPasswordInput.parentElement.children[2]; 
    
    confirmPasswordValidation = passwordInput.value === confirmPasswordInput.value;

    
    if (confirmPasswordInput.value === "") {
        confirmPasswordInput.classList.remove('correct');
        confirmPasswordInput.classList.remove('incorrect');
        information.classList.remove('show-information');
    } else if (confirmPasswordValidation) {
        confirmPasswordInput.classList.add('correct');
        confirmPasswordInput.classList.remove('incorrect');
        information.classList.remove('show-information');
    } else {
        confirmPasswordInput.classList.add('incorrect');
        confirmPasswordInput.classList.remove('correct');
        information.classList.add('show-information');
    }
    
    checkForm();
};



passwordInput.addEventListener('input', (event)=>{
    passwordValidation = REGEX_PASSWORD.test(event.target.value);
    validation(event, passwordValidation, passwordInput);
   passwordsValidation();
    checkForm();

});

confirmPasswordInput.addEventListener("input", ()=>{
    passwordsValidation();
    checkForm();
});

 button.addEventListener('click', ()=>{ 

    alert('Usuario agregado con exito')

 })