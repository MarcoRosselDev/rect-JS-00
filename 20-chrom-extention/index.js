/* 
<input type="text" id="input-el">
  <button id="input-btn">SAVE INPUT</button>
*/

const button = document.querySelector('.input-btn');
const input = document.querySelector('.input-el');

button.addEventListener('click', function() {
  console.log('button is clicked');
});