//* Default Parameter

//! Contoh 1
function register(name, gender = 'unknown') {
  console.log(`Nama saya ${name}, jenis kelamin ${gender}`);
}

register('John');
register('John', 'Male');

console.log();

//! Contoh 2
function MyCar(brand, color, machine = 'Toyota') {
  console.log(`Mobil saya adalah ${brand} warna ${color} dan mesinnya ${machine}`);
}

MyCar('Fortuner', 'Putih');
