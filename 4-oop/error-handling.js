//* Kita bisa menggunakan try catch statement untuk menangkap error
//* Pada block try, kita akan mencoba mengakses kode program yang bisa menyebabkan error, dan jika terjadi error, block try akan berhenti dan otomatis masuk ke block catch
//* Jika tidak terjadi error, block catch tidak akan dieksekusi

//* Block finally ini akan selalu dieksekusi setelah try catch selesai, entah terjadi error atau tidak, block finally akan selalu dieksekusi

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

//? Menggunakan Try Cath

try {
  console.info(MathUtil.sum());
  console.info('Kode block Try akan berhenti');
} catch (error) {
  console.error(`Terjadi Error: ${error.message}`);
} finally {
  console.info('Kode program selesai!!');
}
