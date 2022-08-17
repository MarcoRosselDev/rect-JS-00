/* 
<input type="text" id="input-el">
  <button id="input-btn">SAVE INPUT</button>
*/

// push the value "www.awesomelead.com" to myLeads when the input button is clicked

let myLeads = [];

const button = document.querySelector('.input-btn');
const input = document.querySelector('.input-el');

button.addEventListener('dblclick', function() {
  console.log('button is clicked');
});