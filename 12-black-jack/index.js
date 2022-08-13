const button = document.querySelector('.button');
const cards = document.querySelector('.cards');
const sum = document.querySelector('.sum');

button.addEventListener('click', function(){

  /* reandom cards 1-11 */  
  let card1 = Math.floor(Math.random() * 12);
  let card2 = Math.floor(Math.random() * 12);
  cards.innerText = `Cards: ${card1}, ${card2}`;

  /* sum of the cards*/
  sumaCards = card1 + card2;
  sum.innerText = `Sum: ${sumaCards}`;
})



/* 
  <h1>Blackjack</h1>
  <p id="message-el">Want to play a round?</p>
  <p class="cards">Cards:</p>
  <p class="sum">Sum:</p>
  <button class="button">START GAME</button>
*/

