//* Overrinding adalah penulisan kembali method yang ada di Parent kedalam Child

//! Contoh 1 (Sederhananya)
//! Parent
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} bersuara`);
  }
}

//! Child
class Kucing extends Animal {
  //? Overriding constructor (dimana kita namabahin propertynya)
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  //? Overrinding method dan kita tamabahain isinya
  speak() {
    console.log(`${this.name} bersuara keras! dan usianya ${this.age} tahun`);
  }
}

//? Intance/inisiasi objek
const kucing = new Kucing('Belang', 5);
kucing.speak();
