const input = document.querySelector('.input');
const button = document.querySelector('.button');
const list = document.querySelector('.list');
console.log(input.value);

button.addEventListener('click', function() {
  list.innerHTML += `
  <li>
    ${input.value}
  </li>
  `;
  input.value = "";
})

// para almazenar la informacion en memoria local usamos los siguientes metodos

// localStorage.clear()     para limpiar el histial
// localStorage.setItem("myList", "http://www.example.com")     para guardar

//----------------------------------------------------------------

// JSON.stryngify()   convierte en string cualquier objeto
// JSON.parse()       hace lo inverso, convierte a objeto un string