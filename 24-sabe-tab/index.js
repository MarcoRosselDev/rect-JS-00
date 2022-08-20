const inpt = document.querySelector('.inpt');
const put = document.querySelector('.put');
const saveTab = document.querySelector('.save-tab');
const cleanAll = document.querySelector('.clean-all');
const ul = document.querySelector('.ul');
let link = [];

put.addEventListener('click', function(){
  link.push(inpt.value);
  inpt.value = "";
  prinnt();
})

function prinnt(arr) {
  let it = "";
  for (let i = 0; i < arr.length; i++) {
    it = arr[i];
  }
  ul.innerHTML = it;
}