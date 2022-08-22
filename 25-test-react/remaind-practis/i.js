const inp = document.querySelector('.inp');
const btnSubmit = document.querySelector('.btn-submit');
const btnClean = document.querySelector('.btn-clean');
const li = document.querySelector('.li');
let saveInput = [];

const isInLocalStorage = JSON.parse(localStorage.getItem('exampleObject'));

if (isInLocalStorage) {
  saveInput = isInLocalStorage;
  printDOM(saveInput);
}

btnSubmit.addEventListener('click', function(){
  saveInput.push(inp.value);
  inp.value = "";
  localStorage.setItem('exampleObject', JSON.stringify(saveInput));
  printDOM(saveInput);
  console.log(saveInput);
})

function printDOM(obj) {
  let finalPrint = ""
  for (let i = 0; i < obj.length; i++) {
    finalPrint += `
    <li>${obj[i]}</li> 
    `
  };
  li.innerHTML = finalPrint;
}