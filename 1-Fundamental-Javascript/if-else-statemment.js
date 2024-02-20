//! Contoh Satu

let angkaSatu = 10;
let angkaDua = 5;

let hasil = angkaSatu + angkaDua;
console.log(hasil);

if (hasil >= 10) {
  console.log('Angka diatas 10');
} else {
  console.log('angka dibawah 10');
}

//! Contoh Dua
let umur = 27;

if (umur >= 18) {
  console.log('Kamu udah dewasa');
} else if (umur >= 10 <= 17) {
  console.log('Kamu remaja');
} else {
  console.log('Kamu anak-anak');
}

//! Contoh Tiga

//* Penggunaan Ternari Operator
//* condition ? true expression : false expression

const apakahHewan = false;
//!              condition    ? true expression          : false expression
const cekHewan = apakahHewan ? console.log('itu hewan') : console.log('bukan hewan');

const angka = 2;
const angkaGenap = angka % 2 == 0 ? console.log('itu genap') : console.log('itu ganjil');
//!                 Logikanya      ? Kalau benar              : kalau salah
