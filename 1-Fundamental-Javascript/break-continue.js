//* Break dan Continue psa Javascript

//! Contoh 1 (Break)
let counter = 1;

while (true) {
  console.log(`Perulangan ke- ${counter}`);
  counter++;

  if (counter > 10) {
    break;
  }
}

console.log();

//! Contoh 2 (Continue)
for (let angka = 1; angka <= 10; angka++) {
  if (angka % 2 == 0) {
    continue;
  }

  console.log(`Ini angka ganjil = ${angka}`);
}
