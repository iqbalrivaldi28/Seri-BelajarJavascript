//* Function dalam Function biasanya disebut sebagai Inner Function
//* Inner function hanya bisa diakses di tempat kita membuat function nya, tidak bisa diakses dari luar function nya

//! Contoh 1
function outer() {
  console.log('Ini outer Funtion');

  function inner() {
    console.log('Ini inner Function');
  }

  //? Kita panggil inner functionnya
  inner();
}

outer();
// inner(); //? Kalau kita coba panggil di luar bakal error

console.log();

//! Contoh 2
function parent() {
  let name = 'Iqbal';

  function child() {
    console.log(`My name is ${name}`);
  }

  child();
}

parent();

console.log();

//! Contoh 3
function Car(name, color) {
  console.log('Biodata Mobil Saya:');

  function MyCar() {
    console.log(`Nama Mobil: ${name}`);
    console.log(`Warna Mobil: ${color} `);
  }

  MyCar();
}

Car('Fortuner', 'Putih');
