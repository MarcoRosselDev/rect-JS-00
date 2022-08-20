const ipt = document.querySelector('.ipt');
const btnPut = document.querySelector('.btn-put');
const btnClean = document.querySelector('.btn-clean');
const li = document.querySelector('.li');
let saveArray = [];

btnPut.addEventListener('click', function() {
  saveArray.push(ipt.value);
  console.log(saveArray);
})