/* 

  <h1>Race play</h1>
  <h1 class="player1">player 1</h1>
  <h1 class="player2">player 2</h1>
  <button class="button">go!</button>
  <h3 class="h3"></h3>

*/
const button = document.querySelector('.button');
const h3 = document.querySelector('.h3');


button.addEventListener('click', function(){
  let player1 = Math.floor(Math.random()* 90);
  let player2 = Math.floor(Math.random()* 90);
  if (player1 > player2) {
    h3.innerText = `${player1} > ${player2}, player1 win!`;
  } else if (player1 < player2) {
    h3.innerText = `${player1} < ${player2}, player2 win!`;
  } else {
    h3.innerText = `${player1} = ${player2}, tie!`;
  }
})