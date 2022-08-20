const inpt = document.querySelector('.inpt');
const put = document.querySelector('.put');
const saveTab = document.querySelector('.save-tab');
const cleanAll = document.querySelector('.clean-all');
const ul = document.querySelector('.ul');
let link = [];

put.addEventListener('click', function(){
  link.push(inpt.value);
  inpt.value = "";
  console.log(link);
})