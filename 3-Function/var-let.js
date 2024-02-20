//* Delrasi Var pada variable tidak di rekomendasikan
//* Sebagai gantinya kita bisa gunakan Let

//! Pengunaan Let
let i = 1;

for (let i = 0; i <= 10; i++) {
  console.log(`Local: ${i}`);
}

console.log(`Global: ${i}`); //? nilai i tetap 1

console.log();

//! Pengunaan Var
var j = 1;

for (var j = 0; j <= 10; j++) {
  console.log(`Local: ${j}`);
}

console.log(`Global: ${j}`); //? nilai j berubah 11
