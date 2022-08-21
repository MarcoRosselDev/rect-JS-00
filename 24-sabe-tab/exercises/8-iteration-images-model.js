// Create a function that renders the three team images 
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
  "images/hip1.jpg",
  "images/hip2.jpg",
  "images/hip3.jpg"
]

// simulamos un documento html que tiene un div con la clase (class="imagenes")
const imagDiv = document.querySelector(".imagenes");
/*
function renderImages() {
  for (let i = 0; i < imgs.length; i++) {
    imagDiv.innerHTML += `
    <img class="lo-que-sea" src="${imgs[i]}"></img>
    `
  }
}

renderImages();
*/

function renderImages() {
  let imgDOM = "";
  for (let i = 0; i < imgs.length; i++) {
    imgDOM += `
    <img class="lo-que-sea" src="${imgs[i]}"></img>
    `
  }
  imagDiv.innerHTML = imgDOM;
}

renderImages();

// manipular el DOM en cada iteración tiene un costo,
// para evitarlo aplicamos una variable let fuera a la que le pasaremos las iteraciónes
// luego se aplica la manipulación del DOM (.inner...)
// cuando es una app más grande se nota la diferencia de performanse