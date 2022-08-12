const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const h2 = document.querySelector('.h2');

let num1 = 7;
let num2 = 3;

addition.addEventListener('click', function() {
  const solution = num1 + num2;
  h2.textContent += `[${solution}]`;
})