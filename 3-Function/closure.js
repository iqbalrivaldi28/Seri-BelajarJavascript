//* Closure adalah dimana kita buat function didalam function,
//* kemudian function didalamnya bisa akses variabel yg ada di parent function

//! Contoh 1
function init() {
  const name = 'Naisa'; //? Variabel lokal di dalam scope fungsi init

  //? Inner function(fungsi didalam fungsi), merupakan contoh closure
  function greet() {
    console.log(`Hai, salam kenal ${name}`); //? Memanggil variabel yang dideklarasikan di parent function
  }

  greet();
}

init();

console.log();

//! Contoh 2
function toyota() {
  const name = 'Fortuner';

  function myCar() {
    console.log(`Mobil saya adalah ${name}`);
  }

  return myCar; //? Closure pake Return disini
}

const car = toyota();
car();

console.log();

//! Contoh 3
let counter = 0;

const add = () => {
  return ++counter;
};

console.log(add());
console.log(add());
counter = 23; //? Ini nilainya masih bisa diubah
console.log(add());

console.log();

//? Kemudian kita ubah dengan Closure jadi gini
const addTwo = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
};

const addCounter = addTwo();

console.log(addCounter());
console.log(addCounter());
// addCounter = 50; //? Kalau kita ganti valuenya akan error
console.log(addCounter());

console.log();

//! Contoh 4 Closure
function createAdder(value) {
  const owner = 'Iqbal';

  function add(param) {
    console.log(owner);

    return value + param;
  }

  return add;
}

const addThree = createAdder(2);
console.log(addThree(10));
console.log(addThree(20));
console.log(addThree(34));
