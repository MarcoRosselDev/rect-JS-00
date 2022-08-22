const inp = document.querySelector('.inp');
const btnSubmit = document.querySelector('.btn-submit');
const btnClean = document.querySelector('.btn-clean');
const li = document.querySelector('.li');
const isInLocalStorage = JSON.parse(localStorage.getItem('exampleObject'));
let saveInput = [];

if (isInLocalStorage) {
  saveInput = isInLocalStorage;
  printDOM(saveInput);
}

function printDOM(obj) {
  let finalPrint = ""
  for (let i = 0; i < obj.length; i++) {
    finalPrint += `
    <li>${obj[i]}</li> 
    `
  };
  li.innerHTML = finalPrint;
}

btnSubmit.addEventListener('click', function(){
  saveInput.push(inp.value);
  inp.value = "";
  localStorage.setItem('exampleObject', JSON.stringify(saveInput));
  printDOM(saveInput);
  console.log(saveInput);
})

btnClean.addEventListener('dblclick', function(){
  localStorage.clear();
  saveInput = [];
  printDOM(saveInput);
})