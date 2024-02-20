//* Funtion Sebagai values adalah kita memasukan function ke dalam variabel
//* Kita juga bisa masukin sebuah function ke dalam parameter function lainnya

//! Contoh 1
function sayHello(name) {
  console.log(`Hai, salam kenal ${name}`);
}

const say = sayHello; //? Disini kita simpan ke variabel functionya

sayHello('Naisa');
say('Fauzan');

console.log();

//! Conoth 2 ( Function di Parameter )
function readyName(name) {
  console.log(`Nama untuk kamu ${name}`);
}

function giveMeName(callback) {
  callback('Iqbal');
}

giveMeName(readyName);

console.log();

//! Contoh 3
function Cars(brand, machine) {
  return `Mobil kamu ${brand} dan mesinnya ${machine}`;
}

function MyCars(callback) {
  console.log(callback('Fortuner', 'Toyota')); //? Bisa disini juga untuk cetak di console
}

MyCars(Cars);
