const ipt = document.querySelector('.ipt');
const btnPush = document.querySelector('.btn-push');
const btnDelete = document.querySelector('.btn-delete');
const list = document.querySelector('.list');
let saveList = [];

btnPush.addEventListener('click', function() {
  saveList.push(ipt.value);
  ipt.value = "";
  localStorage.setItem('exampleList', JSON.stringify(saveList));
  imprimir();
});

function imprimir(arr) {
  let mostrar = "";
  for (let i = 0; i < arr.length; i++) {
    mostrar += `
    <li>
      ${arr[i]}
    </li>
    `
  };
  list.innerHTML = mostrar
}