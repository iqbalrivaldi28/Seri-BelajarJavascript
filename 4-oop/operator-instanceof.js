//* Kadang ada kasus kita ingin mengecek apakah sebuah object merupakan instance dari class tertentu atau bukan
//* Kita tidak bisa menggunakan operator typeof, karena object dari class, jika kita gunakan operator typeof, hasilnya adalah “object”
//* Operator instanceof akan menghasilkan boolean, true jika benar object tersebut adalah instance object nya, atau false jika bukan

//! Contoh Penerapannya
class Employee {}

class Manager {}

const ical = new Employee();
const iqbal = new Manager();

console.log(ical instanceof Employee); //? True karena ical object class employee
console.log(ical instanceof Manager); //? False

console.log(iqbal instanceof Employee); //? False karena iqbal bukan object class employee
console.log(iqbal instanceof Manager); //? True

console.log();

//! Conoth Penerapan pada Inheritance
//* Operator instanceof mendukung class inheritance, artinya instanceof juga bisa digunakan untuk mengecek,
//* apakah sebuah object adalah instance dari class tertentu, atau turunan dari class tertentu?

class Toyota {}

class Fortuner extends Toyota {}

const avanza = new Toyota();
const fortunerDiesel = new Fortuner();

console.log(avanza instanceof Toyota); //? True
console.log(avanza instanceof Fortuner); //? False

//? True semua karena Fortuner adalah turunan dari Toyota
console.log(fortunerDiesel instanceof Toyota);
console.log(fortunerDiesel instanceof Fortuner);
