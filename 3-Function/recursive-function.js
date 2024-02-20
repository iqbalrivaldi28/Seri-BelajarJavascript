//* Recursive Function adalah kemampuan function memanggil function dirinya sendiri

//! Contoh 1
function factorial(value) {
  let result = 1;
  for (let i = 1; i <= value; i++) {
    result *= i;
  }

  console.log(result);
}

factorial(4);

//! Contoh 2
function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}
