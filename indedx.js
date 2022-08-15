class MyArray {

  constructor() {
    this.length = 0;
    this.data = {}
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index){
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < index.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  
  /* reto crar un metodo para eliminar un elemento del principio
     agregar un elemento al princio. */
}


const myArray = new MyArray();

myArray.push('jose');
console.log(myArray);