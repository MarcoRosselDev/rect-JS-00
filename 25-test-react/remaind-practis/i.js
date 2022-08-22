/*
  <h1>list</h1>
  <input type="text" class="inp">
  <button class="btn-submit">click</button>
  <button class="btn-clean">clean</button>
  <div class="li"></div>
*/
const inp = document.querySelector('.inp');
const btnSubmit = document.querySelector('.btn-submit');
const btnClean = document.querySelector('.btn-clean');
const li = document.querySelector('.li');
let saveInput = [];

btnSubmit.addEventListener('click', function(){
  saveInput.push(inp.value);
  inp.value = "";
  localStorage.setItem('exampleObject', JSON.stringify(saveInput));
  printDOM();
  console.log(saveInput);
})