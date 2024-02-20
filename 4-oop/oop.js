//* Contoh penulisan Konsep OOP pada Javascript

const car = {
  //? Properties
  brand: 'toyota',
  color: 'red',
  maxSpeed: 200,
  machine: 'Diesel',

  //? Method
  maju: () => {
    console.log('Mobil berjalan maju');
  },

  mundur: () => {
    console.log('Mobil berjalan muncur');
  },

  belok: function () {
    console.log('Mobil bisa berbelok');
  },
};

//? Cara akses Propertinya
console.log(car.brand);
console.log(car.color);
console.log(`Mesin mobil saya jenisnya ${car.machine}`); //? Bisa juga gini cetaknya
let kecepatanMobil = car.maxSpeed; //? Bisa di tampung ke vriabel
console.log(kecepatanMobil);

//? Cara akses Methodnya
car.maju();
car.mundur();
//? Ini kita tampung ke variabel, tapi bukan arrow function Yaa..
let belokFunction = car.belok;
belokFunction();
