//* Function dengan parameter

//! Contoh 1
function perkalian(a, b) {
  return (hasil = a * b);
}

console.log(perkalian(2, 2)); //? Kita panggil functionyya dan tetapin nilai argument nya

console.log();

//! Contoh 2 (Default Parameter)
function penambahan(angkaSatu, angkaDua) {
  return angkaSatu + angkaDua;
}

console.log(penambahan(5)); //? Hasilnya akan 'NaN' karena argument yang dimasukan hanya satu

console.log(penambahan(5, (angkaDua = 10))); //? Cara mengatasinya kita pake default parameter

console.log();

//! Contoh 3 (Ketika Parameternya Object)
const myCar = {
  id: 1,
  carName: 'Fortuner',
  machine: 'Disel',
  brand: 'Toyota',
};

//? Pada parameter function kita destructing
function paramObject({ carName, machine }) {
  return `Mobil Ibang namanya ${carName} dengan mesin ${machine}`;
}

//? Kita panggil functionya dengan argument berupa nama Objectnya
console.log(paramObject(myCar));

console.log();

//! Contoh 4 (Rest Parameter)
function paramRest(...numbers) {
  let hasil = 0;

  for (let number of numbers) {
    hasil += number;
  }

  return hasil;
}

console.log(paramRest(1, 2, 3));
