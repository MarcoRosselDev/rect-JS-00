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
const lcstg = JSON.parse(localStorage.getItem('listExample'));
let parrafo = [];

if (lcstg) {
  parrafo = lcstg;
  printt(parrafo);
}

function printt(arr) {
  let texto = "";
  for (let i = 0; i < arr.length; i++) {
    texto += `
    <li>
      ${arr[i]}
    </li>
    `
  }
  li.innerHTML = texto;
}

put.addEventListener('click', function() {
  parrafo.push(inpt.value);
  inpt.value = "";
  localStorage.setItem('listExample', JSON.stringify(parrafo));
  printt(parrafo);
});

clean.addEventListener('dblclick', function(){
  localStorage.clear();
  parrafo = [];
  printt(parrafo);
})