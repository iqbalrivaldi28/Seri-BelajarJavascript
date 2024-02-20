//* Private method sama seperti private field
//* Caranya sama, dengan menambahkan tanda # diawal method, maka secara otomatis method tersebut adalah private

//! Contoh Penerapannya
class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName();
    }
  }

  #sayWithName(name) {
    console.log(`Hello ${name}`);
  }

  #sayWithoutName() {
    console.log(`Hello`);
  }
}

const objectPerson = new Person();
objectPerson.say('Naisa'); //? With Name
objectPerson.say(); //? Without Name
