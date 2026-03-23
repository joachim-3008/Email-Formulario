const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
const REGEX_USERNAME = /^[a-zA-Z0-9_]{3,16}$/;
const REGEX_PHONE = /^(\+?\d{1,3})?(\d{7,12})$/;
const REGEX_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const countries = document.querySelector("#countries");



[...countries].forEach((countri) => {
  countri.innerHTML = countri.innerHTML.split(" (")[0];

  //   const textoOriginal = countri.text;
  //   const textoLimpio = textoOriginal.replace(/\s\(\+\d+\)/g, "").trim();
  //   countri.text = textoLimpio;
});
