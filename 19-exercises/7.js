let hands = ['rock', 'paper', 'scissor'];

// create a function that returns a random item from the array.

function random() {
  let a = Math.floor(Math.random() * hands.length);
  return hands[a];
}

console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());