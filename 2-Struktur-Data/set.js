//* Set sederhananya merupakan kumpulan nilai (set of values)
//* Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks.
//* Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi

//! Soal 1
const numberSet = new Set([1, 4, 6, 4, 7, 9, 10, 7]); //? Outputnya [ 1, 4, 6, 7, 9, 10] Tidak ada data duplikat
console.log(numberSet);

console.log();

//! Soal 2 (Menambahkan nilai kedalam Set pake method Add() )
const numberSetDua = new Set([28, 7, 1]);

numberSetDua.add(20); //? Methode Add() hanya menerima satu argumen saja
numberSetDua.add(9);
numberSetDua.add(90);

console.log(numberSetDua);

console.log();

//! Soal 3 (Menghapus salah satu nilai yg ada didalam Set)
const numberSetTiga = new Set([1, 2, 3, 4]);

numberSetTiga.delete(4); //? yg dihapus angka 4 bukan indeks 4
console.log(numberSetTiga);

console.log();

//! Soal 4 (Latihan mandiri)
// Membuat Set
let objSet = new Set();

// Menambahkan objek ke Set
let obj1 = { name: 'John' };
let obj2 = { name: 'Jane' };

objSet.add(obj1);
objSet.add(obj2);

console.log(objSet); // Output: Set { { name: 'John' }, { name: 'Jane' } }

console.log();

//! Soal 5 (Latihan mandiri)
//? Set tidak bisa diisi langsung sama data object, masukan ke array dulu objectnya
const obSetDua = new Set([
  {
    fullName: 'Boy Pertama',
    age: 15,
    address: 'Bandung',
  },
]);

//? Untuk desctructing kita ubah ke array dulu
const obJadiArray = [...obSetDua];
console.log(obJadiArray[0]); //? Ini untuk cetak berdasarkan inedx
console.log();
console.log(obJadiArray[0].fullName); //? Ini untuk cetak index dan value apa yg mau diambil

console.log();

//! Soal 6 (Laithan mandiri)
const obArrayDua = new Set([
  { name: 'Iqbal', age: 22, job: 'Software Engineer' }, //? Index 0
  { name: 'Naisa', age: 17, job: 'Writer' }, //? Index 1
  { name: 'Nasywa', age: 4, job: 'Student' }, //? Index 2
]);

//? Kita desctructing dulu ke array pake spread operator [...nama data setnya]
const obJadiArrayDua = [...obArrayDua];

console.log(obJadiArrayDua[0]); //? Kita ambil index 0 dari array yaitu object Iqbal
console.log();

console.log(obJadiArrayDua[1]); //? Kita ambil index 1 dari array yaitu object Naisa
console.log();

console.log(obJadiArrayDua[2]); //? Kita ambil index 2 dari array yaitu object Iqbal
console.log();
