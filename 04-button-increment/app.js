/* 
initialize the count as 0
listen for clicks on the increment button
increment the count varioable when the button is clicked
change the count-el in the HTML to reflect the new count */

function increment(){
  console.log('the button was clicked');
}

const up = document.querySelector('.increment-btn');

up.addEventListener('click', function(){
  console.log('you are clicked this button');
})