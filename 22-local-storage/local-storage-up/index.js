/* <h2>list to do</h2>
  <input type="text" class="input">
  <button class="button">put</button>
  <h4 class="h4"></h4> */

let myLeads = [];
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const clean = document.querySelector('.delete');
const ul = document.querySelector('.ul');

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")); 
// con esto convierto el string en objeto (del localstorage)

clean.addEventListener('dblclick', function(){
  localStorage.clear();
  myLeads = [];-
  renderLeads();
})


//ahora le pregunta si hay local storage para renderizarlo primero
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads(); // por eso es importante hacer el render como funcion u/c
}

button.addEventListener('click', function(){
  myLeads.push(input.value);
  input.value = ""          // para limpiar el input
  
  // save the myLeads array to localStorage
  // localStorage.setItem("myList", "http://www.example.com")     para guardar
  let a = localStorage.setItem('myLeads', JSON.stringify(myLeads));
  console.log(a);
  renderLeads();
})

function renderLeads() {
  let listItem = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItem += `
    <li>
      <a target="_blank" href='${myLeads[i]}'>
      ${myLeads[i]}
      </a>
    </li>
    `
  };
  ul.innerHTML = listItem;
};

// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalize emptiness