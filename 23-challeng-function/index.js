/*
  <input type="text" class="input">
  <button class="btn"></button>
  <h4 class="h4"></h4>
*/

const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const h4 = document.querySelector('.h4');

btn.addEventListener('click', function(){
  h4.innerHTML = "hola " + input.value;
})