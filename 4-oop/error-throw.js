//* Melempar Error

class MathUtil {
  static sum(...numbers) {
    if (numbers === 0) {
      throw new Error('Total parameter harus lebih dari 0');
    }

    let hasil = 0;
    for (let number of numbers) {
      hasil += number;
    }

    return hasil;
  }
}

//? Ketika kita masukan paremeter 0 maka errornya terlihat di console
console.log(MathUtil.sum());
console.log(MathUtil.sum(1, 2, 3));
