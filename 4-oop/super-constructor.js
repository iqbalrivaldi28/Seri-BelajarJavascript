//* Super Constructor digunakan untuk memanggil constructor yg ada di Parent

//! Contoh 1
//? Parent Class nya
class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello(name) {
    console.log(`Hi ${name}, my name is employes ${this.firstName}`);
  }
}

//? Child Class nya
class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName); //? Pake keyword Super()
    this.lastName = lastName;
  }

  sayHello(name) {
    console.log(`Hello ${name}, my name is manager ${this.firstName}`);
  }
}

//? Ini objectnya
const iqbal = new Employee('haikal');
iqbal.sayHello('iqbal');

console.log();

const haikal = new Manager('Iqbal');
haikal.sayHello('haikal');

console.log();

//? ===========================================
//? Ini eksplorer sendiri

class Familiy {
  constructor(familyName) {
    this.familyName = familyName;
  }

  giveName(name) {
    console.log(`Nama: ${name}`);
    console.log(`Nama Keluarga: ${this.familyName}`);
  }
}

class Children extends Familiy {
  constructor(name, familyName) {
    super(familyName); //? Panggil super dulu baru pake this
    this.name = name;
  }
}

//? Ini objectnya
const namaAnak = new Children('nama', 'Nainggolan');
namaAnak.giveName('Radja');
