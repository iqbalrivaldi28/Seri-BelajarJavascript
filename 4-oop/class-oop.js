//* Cara buat blueprint Class dengan Javascript
//* Penerapan OOP Dengan Menggunakan Class

//* Class digunakan sebagai altervative pengganti cara constructor function

//* Sejak EcmaScript versi 6, diperkenalkan kata kunci baru, yaitu class, ini merupakan kata kunci yang digunakan untuk membuat class di JavaScript
//* Dengan kata kunci class, kita tidak perlu lagi menggunakan constructor function untuk membuat class

//! Contoh 1 ( Penulisan Class )
class Person {}

const iqbal = new Person();
console.log(iqbal);

console.log();

//! Contoh 2 ( Penerapannya )
class Car {
  constructor(brand, color, machine) {
    this.brand = brand;
    this.color = color;
    this.machine = machine;
  }

  maju() {
    console.log(`${this.brand} ${this.color} berjalan maju`);
  }

  mundur() {
    console.log(`${this.brand} ${this.color} berjalan mundur`);
  }

  berbelok() {
    console.log(`${this.brand} ${this.color} berbelok`);
  }
}

//? Membuat objek mobil dengan class Car
const car1 = new Car('Toyota', 'White', 'Diesel');
const car2 = new Car('Honda', 'Gray', 'CVT');
const car3 = new Car('Mitsubihi', 'RED', 'CVT');

console.log(car1);
console.log(car2);
console.log(car3);

//? Cara Akses Methodnya
car1.maju();
car2.mundur();
car3.berbelok();

console.log();

//? LANJUTAN LEBIH DETAIL SOAL CLASS PADA JAVASCRIPT

//! Contoh 1
//? Constructor didalam Class

class PersonDua {
  constructor(name) {
    console.log(`Hai, salam kenal ${name}`);
  }
}

const iqball = new PersonDua('Iqbal');

console.log();

//! Contoh 2
//? Property dalam Class
class PersonTiga {
  constructor(name) {
    this.name = name;
  }
}

const objectNaisa = new PersonTiga('Naisa');
console.info(objectNaisa);

console.log();

//! Contoh 3
//? Method/Function dalam Class
class Mobil {
  constructor(brand) {
    this.brand = brand;
  }
  //? Method (Function)
  mobilBerbelok(belok) {
    console.log(`Mobil ${this.brand} berbelok ke arah ${belok}`);
  }
}

const objectMobil = new Mobil('HRV');
objectMobil.mobilBerbelok('Kanan');

console.log();

//! Contoh 4
//? Class Inheritance ( Kita bisa menggunakan inheritance pada class dengan Extends )
class Manager {
  sayHello(name) {
    console.log(`Hai, salam kenal ${name}`);
  }
}

class Employee extends Manager {}

const objectManager = new Manager();
objectManager.sayHello('Iqbal');

const objectEmployee = new Employee();
objectEmployee.sayHello('Naisa'); //? Disini kita bisa pake function yg ada di parent


