const iptCuadrado = document.querySelector('.ipt-cuadrado');
const btnArea = document.querySelector('.btn-area-cuadrado');
const btnPerimetro = document.querySelector('.btn-perimetro-cuadrado');
const divCuadrado = document.querySelector('.cuadrado');

btnArea.addEventListener('click', function(){
  if (iptCuadrado.value === string) {
    console.log('put a number please');
  } else {
    console.log(iptCuadrado.value ** 2);
  }
  iptCuadrado.value = "";
})