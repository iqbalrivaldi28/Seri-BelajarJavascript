//* Array merupakan tipe data yang dapat mengelompokkan
//* lebih dari satu nilai dan menempatkannya dalam satu variabe

//* Perbedaan array dengan object adalah data pada array disusun secara berurutan
//* dan diakses menggunakan index

//! 1. Buat Arraynya
let myArray = ['satu', true, 3, 4.5];

//! 2. Untuk cetak isi Arraynya
console.log(myArray[1]); //? Berdasarkan Indexnya

for (let item of myArray) {
  console.log(item); //? Semua isinya pake For..Of
}

console.log('Panjang Arraynya adalah ' + myArray.length);

//! 3. Manipulasi isi Arraynya

//? Push() = Menambhakan nilai ke elemen akhir Arraynya
myArray.push('Ganteng bet');

//? Pop() = Mengeluarkan data atau elemen terakhir dari array
myArray.pop();

//? Shift() = Digunakan untuk mengeluarkan elemen pertama dari array,
myArray.shift();

//? Unshift() = Digunakan untuk menambahkan elemen di awal array.
myArray.unshift('Nomor Satu');

//? Delete() = Untuk menghapus data pada Array (Dia ngapus isinya tapi elemenya masih ada)
delete myArray[3];

//? Splice() = Untuk menghapus data dan elemennya
myArray.splice(3, 1); // Maksudnya hapus index ke-3 sebanyak 1

console.log(myArray);
