let hasil = 0;

for (let i = 0; i <= 20; i++) {
  if (i % 5 == 0) {
    console.log(i);
    hasil += i;
  }
}

console.log('Totalnya adalah: ' + hasil);
