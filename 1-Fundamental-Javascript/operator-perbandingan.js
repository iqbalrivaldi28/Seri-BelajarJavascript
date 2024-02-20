//* Operator Perbandingan pada Javascript

let a = 9;
let b = 9;
let c = '9';

let resultSatu = a == b;
console.log(resultSatu); //? True

let resultDua = a == c;
console.log(resultDua); //? True (Karena cuman cek nilai saja tanpa tipe datanya)

let resultTiga = a === c;
console.log(resultTiga); //? False (Karena beda tipe data)
