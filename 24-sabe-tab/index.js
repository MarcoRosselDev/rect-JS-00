const inpt = document.querySelector('.inpt');
const put = document.querySelector('.put');
const saveTab = document.querySelector('.save-tab');
const cleanAll = document.querySelector('.clean-all');
const ul = document.querySelector('.ul');
const localStr = JSON.parse(localStorage.getItem("listExample"));
//const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")); 
let link = [];

if (localStr) {
  link = localStr;
  prinnt(link);
}

function prinnt(arr) {
  let it = "";
  for (let i = 0; i < arr.length; i++) {
    it += `
    <li>
    ${arr[i]}
    </li>
    `
  }
  ul.innerHTML = it;
}

put.addEventListener('click', function(){
  link.push(inpt.value);
  inpt.value = "";
  localStorage.setItem('listExample', JSON.stringify(link));
  prinnt(link);
})