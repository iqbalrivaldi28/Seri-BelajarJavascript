//* Lexical Scope  adalah aturan di mana lingkup (scope) variabel ditentukan oleh posisi di dalam kode sumber, yaitu pada waktu penulisan kode
//* Kita sering jumpai ini pada saat penerapan closure
//* Intinya lexical scope ini adalah dimana kita mengakses variabel yg ada pada parent didalam child function

//! Contoh Leixal Scope
function outer() {
  let outerVariabel = 'Saya di luar';

  function inner() {
    console.log(outerVariabel); //?Mengakses outerVariable dari lingkup luar (lexical scope)
  }

  inner();
}

outer(); //? Kita panggil

console.log();

//! Contoh Penerapan Closure
//? FYI lexical scope bagian dari closure

function outer() {
  let outerVariable = 'Saya di luar!';

  function inner() {
    console.log(outerVariable); //? Inner function memiliki akses selama eksekusi
  }

  return inner(); //? Kalau Closure pake Return Disini
}

outer();
