/* 
<input type="text" id="input-el">
  <button id="input-btn">SAVE INPUT</button>
*/

// push the value "www.awesomelead.com" to myLeads when the input button is clicked

let myLeads = [];

const button = document.querySelector('.input-btn');
const input = document.querySelector('.input-el');
const log = document.querySelector('.log');
const h4 = document.querySelector('.h4');

button.addEventListener('click', function() {
  myLeads.push(input.value);
  console.log(myLeads);
});

log.addEventListener('click', function() {
  for (let i = 0; i < myLeads.length; i++) {
    const element = myLeads[i];
    h4.innerText += element;
  }
})