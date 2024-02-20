//* Penulisan Arrow function sama kayak function biasanya bedanya diap pake =>
//* Arrow function itu berupa expression function

//* FYI
//? function declaration (Langsung ditulis functionya)
// function sayHello(greet) {
//     console.log(`${greet}!`);
//   }

//?  function expression (Functionya ditanpung ke sebuah Variabel)
//   const sayName = function (name) {
//     console.log(`Nama saya ${name}`)

//! Contoh 1 (Cara penulisan Arrow Function)
const contohSatu = (nama) => {
  console.log(`Hello ${nama}, salam kenal`);
};

contohSatu('Andy');

console.log();

//! Contoh 2 (Penulisan Singkatnya)
const contohDua = (nama) => console.log(`Hai ${nama} apa kabar?`);

contohDua('Boy');

console.log();

//! Contoh 3 (Jika tidak ada parameter)
const contohTiga = () => console.log(`Hello Javascript`);

contohTiga();
