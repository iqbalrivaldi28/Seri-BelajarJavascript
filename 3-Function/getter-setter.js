//* Getter dan Setter adalah kemampuan membuat function yang berbeda,
//* untuk mengambil data (Getter) dan mengubah data (Setter) pada sebuah property di Object

//! Contoh Penerapan Getter dan Setter
const person = {
  firstName: 'Naisa',
  lastName: 'Alifia Yuriza',

  //? Getter
  get fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },

  //? Setter
  set fullName(val) {
    const array = val.split('');
    this.firstName = array[0];
    this.lastName = array[1];
  },
};

person.fullName; //? Kita panggil Getternya
console.log(person.firstName);

person.fullName = 'Nasywa Fadhilah'; //? Kita panggil Setternya

person.fullName;
console.log(person.firstName);
console.log(person.lastName);
