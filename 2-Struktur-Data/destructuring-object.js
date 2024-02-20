//* Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau
// * properties dari sebuah object ke dalam satuan yang lebih kecil.

//! Soal 1
const objectSatu = {
  fullName: 'Naisa Alifia Yuriza',
  age: 17,
  hobby: 'Menulis',
};

//? KiTa Destructing(ambil nilanya) pake cara ini
const { fullName, age } = objectSatu; //? Buat Variabel yang namanya sama ke objectnya

console.log(fullName);
console.log(age);

//! Soal 2 (Seandainya ada variabel yg namanya sama kayak properti di objectnya)
const objectDua = {
  carName: 'Fortuner',
  machine: 'Toyota',
  cc: 2400,
};

let carName = 'Avanza'; //? Supaya ngak nimpa ini
let machine = 'Toyota';

//? Menginisialisasi nilai baru melalui destructuring object
({ carName } = objectDua); //? Dia kalau pake () ngak akan nimpa carName = avanza
console.log(carName);

//! Soal 3 (Ngasih nilai Default ke Property Objectnya)
const objectTiga = {
  playerName: 'Messi',
  number: 10,
};

const { playerName, number, national = 'Argentina' } = objectTiga; //? Kaasih default Value National
console.log('Player Name:', playerName, 'Number T-Shirt:', number, 'National: ', national);

//! Soal 4 (Waktu inisialiasi variabel pake nama beda)
const objectEmpat = {
  namePet: 'Cing-cing',
  color: 'White',
  age: 5,
};

//? Disini kita ubah nama Properti object namePet jadi variabel Lokal namaHewan
const { namePet: namaHewan, color: warna, age: umur } = objectEmpat;
console.log(namaHewan);
console.log(warna);
console.log(umur);

//! Soal 5 (Latihan mandiri)
const biodataIndonsia = {
  nama: 'Indonesia',
  ibuKota: 'Jakarta',
  tahunMerdeka: 1945,
};

const biodataSingapura = {
  namaNegara: 'Singapura',
  ibuKotaNegara: 'Singapura',
  tahunBerdiri: 1949,
};

const biodataNegara = { ...biodataIndonsia, ...biodataSingapura };
console.log(biodataNegara);

//? Desctructing Object Yang Sudah Digabungkan
const { nama, namaNegara } = biodataNegara;
console.log(nama);
console.log(namaNegara);
