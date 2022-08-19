const inpt = document.querySelector('.inpt');
const put = document.querySelector('.put');
const saveTab = document.querySelector('.save-tab');
const cleanAll = document.querySelector('.clean-all');
const ul = document.querySelector('.ul');

put.addEventListener('click', function(){
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