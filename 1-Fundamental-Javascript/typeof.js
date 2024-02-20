//* Operator TypeOf untuk mengecek tipe data

let data = 10;

if (typeof data === 'number') {
  console.log('Tipe datanya Number');
} else if (typeof data === 'string') {
  console.log('Tipe datanya String');
} else if (typeof data === 'boolean') {
  console.log('Tipe datanya Boolean');
} else {
  console.log('Bukan semuanya');
}
