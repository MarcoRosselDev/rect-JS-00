const button = document.querySelector('.buttonStart');
const cards = document.querySelector('.cards');
const sum = document.querySelector('.sum');
const h3 = document.querySelector('.h3');
const div = document.querySelector('.div1');
const buttonNewCard = document.querySelector('.buttonNewCard');

button.addEventListener('click', function(){

  /* reandom cards 1-11 */  
  let card1 = Math.floor(Math.random() * 11) + 1;
  let card2 = Math.floor(Math.random() * 11) + 1;
  let a = cards.innerText = `Cards: ${card1}, ${card2}`;
  
  /* sum of the cards*/
  let sumCards = card1 + card2;
  let b = sum.innerText = `Sum: ${sumCards}`;
  
  /* conditional and print text */
  conditional(sumCards);
  
  buttonNewCard.addEventListener('click', function(){
    let card3 = Math.floor(Math.random() * 11) + 1;
    const sumAllCards = sumCards + card3;
    a = cards.innerText = `Cards: ${card1}, ${card2}, ${card3}`;
    sumCards = card1 + card2 + card3;
    b = sum.innerText = `Sum: ${sumCards}`;
    conditional(sumCards);
  })
})

function conditional(sumCards){
  if (sumCards < 21) {
    h3.innerText = `Do you want to draw a new card?`;
    div.classList.remove('add');
  } else if (sumCards === 21) {
    h3.innerText = `Wohooo! You've got Blackjack!`;
  } else {
    h3.innerText = `You're out of the game!`;
    div.classList.add('add');
  }
}