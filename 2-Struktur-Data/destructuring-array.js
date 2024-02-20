//* Descturcting Array sama kayak Destructing Object
//* Bedanya destructuring array bekerja berdasarkan posisi daripada penamaan propertinya

//! Soal 1
const arraySatu = ['Naisa', 'Nasywa', 'Natasha'];

//? Penamaan variabelnya bebas, dia hanya sesuai dengan index arrarnya
const [namaSatu, namaDua, namaTiga] = arraySatu;
console.log(namaSatu);
console.log(namaDua);
console.log(namaTiga);

console.log();

//! Soal 2 (Desctructing nilai pada index tertentu saja)
const arrayDua = ['Avanza', 'Fortuner', 'Rush'];

//? Ngambil nilai index tertentu dipisahkan pake koma(,) saja
const [, mobilIbang] = arrayDua;
console.log('Mobil iqbal adalah ' + mobilIbang);

console.log();

//! Soal 3 (Destructuring Assignment, sama kayak object tapi tidak perlu membungkusnya dengan tanda kurung)
const arrayTiga = ['Bakso', 'Mie Ayam', 'Kwitiaw', 'Pecel'];

let makananSatu = 'Batagor';
let makananDua = 'Somay';

//? Disini walaupun nama variabelnya sama tapi dia ngak nimpa
[makananSatu, makananDua, makananTiga] = arrayTiga;
console.log(makananSatu);
console.log(makananDua);
console.log(makananTiga);

console.log();

//! Soal 4 (Default Value)
const arrayEmpat = ['Indonesia', 'Malaysia'];

//? Disini kita kasih default value agar tidak unfined
const [negaraSatu, negaraDua, negaraTiga = 'Brunei'] = arrayEmpat;
console.log(negaraSatu);
console.log(negaraDua);
console.log(negaraTiga);

console.log();

//! Soal 5 (Saling tukar nilai antar variabel)
let timA = 9;
let timB = 7;

console.log('Sebelum tukaran nilai');
console.log('Nilai Tim A: ' + timA);
console.log('Nilai Tim B: ' + timB);

console.log();

[timA, timB] = [timB, timA]; //? Ini proses pertukaran nilainya

console.log('Sesudah tukaran nilai');
console.log('Nilai Tim A: ' + timA);
console.log('Nilai Tim B: ' + timB);

console.log();

//! Soal 6 (Latihan Sendiri)
const arrayToyota = ['Fortuner', 'Rush', 'Inova'];
const arrayHonda = ['HRV', 'BRV', 'Mobilio'];

const kendaraanMobil = [arrayToyota, arrayHonda]; //? Kalau gini dia jadi ada 1 array yang isinya 2 array
console.log(kendaraanMobil);

const kendaraanMobilDua = [...arrayToyota, ...arrayHonda]; //? Kalau gini dia jadi 1 array gabungan antara 2 array
console.log(kendaraanMobilDua);

const [mobilIqbal, , , mobilBapak, ,] = kendaraanMobilDua;
console.log('Mobil ibang itu: ' + mobilIqbal);
console.log('Mobil bapak itu: ' + mobilBapak);
