/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */

//! Soal 1
const minimal = (a, b) => {
  if (a <= b) {
    return a;
  } else {
    return b;
  }
};

console.log(minimal(1, 1));

console.log();

//? Code singkatnya untuk jawaban no 1 pake Ternary Operator
const minimalDua = (a, b) => {
  return a <= b ? a : b;
};

//! Soal 2
const power = (a, b) => {
  let result = a ** b;
  return result;
};

//? Atau bisa juga pake function bawaan javascript
const powerDua = (a, b) => {
  return Math.pow(a, b);
};

console.log(powerDua(2, 2));
