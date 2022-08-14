const random = {
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

const name = document.querySelector('.name');
const age = document.querySelector('.age');
const nationality = document.querySelector('.nationality');
const phrase = document.querySelector('.phrase');
const button = document.querySelector('.button');

button.addEventListener('click', function() { 
  randomUser();
  
})

function randomUser(){
  let user = Math.floor((Math.random() * 7) + 1);
  return user;
}