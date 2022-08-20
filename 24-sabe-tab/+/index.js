const ipt = document.querySelector('.ipt');
const btnPut = document.querySelector('.btn-put');
const btnClean = document.querySelector('.btn-clean');
const li = document.querySelector('.li');
let saveArray = [];

function printHtml(arr) {
  let text = "";
  for (let i = 0; i < arr.length; i++) {
    text += `
    <li>
      ${arr[i]}
    </li>
    `;
  }
  
}

btnPut.addEventListener('click', function() {
  saveArray.push(ipt.value);
  ipt.value = "";
  localStorage.setItem('listExample', JSON.stringify(saveArray));
  printHtml();
});