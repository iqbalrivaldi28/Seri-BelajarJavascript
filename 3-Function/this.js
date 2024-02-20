//* Kata kunci this adalah referensi ke object milik siapa
//* Tiap lokasi kata kunci this, bisa berbeda-beda referensi pemilik nya
//* Dalam Object Method, this merupakan referensi ke object pemilik function nya

//! Contoh Penerapan This pada Object Method (Function yg ada didalam object)
const person = {
  nama: 'Iqbal',

  sayHello: function (nama) {
    //this.person
    console.log(`Hai..${nama}, nama saya ${this.nama}`);
  },
};

person.sayHello('Naisa');

//? Contoh diatas dimana ada parameter nama dan property  nama, dengan this kita bisa bedakan
