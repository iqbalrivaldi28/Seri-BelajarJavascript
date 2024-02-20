//* static adalah kata kunci yang bisa kita tambahkan sebelum field atau method,
//* biasannya ketika kita membuat field atau method, maka secara otomatis field akan menjadi property di instance object,
//* dan method akan menjadi function di prototype
//* Jika kita tambahkan static, maka hal itu tidak terjadi

//* Jika kita tambahkan static dalam class field, secara otomatis field tersebut bukan lagi milik instance object, melainkan milik class nya itu sendiri
//* Cara mengakses static class field pun tidak lagi lewat object, melainkan lewat class nya
//* Static class field bisa diartikan sifatnya global, tidak peduli diakses dimana atau siapa yang mengakses, hasilnya akan sama

//! Contoh penerapannya
class Configuration {
  static name = 'Belajar Javascript';
  static version = 1.0;
  static author = 'Eko Kuniawan Khanedy & M. Iqbal Rivaldi';
}

//? Cara mengakesesnya
console.log(Configuration.name); //? Langsung bisa diakses kayak ini
console.log(Configuration.version);
console.log(Configuration.author);

console.log();
