const iptCuadrado = document.querySelector('.ipt-cuadrado');
const btnArea = document.querySelector('.btn-area-cuadrado');
const btnPerimetro = document.querySelector('.btn-perimetro-cuadrado');
const divCuadrado = document.querySelector('.cuadrado');

btnArea.addEventListener('click', function(){
  divCuadrado.innerHTML += `
  <h4>The area of a square
  of ${iptCuadrado.value} meters
  is: <strong>${iptCuadrado.value ** 2} meters</strong></h4>`
  iptCuadrado.value = "";
})