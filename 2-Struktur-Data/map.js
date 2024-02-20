//* Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object
//* Bedanya Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.
//* Untuk mendifinisikan Map, pake Contructor gini " const myMap = new Map(); "

//! Soal 1 (Keynya bisa apa saja, bisa string, number dll)
const myMap = new Map([
  ['1', 'Key berupa String'],
  [2, 'Key berupa Number'],
  [true, true],
  [4.5, 'Key berupa Desimal '],
]);

console.log(myMap);

console.log();

//! Soal 2 (Mengambil nilainta paka Get(), menambahkan nilai pake Set() )
const negara = new Map([
  ['Jakarta', 'Indonesia'],
  ['Amsterdam', 'Belanda'],
  ['Canberra', 'Australia'],
  ['Kuala Lumpur', 'Malaysia'],
  ['Ankara', 'Turki'],
]);

console.log('Sebelum data Map di tambah/kurangi:');
console.log(negara);
console.log('Isi dalam data map berjumlah: ' + negara.size);

console.log();

//? Untuk mengambil nilai dalam map panggil Key-nya dengan Get('Key-nya')
const namaIbukota = negara.get('Jakarta');
console.log('Ibukota negara yg dipilih adalah: ' + namaIbukota);

console.log();

//? Untuk menambahkan nilai kedalam Map paket Set('Key', 'Value')
const namdahDataMap = negara.set('Seoul', 'Korea Selatan');

console.log('Setelah data Map di tambah:');
console.log(negara);
console.log('Isi dalam data map berjumlah: ' + negara.size);
