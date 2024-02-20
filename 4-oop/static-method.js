//* Kata kunci static juga tidak hanya bisa ditambahkan di field, tapi juga di method
//* Jika kita tambahkan di method, artinya method tersebut jadi milik class nya, bukan prototype
//* Dan untuk mengakses method tersebut, kita juga bisa lakukan seperti mengakses static class field

//! Contoh Penerapannya
class MathUtil {
  //? Static Methodnya
  static sum(...numbers) {
    let hasil = 0;

    for (let number of numbers) {
      hasil += number;
    }

    return hasil;
  }
}

//? Maksudnya ketika kita akses kelasnya, langsung bisa akses method dialamnya tanpa bauta objek

const sum = MathUtil.sum(1, 2, 3);
console.log(sum);

const object = new MathUtil();
object.sum(1, 2); //? Bakal Error karena static method tida bisa diakses di object
