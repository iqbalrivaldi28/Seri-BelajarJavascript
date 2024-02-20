//! Contoh 1
function greeting() {
  console.log('Hello, ini function');
}

greeting(); //? Kita panggil functionya

console.log();

//! Contoh 2 (Function dengan Parameter)
function MyGreeting(name, language) {
  if (language === 'Indonesia') {
    console.log(`Halo, selamat datang ${name}`);
  } else if (language === 'Malaysia') {
    console.log('Hello, pa kabar awak ' + name); //? Bisa gini mangiil parameter namenya
  } else if (language === 'English') {
    console.log(`Hello, how are you ${name}`);
  } else {
    console.log('Ini bahasa tak ade opsinye');
  }
}

MyGreeting('Roy', 'Englih');

console.log();

//! Contoh 3 (Return Function)
function AddNumber(a, b) {
  return a * b;
}

const hasilKali = AddNumber(10, 10);
console.log(hasilKali);

console.log();

//! Contoh 4 (Return Function)
function mobilIbang(nama, mesin) {
  if (nama === 'fortuner' || mesin === 'toyota') {
    return `Ini mobil ibang namanya ${nama} dan mesinnya ${mesin}`;
  } else if (nama === 'hrv' || mesin === 'honda') {
    return `Ini mobil ibang namanya ${nama} dan mesinnya ${mesin}`;
  } else {
    return `nama mobil ${nama} dan mesin ${mesin} bukan mobil ibang`;
  }
}

let mobilSaya = mobilIbang('Fortuner', 'toyota');
console.log(mobilSaya);

console.log();

//! Contoh 5 (Expression Function)
//? Expression adalah kode atau instruksi yang mengembalikan nilai, sehingga expression function bisa disimpan dalam sebuah variabel.
//? Fungsi yang tidak bernama juga dikenal dengan anonymous function

//? Kita taro functionya didalam variabel tapi functionya ngak kita kasih nama/anonymous
let expressionFunc = function (nama, bahasa) {
  if (bahasa == 'Indonesia') {
    return `Selamat pagi tuan ${nama}`; //? Bisa gini pake `
  } else if (bahasa === 'English') {
    return 'Good Morning mr. ' + nama; //? Bisa juga gini
  } else {
    return 'Bahasa default';
  }
};

console.log(expressionFunc('iqbal', 'English'));
