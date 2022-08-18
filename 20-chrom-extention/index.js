/* 
<input type="text" id="input-el">
  <button id="input-btn">SAVE INPUT</button>
*/

// push the value "www.awesomelead.com" to myLeads when the input button is clicked

let myLeads = ["a", "b", "c"];

const input = document.querySelector('.input-el');
const button = document.querySelector('.input-btn');
const h4 = document.querySelector('.h4');
const ul = document.querySelector('.ul');

button.addEventListener('click', function() {
  myLeads.push(input.value);
  // clear out the input field
  ul.innerHTML += "<li>" + input.value + "</li>";
  //si uso innerText se renderia el li, para eso es el innerHTML y sus diferencias
  input.value = ""; // solucion a limpiar el input al enviar
});

// for (let i = 0; i < myLeads.length; i++) {
//   const li = document.createElement('li');
//   li.textContent = myLeads[i];
//   ul.append(li);
// }

//esto hace lo mismo pero es mucho mas entendible la primero por que es mas visual