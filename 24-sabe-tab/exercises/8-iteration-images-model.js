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

function renderImages() {
  for (let i = 0; i < imgs.length; i++) {
    imagDiv.innerHTML += `
    <img class="lo-que-sea" src="${imgs[i]}"></img>
    `
  }
}

renderImages();