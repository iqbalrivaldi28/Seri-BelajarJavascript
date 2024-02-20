//* Belajar Destrcuturing nilai object yang nested (bersarang)

//! Contoh penerapannya pada Object

const person = {
  firstName: 'Naisa',
  lastName: 'Putri',
  address: {
    street: 'Jalan Sukses Jaya Makmur',
    city: 'Jakarta',
    country: 'Indonesia',
  },
  hobby: 'Membaca',
  age: 17,
};

//? Jika argument pada object nested (bersarang), gini cara ambil datanya
const {
  firstName,
  lastName,
  address: { street, city, country },
  hobby,
  age,
} = person;

console.log(street);
console.log(city);
console.log(country);
