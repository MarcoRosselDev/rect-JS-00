/* <h2>list to do</h2>
  <input type="text" class="input">
  <button class="button">put</button>
  <h4 class="h4"></h4> */

let myLeads = [];

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const ul = document.querySelector('.ul');

button.addEventListener('click', function(){
  myLeads.push(input.value);
  input.value = ""          // para limpiar el input
})