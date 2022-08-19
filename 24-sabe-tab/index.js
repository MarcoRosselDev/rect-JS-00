const inpt = document.querySelector('.inpt');
const put = document.querySelector('.put');
const saveTab = document.querySelector('.save-tab');
const cleanAll = document.querySelector('.clean-all');
const ul = document.querySelector('.ul');
let link = [];

const localStrgLoad = JSON.parse(localStorage.getItem("listExample"));

put.addEventListener('click', function(){
  link.push(inpt.value);
  // guardar en el local storage la informacion para despues mostrarla
  let i = localStorage.setItem("listExample", JSON.stringify(link));
  printAll(inpt.value);
});

function printAll(link) { 
  ul.innerHTML += `
  <li>
      ${link}
  </li>
  `
  inpt.value = "";
}

cleanAll.addEventListener('dblclick', function() {

})