//* Field aalah property yg berisikan value dalam class
//* Kita bsia membuat propertynya sejajar dengan method (function) dan constructor dalam class

//! Contoh Penulisannya
class Customer {
  firstName; //? Undfied
  lastName = 'Nainggolan';
  age = 20;
  address; //? Undfied
}

const eko = new Customer();
console.log(eko);

//? Kalau nilainya fieldnya ngak diisi akan undfined

console.log();

//! Contoh 2
class Car {
  brand;
  color;

  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}

const objectCar = new Car('Fortuner', 'Putih');
console.log(objectCar);
