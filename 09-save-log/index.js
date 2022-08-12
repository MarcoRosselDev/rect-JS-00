/* 
<h1>counter</h1>
  <h2 class="h2">0</h2>
  <button class="buttondown">down..</button>
  <button class="buttonSave">save</button>
  <button class="buttonUp">up..</button>
  <p class="p"></p>
*/

const h2 = document.querySelector('.h2');
const buttonDown = document.querySelector('.buttondown');
const buttonUp = document.querySelector('.buttonUp');
const buttonSave = document.querySelector('.buttonSave');
const p = document.querySelector('.p');

let count = 0;

buttonDown.addEventListener('click', function(){
  count -= 1;
  h2.innerHTML = count;
});

buttonUp.addEventListener('click', function(){
  count += 1;
  h2.innerHTML = count;
});

buttonSave.addEventListener('click', function(){
  count = 0;
  p.innerHTML = count;
});