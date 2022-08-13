const h1 = document.querySelector('.h1');

let array = ['hello', 'mi', 'name', 'is', 'marco', 'and', "I'm"];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.table(i);
  h1.innerHTML += array[i];
}