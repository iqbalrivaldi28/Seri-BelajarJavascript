//* Object Method adalah dimana terdapat function dalam sebuah object

//! Contoh 1
//? Kita buat function sebagai property objectnya dengan key sayHello
const person = {
  fullName: 'Nasywa',
  sayHello: function (name) {
    console.log(`Hai..salam kenal ${name}, Namaku ${this.fullName}`);
  },
};

//? Cara aksesnya
console.log(person.fullName);
console.log(person.sayHello('Naisa'));

//? Cara menambah property kedalam object
person.job = 'Software Engineer';
console.log(person.job);

console.log();

//! Contoh 2
//? Cara menambah method/function kedalam sebuah object
const object = {
  name: 'Natasha',
};

//? Kita coba tambahkan method ke dalam object
object.sayHello = function (name) {
  console.log(`Hello ${name}`);
};

//? Kita akses function yg ada diobjectnya
object.sayHello('Boy');
