const iptCuadrado = document.querySelector('.ipt-cuadrado');
const btnArea = document.querySelector('.btn-area-cuadrado');
const btnPerimetro = document.querySelector('.btn-perimetro-cuadrado');
const divCuadrado = document.querySelector('.cuadrado');

btnArea.addEventListener('click', function(){
  divCuadrado.innerHTML += `
  <h4>The area of a square
  white ${iptCuadrado.value} meters
  is: <strong>${iptCuadrado.value ** 2} meters square</strong></h4>`
  iptCuadrado.value = "";
});

btnPerimetro.addEventListener('click', function(){
  divCuadrado.innerHTML += `
  <h4>The perimeter of a square
  white ${iptCuadrado.value} meters
  is: <strong>${iptCuadrado.value * 4} meters</strong></h4>`
  iptCuadrado.value = "";
})