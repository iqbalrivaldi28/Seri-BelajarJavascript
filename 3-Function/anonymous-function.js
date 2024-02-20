//* Anonymous Function
//* Sebelumnya kita selalu membuat function dengan nama
//* Kita juga bisa membuat function tanpa nama function, atau istilahnya adalah anonymous function
//* Kita bisa buat anonymous function dalam sebuah variable atau bisa juga kita buat ketika mengisi parameter

//! Contoh 1
//? Disini kita membuat anonymous function yg disimpan dalam sebuah variabel
let say = function (name) {
  console.log(`Hai, salam kenal ${name}`);
};

say('Naisa');

console.log();

//! Contoh 2
const myCar = function (brand, color, machine = 'Toyota') {
  console.log(`Mobil saya ${brand} dengan warna ${color} dan mesin ${machine}`);
};

myCar('Fortuner', 'Putih');

console.log();

//! Contoh 3 ( Anonymous function dalam parameter )
//? Disini kita akan membuat anonymous function yg disimpan dalam sebuah paremeter function lain
function giveMeName(callback) {
  callback('Tulus');
}

giveMeName(function (name) {
  console.log(`Your name is ${name}`);
});

console.log();

//! Contoh 4
function giveMeCars(callback) {
  callback('HRV', 'Putih', 'Honda');
}

giveMeCars(function (brand, color, machine) {
  console.log(`Mobil kamu adalah ${brand} warna ${color} dan mesinnya ${machine}`);
});
