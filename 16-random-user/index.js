let users = {
  1:{
    name: 'andres',
    age: '23',
    nationality: 'chilean',
    phrase: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
  2:{
    name: 'aron',
    age: '33',
    nationality: 'mexican',
    phrase: 'Lorem ipsum dolor sit amet consectetur  elit.'
  },
  3:{
    name: 'maria',
    age: '26',
    nationality: 'mexican',
    phrase: 'ipsum dolor sit amet consectetur elit.'
  },
  4:{
    name: 'marcus',
    age: '89',
    nationality: 'brazilian',
    phrase: 'Lorem lor sit amet consectetur elit.'
  },
  5:{
    name: 'eduardo',
    age: '33',
    nationality: 'peruan',
    phrase: 'Lorem ipsum dolor amet consectetur elit.'
  },
  6:{
    name: 'eva',
    age: '45',
    nationality: 'argentin',
    phrase: 'Lorem consectetur elit.'
  },
  7:{
    name: 'luis',
    age: '26',
    nationality: 'mexican',
    phrase: 'Lorem ipsum dolor sit amet consectetur '
  }
}

let name1 = document.querySelector('.name');
let age = document.querySelector('.age');
let nationality = document.querySelector('.nationality');
let phrase = document.querySelector('.phrase');
let button = document.querySelector('.button');

button.addEventListener('click', function() {
  let a = Math.floor(Math.random() * users.length );

  name1.innerText = users[a].name;
  age.innerText = users[a].age;
  nationality.innerText = users[a].nationality;
  phrase.innerText = users[a].phrase;

})