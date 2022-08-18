const input = document.querySelector('.input');
const button = document.querySelector('.button');
const list = document.querySelector('.list');
console.log(input.value);

button.addEventListener('click', function() {
  list.innerHTML += `
  <li>
    ${input.value}
  </li>
  `;
  input.value = "";
})