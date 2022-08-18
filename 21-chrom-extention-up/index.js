/*
<h1>list buy</h1>
  <input type="text" class="input">
  <button class="button">buy</button>
  <div class="list"></div>
*/

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