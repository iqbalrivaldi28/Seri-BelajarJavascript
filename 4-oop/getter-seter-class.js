//* Class juga mendukung Getter dan Setter
//* Perlu diingat, getter dan setter ini akan berada di prototype, bukan di instance object

//! Contoh Penerapannya
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    // return `${this.firstName} ${this.lastName}`;
    console.log(`${this.firstName} ${this.lastName}`);
  }

  set fullName(value) {
    const result = value.split('');
    this.firstName = result[0];
    this.lastName = result[1];
  }
}

const objectPerson = new Person('Boy', 'Hamzah');
objectPerson.fullName; //? Manggil Getternya

objectPerson.fullName = 'Jock'; //? Manggil Setternya
objectPerson.fullName;

console.log();

//? ========================
//! Eksplorer getter dan setter sendiri

class Mobil {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  get mobilSaya() {
    console.log(`Mobil saya adalah ${this.brand} dengan warna ${this.color}`);
  }

  set mobilSaya(car) {
    this.brand = car;
  }
}

const objectMobil = new Mobil('Fortuner', 'Putih');
objectMobil.mobilSaya; //? getter dipanggil

objectMobil.mobilSaya = 'HRV'; //? Setter diterapkan untuk ganti nilai brand
objectMobil.mobilSaya;
