//* Properti merupakan bagian dari class yang mendefinisikan nilai-nilai yang terkandung dalam sebuah instance class
//* Property dari mobil adalah kayak warna, nama mobil, jenis mesin dan lain sebagainya

//! PROPERTY

//! Contoh 1  (Menetapkan Nilai Default ke Property)
class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    //? Kita langsung kasih nilai propertynya
    this.chasissNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
  }
}

//? Kita buat objeknya
const car1 = new Car('Fortuner', 'White', 'Toyota');
const car2 = new Car('HRV', 'Gray', 'Honda');
const car3 = new Car('XPander', 'Black', 'Mitsubishi');

console.log(car1);
console.log(car2);
console.log(car3);

//? Problem diaatas nilai chasissNumber masih bisa kita ubah
car1.chasissNumber = 'Fortuner-1';
console.log(car1);

//? Agar nilainya tidak bisa diubah kita terapkan setter dan getter
console.log('=========================================================');

//! GETTER & SETTER
class CarTwo {
  constructor(brand, color, machine) {
    this.brand = brand;
    this.color = color;
    this.machine = machine;
    this._chasissNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
  }

  //? Getter
  get chasissNumber() {
    return this._chasissNumber;
  }

  //? Setter
  set chasissNumber(chasissNumber) {
    console.log('Anda tidak dapat merubah nilai property chassis Number!');
  }
}

const carTwo1 = new CarTwo('Mobilio', 'Red', 'Honda');
carTwo1.chasissNumber = 'Ubah No Chasis ke-1'; //? Kalau ini manggil setter chasissNumber() nya

const carTwo2 = new CarTwo('Avanza', 'White', 'Toyota');
carTwo2._chasissNumber = 'Saya ubah'; //? Panggil _chasisNumbernya kalau paksa diubah
console.log(carTwo2);

console.log(carTwo1);
console.log(carTwo1.chasissNumber);

console.log('===============================================');

//! METHOD
//? Method adalah sebuah fungsi yang berada di dalam sebuah class dan dapat diakses melalui instance Class tersebut.

class CarThree {
  constructor(brand, color, machine) {
    this.brand = brand;
    this.color = color;
    this.machine = machine;
    this._chasisNumber = this._generateChasisNumber();
  }

  get chasisNumber() {
    return this._chasisNumber;
  }

  set chasisNumber(chasisNumber) {
    console.log('Anda tidak diizinkan untuk merubah nomor chasis nya');
  }

  //? Method
  maju() {
    console.log(`Mobil ${this.brand} Maju Kedepan`);
  }

  mundur() {
    console.log(`Mobil ${this.brand} Mundur`);
  }

  belok(arah) {
    console.log(`Mobil ${this.brand} belok ke arah ${arah}`);
  }

  _generateChasisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000) + 1}`;
  }
}

//? Kita buat objeknya
const carThree1 = new CarThree('Fortuner', 'White', 'Toyota');
carThree1.belok('Kanan');
carThree1.chasisNumber = '1'; //? Ini kita TIDAK bisa ubah datanya karena yg kita panggil itu SETTER Chasisnumber()
carThree1._chasisNumber = '1'; //? Ini BISA kita ubah datanya karena yg kita panggil langsung property _chasisNumber ya

console.log(carThree1);
