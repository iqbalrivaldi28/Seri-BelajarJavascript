//* Scope merupakan area akses sebuah data
//* Ada dua jenis scope, global scope dan local scope

//! Global Scope
let counter = 0;

function addCounter() {
  counter++; //? Disini kita bisa akses scope variabel globalnya
}

addCounter();
addCounter();

console.log(counter); //? Sekarang Nilainya counter = 2

//! Local Scope
function first() {
  let firstVariabel = 'First';
}

function second() {
  let secondVariabel = 'Second';
}

// console.log(firstVariabel); //? Ngak bisa diakses karena sifat variabelnya local

//! Nested Function Scope
function colors() {
  let isColor = 'Blue'; //? variabel pada parent

  function myColor() {
    console.log(`My color is ${isColor}`); //? Kita akses variabel di parentnya
  }

  myColor();
}

colors();
