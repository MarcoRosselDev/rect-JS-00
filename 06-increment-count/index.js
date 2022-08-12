// change the count-el in the html to reflect the new count

const button = document.querySelector('.button');

let count = 0;

button.addEventListener('click', function(){
  count = count + 1;
  console.log(count);
})
