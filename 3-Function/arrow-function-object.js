//* Penulisan sebuah arrow function dalah sebuah object
//* Namun perlu diketahui, Arrow Function tidak bisa digunakan untuk mengakses arguments object, function generator, kata kunci this dan kata kunci super (dibahas di materi JavaScript Object Oriented Programming)

//! Contoh 1
const person = {
  nama: 'Naisa',

  sayHello: (nama) => {
    console.log(`Hello ${nama}`);
  },
};

person.sayHello('Natasha');

//! Contoh 2 ( Dengan arrow function kita ngak bisa pake This )
const personDua = {
  nama: 'Joko',

  sayHai: (nama) => {
    console.log(`Hai..${nama}, nama saya adalah ${this.nama}`);
  },
};

personDua.sayHai('Budi'); //? Ouputnya Hai..Budi, nama saya adalah undfied
