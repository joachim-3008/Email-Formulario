const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
const REGEX_USERNAME = /^[a-zA-Z0-9_]{3,16}$/;
const REGEX_PHONE = /^(\+?\d{1,3})?(\d{7,12})$/;
const REGEX_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const countries = document.querySelector("#countries");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone-code");

let usernameValidation = false;
let emailValidation = false;
let phoneValidation = false;


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



[...countries].forEach((countri) => {
  countri.innerHTML = countri.innerHTML.split(" (")[0];
});

usernameInput.addEventListener('input', event =>{
    usernameValidation = REGEX_USERNAME.test(event.target.value);
    validation(event, usernameValidation, usernameInput);
});
emailInput.addEventListener('input', event =>{
    emailValidation = REGEX_EMAIL.test(event.target.value);
    validation(event, emailValidation, emailInput);
})

countries.addEventListener('input', event =>{
    const countriSelected = [...event.target.children].find(countri => countri.selected);
    console.log(countriSelected)
});


// phoneInput.addEventListener('input', event =>{
//     phoneValidation = REGEX_PHONE.test(event.target.value);
//     validation(event, phoneValidation, phoneInput);
// })