//* In operator adalah operator yang bisa dilakukan untuk mengecek apakah sebuah property ada di dalam object atau tidak

//! Contoh 1
const mobil = {
  namaMobil: 'Fortuner',
  warna: 'Putih',
  mesin: 'Toyota',
  kapasitasCC: 2600,
};

const mobilSaya = 'namaMobil' in mobil;
console.log(mobilSaya);

//! Contoh 2 ( Bisa Juga pake For..In )
for (let mobilSaya in mobil) {
  console.log(`${mobilSaya} : ${mobil[mobilSaya]}`);
}
