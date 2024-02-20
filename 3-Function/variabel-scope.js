//* Variabel Scope adalah cakupan luas variabel dapat diakses
//* “globally scoped" (Variabel dapat diakses dari mana saja)
//* “locally scoped” (Variabel dapat diakses dari fungsi tertentu saja)

//! Contoh 1 (Gambaran Variabel Scope)

let number = 1; //? Global Scope dapat diakses dimana saja

function parent() {
  let angkaSatu = 1; //? local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.

  function child() {
    let angkaDua = 2; //? local variable, dapat diakses hanya pada fungsi child().
  }
}

//! Contoh 2 (Eksplorasi Variabel Scope)
let hasil = 0;

function funParent() {
  let angkaSatu = 20;

  function funChild() {
    let angkaDua = 50;

    hasil = angkaSatu + angkaDua;
    console.log(hasil);
  }

  return funChild();
}

const penjumlahan = funParent();
console.log(penjumlahan);
