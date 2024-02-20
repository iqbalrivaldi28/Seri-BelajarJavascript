//* Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru,
//* Spread operator dituliskan dengan tiga titik (...)

//! Soal 1
const makananFavorit = ['Tahu', 'Tempe', 'Telor', 'Kwitiaw'];

console.log(makananFavorit); //? Hasilnya gini nanti =  [ 'Tahu', 'Tempe', 'Telor', 'Kwitiaw' ]
console.log(...makananFavorit); //? Haislnya kayak ini = Tahu, Tempe, Telor, Kwitiaw

//! Soal 2 (Mangggabungkan isi dari 2 array menjadi 1)
const mobilSaya = ['Honda HRV', 'Toyota Fortuner', 'Mitsubishi Xpander'];
const motorSaya = ['Honda vario 125', 'Yamaha XSR', 'Honda Scopy'];

const kendaraanSaya = [...mobilSaya, ...motorSaya];
console.log(kendaraanSaya);

//* Selain untuk Array bisa juga Untuk Object

//! Soal 3 (Menggabungkan isi dari 2 object)
const objectSatu = {
  firstName: 'Nasia',
  lastName: 'Alifia Yuriza',
  age: 17,
};

const objectDua = {
  gender: 'Female',
  hobby: 'writing',
  isBeautifull: true,
};

const objectSpread = { ...objectSatu, ...objectDua };
console.log(objectSpread);
