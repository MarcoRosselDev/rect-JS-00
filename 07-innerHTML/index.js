//document.gerElementBiId("count-el").innerText = 5

//change the count-el in the html to reflect the new count

let h1 = document.querySelector('.h1');
const button = document.querySelector('.button');
const buttonDown = document.querySelector('.button-decres');
const recete = document.querySelector('.recete');

let count = 0;

button.addEventListener('click', function(){
  count += 1;
  h1.innerHTML = count;
  /* h1.innerText = count;

  por lo que veo se puede con innerText y innerHTML
  por que? no tengo idea 
  */
});

buttonDown.addEventListener('click', function(){
  count -=  1;
  h1.innerHTML = count;
});

recete.addEventListener('click', function (){
  count = 0;
  h1.innerHTML = count;
})