//* Field aalah property yg berisikan value dalam class
//* Kita bsia membuat propertynya sejajar dengan method (function) dan constructor dalam class

//* Private field hanya bisa di akses di class itu saja
//* Private field di tandai dengan tanda #

//! Contoh Penerapannya
class Counter {
  #counter = 0;

  increment() {
    this.#counter++;
  }

  decrement() {
    this.#counter--;
  }

  get() {
    return this.#counter;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.get());

console.log();

//! Contoh 2
class myCar {
  firstName;
  age;
  #lastName;
}

myCar.firstName;
myCar.age;
myCar.#lastName; //? Ini ngak bisa diakses
