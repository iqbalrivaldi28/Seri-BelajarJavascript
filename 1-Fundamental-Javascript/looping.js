//! For Loop

//* for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
//     // do something
//   }

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let a = 0; a <= 5; a++) {
  console.log('Aku suka kamu!');
}

//! For..Of

let myArray = ['naisa', 'nayswa', 'natasha'];

for (const arrayItem of myArray) {
  console.log(arrayItem);
}

let mixArray = [1, 'dua', true, 2.5];

for (let arrayItem of mixArray) {
  console.log(arrayItem);
}

/*=================================================*/

//! While Loop
let angka = 1;
while (angka <= 5) {
  console.log(angka);
  angka++;
}

let nameKamu = 'Raisa';
let countNumber = 1;

while (countNumber <= 3) {
  console.log('aku suka ' + nameKamu);
  countNumber++;
}

//! Do While

let myNumber = 1;

do {
  console.log(myNumber);
  myNumber++;
} while (myNumber < 3);
