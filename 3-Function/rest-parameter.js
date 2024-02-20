//* Rest Parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyak nya pada satu parameter, dan secara otomatis akan di konversi menjadi Array
//* Rest parameter hanya boleh ada satu di function, tidak boleh lebih dari satu
//* Rest parameter hanya boleh berada di posisi paling akhir, tidak boleh di depan atau di tengah, kecuali memang cuma ada 1 parameter

//! Contoh 1
function sum(name, ...data) {
  let total = 0;
  for (let item of data) {
    total += item;
  }

  console.log(`name: ${name} dan jumlahnya: ${total}`);
}

//? Ini waku kita panggil pada paremeter kedua atau Rest, kita bisa masukin data sebanyak nya
sum('Angga', 2, 2, 2, 2);

console.log();

//! Contoh 2
function restParamDua(nama, age, ...scores) {
  let jmlScore = 0;
  for (let score of scores) {
    jmlScore += score;
  }
  console.log(`nama: ${nama}, umur: ${age}, Total Score: ${jmlScore}`);
}

restParamDua('Naisa', 18, 20, 20, 20, 20, 20);
restParamDua('Nasywa', 18, 20, 20, 20, 20, 15);
//?          Param 1,  Param2, Param 3 (Rest)
restParamDua('Natahsa', 18, 20, 20, 20, 20, 14);

console.log();

//! Contoh 3
//? Penerapan Spread Operator (Untuk menggabungkan 2 array atau dua objek atau lebih)

//* Seandainya kita ada data array yg ingin kita masukan kedalam Rest Parameter
//* Kita harus pake yg namanya Spread Operator

function restSpread(name, gender, age, ...datas) {
  let jmlData = 0;
  for (let data of datas) {
    jmlData += data;
  }
  console.log(`Nama: ${name}, Gender: ${gender}, Age: ${age}, Data: ${jmlData}`);
}

//? Data Array kita
const dataArray = [10, 10, 10, 10, 10, 10, 10]; //? Total 70

//? Cara masukinnya ke Rest Parameter pake Spread Operator
restSpread('Fauzan', 'Male', 12, ...dataArray);

console.log();

//! Contoh 4 (Explore Spread Operator)
const arraySatu = [10, 10, 10, 10, 10];
const arrayDua = [10, 10, 10, 10, 10];

const arrays = [...arraySatu, ...arrayDua];

function JumlahScore(name, ...scores) {
  let totalScore = 0;
  for (let score of scores) {
    totalScore += score;
  }
  console.log(`Nama: ${name}, Total Score: ${totalScore}`);
}

//? Kita panggil
JumlahScore('Ani', ...arrays);

console.log();

//! Contoh 5 (Explore Spread Operator)
const objectSatu = {
  nama: 'Naisa',
  gender: 'Female',
  age: 18,
  address: 'Jakarta',
};

const objectDua = {
  nama: 'Nasywa',
  gender: 'Female',
  age: 15,
  address: 'Jakarta',
};

const mergeGroup = [objectSatu, objectDua]; //? Kita gabungin 2 object menjadi 1 array
console.log(mergeGroup);
