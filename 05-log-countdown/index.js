// Create a function (you decide the name) that logs out the numbre 42 to the console
// Call/invoke the function

const button = document.querySelector('.countdown');

button.addEventListener('click', function(){
  let num = 0;
  for (let index = 0; index < 41; index++) {
    console.log(index);
  }
});