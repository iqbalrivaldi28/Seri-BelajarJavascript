/**
 * Soal
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

//ToDo

let evenNumber = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    //console.log(i);
    evenNumber.push(i);
  }
}

console.log(evenNumber);
