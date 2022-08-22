/*
  <h1>list</h1>
  <input type="text" class="ipt">
  <button class="btn-push">push</button>
  <button class="btn-clean">clean</button>
  <div class="li"></div>
*/

const ipt = document.querySelector('.ipt');
const btnPush = document.querySelector('.btn-push');
const btnClean = document.querySelector('.btn-clean');
const li = document.querySelector('.li');
let saveList = [];

btnPush.addEventListener('click', function(){
  saveList.push(ipt.value);
  ipt.value = "";
  localStorage.setItem('example', JSON.stringify(saveList));
  printDOM(saveList);
})

const printDOM = (arr) => {
  let printHTML = "";
  for (let i = 0; i < arr.length; i++) {
    printHTML += `<li>${arr[i]}</li>`
  }
  li.innerHTML = printHTML;
}