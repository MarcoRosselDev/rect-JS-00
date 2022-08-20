/*
  <h1>put somthing</h1>
  <input type="text" class="inpt">
  <button class="btn-put">put</button>
  <button class="btn-clean">clean all</button>
  <div class="li"></div>
*/

const inpt = document.querySelector('.inpt');
const put = document.querySelector('.btn-put');
const clean = document.querySelector('.btn-clean');
const li = document.querySelector('.li');
let parrafo = [];

put.addEventListener('click', function() {
  parrafo.push(inpt.value);
  inpt.value = "";
  printt(parrafo);
});

function printt(arr) {
  let texto = "";
  for (let i = 0; i < arr.length; i++) {
    texto += `
    <li>
      ${arr[i]}
    </li>
    `
    li.innerHTML = texto;
  }
}