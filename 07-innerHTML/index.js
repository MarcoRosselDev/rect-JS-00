//document.gerElementBiId("count-el").innerText = 5

//change the count-el in the html to reflect the new count

let h1 = document.querySelector('.h1');
const button = document.querySelector('.button');

let count = 0;

button.addEventListener('click', function(){
  count = count + 1;
  h1.innerText = count;
})