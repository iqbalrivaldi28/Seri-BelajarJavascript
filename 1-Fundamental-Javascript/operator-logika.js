//* Operator Logika pada Javascript
//* && (True = true hasilnya true, sisanya false)
//* || (True = false hasilnya true, salah satu true hasilnya true)
//* != (Kebalikan nilai)

const nilaiUjian = 90;
const nilaiAbsensi = 100;

const lulusUjian = nilaiUjian > 70;
const lulusAbsensi = nilaiAbsensi > 75;

const lulus = lulusUjian && lulusAbsensi;
console.log(lulus);

//? Bisa juga pake Ternary Operator (Kayak If else tapi singkat)
const ketLulus = lulusUjian && lulusAbsensi ? console.log('Kamu Lulus') : console.log('Kamu ngak Lulus');
