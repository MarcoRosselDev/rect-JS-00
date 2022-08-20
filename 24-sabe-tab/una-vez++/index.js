const ipt = document.querySelector('.ipt');
const btnPush = document.querySelector('.btn-push');
const btnDelete = document.querySelector('.btn-delete');
const list = document.querySelector('.list');
let saveList = [];

btnPush.addEventListener('click', function() {
  saveList.push(ipt.value);
  console.log(saveList);
})