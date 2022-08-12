let a = 10;
let b = 11;

sum = a + b ;

if (sum < 21) {
  console.log('Do you want to draw a new card ?');
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack !");
} else {
  console.log("You're out the game!");
}