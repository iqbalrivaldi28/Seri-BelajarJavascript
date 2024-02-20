//* Javascript bukanlah bahasa murni untuk OOP
//* Tapi kita menerapkan OOP pada JS

//* Cara lama seblum ES6, untuk membuat class kita bisa menggunakan Consturction Function

//! Contoh 1
//? Contoh Penerapan OOP dengan construction function sebagai class nya

//? Buat Classnya
function Person() {}

//? Buat Objecnya pake keyword "New"
const iqbal = new Person();
const naisa = new Person();
const nasywa = new Person();

//! Contoh 2
//? Property pada Constructor Function
function Car() {
  this.brand = '';
  this.color = '';
}

const fortuner = new Car();
const hrv = new Car();

//! Contoh 3
//? Method pada Construction Function ( Function dalam object )
function PersonTwo() {
  this.firstName = '';
  this.lastName = '';
  this.sayHello = function (name) {
    return `Hello ${name}, my name is ${this.firstName}`;
  };
}

//! Contoh 4
//? Parameter di Contruction Function
function MyCar(brand, color) {
  this.brand = brand;
  this.color = color;
  this.isCar = function (name) {
    console.log(`Hai ${name}, mobil saya brandnya ${this.brand} dan warna ${this.color}`);
  };
}

const mobilIqbal = new MyCar('Fortuner', 'Putih');
console.log(mobilIqbal.isCar('Ical'));

//! Contoh 5
//? Constructor Inherintance ( Memanggil Consturctor lain )
function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.log(`Hai..${name}, nama saya ${this.firstName}`);
  };
}

function Manager(firstName, lastName) {
  Employee.call(this, firstName); //? Cara manggil constructor Employee
  this.lastName = lastName;
}
