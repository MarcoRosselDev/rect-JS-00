/* 
<input type="text" id="input-el">
  <button id="input-btn">SAVE INPUT</button>
*/

// push the value "www.awesomelead.com" to myLeads when the input button is clicked

let myLeads = [];

const input = document.querySelector('.input-el');
const button = document.querySelector('.input-btn');
const h4 = document.querySelector('.h4');
const ul = document.querySelector('.ul');

button.addEventListener('click', function() {
  myLeads.push(input.value);
  ul.innerHTML += "<li>" + input.value + "</li> <br>";
});