//* Object mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks.
//* Untuk menetapkan objek pada sebuah variabel kita gunakan tanda kurung kurawal {}

//! 1) Buat Objectnya
const user = {
  firstname: 'naisa',
  lastname: 'putri',
  age: 20,
  gender: 'female',
};

//! 2. Ini Untuk Ubah Nilai apda Objecnta
user.lastname = 'alifia yuriza';

//! 3. Cara namabahin properti dalam Objecnya
user.address = 'Jakarta';
user.job = 'Content-creator';

//! 4. Cara hapus salah satu propertinya
delete user.job;

//? Kalau ingin cetak semua isi Objecnya pake For..In
for (let key in user) {
  console.log(key + ': ' + user[key]);
}

console.log();
//? Kita Cetak Isi Objetnta
console.log(user);
console.log();
console.log(`Helo perkenalkan, saya ${user.firstname} ${user.lastname}`);
console.log();

//* Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau
// * properties dari sebuah object ke dalam satuan yang lebih kecil.

//? Destruction (Ngambil Nilai yg ada dalam Object)
let objectMobil = {
  namaMobil: 'Fortuner',
  mesin: 'Totota',
  jenis: 'Diesel',
  cc: 2400,
  jmlPenumpang: 7,
};

//? Cara 1 Destruction pake For..In

for (let isiObject in objectMobil) {
  console.log(isiObject + ':' + objectMobil[isiObject]);
}

console.log();

//? Cara 2 Destruction pake cara Gini

const { namaMobil, mesin } = objectMobil;

console.log('nama mobil: ' + namaMobil);
console.log(mesin);

console.log();

//? Deangan cara ke-2 Desctructuring jadi manggilnya ngak usah kayak ini lagi
console.log('name mobil: ' + objectMobil.namaMobil);
console.log(objectMobil.mesin);
