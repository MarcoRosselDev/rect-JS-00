let fruit = ['🍊', '🍎', '🍊', '🍎', '🍎', '🍊', '🍊', '🍊', '🍊'];

// crate a function that puts the apples onto the appleShelf and the oranges onto the orangeShelf.
// use a for loop, a conditional statement, and the textContent property.

let oranges = document.querySelector('.oranges');
let apples = document.querySelector('.apples');

for (let i = 0; i < fruit.length; i++) {
  
  if (fruit[i] === '🍊') {
    oranges.innerHTML += '🍊';
  } else {
    apples.innerHTML += '🍎';
  }
}