// grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name and  greeting) that contains your name and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

const h1 = document.querySelector('.h1');
const button = document.querySelector('.button');

let name = 'marco';
let lastName = 'rossel';

button.addEventListener('click', function(){
  const  lorem = `hello mi name is ${name} ${lastName} `
  h1.innerText = lorem ;
});
