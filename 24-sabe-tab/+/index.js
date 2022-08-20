const ipt = document.querySelector('.ipt');
const btnPut = document.querySelector('.btn-put');
const btnClean = document.querySelector('.btn-clean');
const li = document.querySelector('.li');
const areLocal = JSON.parse(localStorage.getItem('listExample'));
let saveArray = [];

if (areLocal) {
  saveArray = areLocal;
  printHtml(saveArray);
}

function printHtml(arr) {
  let textToPrint = "";
  for (let i = 0; i < arr.length; i++) {
    textToPrint += `
    <li>
      ${arr[i]}
    </li>
    `;
  }
  li.innerHTML = textToPrint;
}

btnPut.addEventListener('click', function() {
  saveArray.push(ipt.value);
  ipt.value = "";
  localStorage.setItem('listExample', JSON.stringify(saveArray));
  printHtml(saveArray);
});

btnClean.addEventListener('dblclick', function() {
  localStorage.clear();
  saveArray = [];
  printHtml(saveArray);
})