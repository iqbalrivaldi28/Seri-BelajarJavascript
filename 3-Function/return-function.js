//* Digunakan untuk mengembalikan nilai dalam function

//! Contoh 1
function isCointains(array, serachValue) {
  for (const elemen of array) {
    if (elemen === serachValue) {
      return `Nilai = ${serachValue} ada dalam arraynya (True)`;
    }
  }
  return 'Nilai tidak ada dalam array (False)';
}

//? Bisa gini juga manggil functionya
console.info(isCointains([1, 2, 3, 4, 5, 6, 7], 2));

console.log();

//! Contoh 2
function fruits(nameArray, searchFruit) {
  let elemenFruit;

  for (elemenFruit of nameArray) {
    if (elemenFruit === searchFruit) {
      console.log(`Buah: ${elemenFruit} ada dalah Array Buah`);
    }
  }
  console.log(`Buah ${elemenFruit} tidak ada dalam array`);
}

fruits(['Mangga', 'Semangka', 'Jeruk', 'Anggur', 'Melon'], 'Buah Naga');

console.log();

//! Contoh 3

function country(arrayData, searchCountry) {
  for (let negara of arrayData) {
    if (negara === searchCountry) {
      return `Negara ${negara} ada dalan data`;
    }
  }
  return `negara Tidak ada dalam data`;
}

console.info(country(['Indonesia', 'Arab', 'Malayia'], 'Arab'));
