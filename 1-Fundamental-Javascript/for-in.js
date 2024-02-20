//* For ini bisa kita gunakan untuk ambil data dalam Object

//! Contoh 1
const student = {
  firstName: 'Nasywa',
  lastName: 'Fadhillah',
  age: 22,
  gender: 'Female',
};

for (let dataStudent in student) {
  console.log(`${dataStudent} : ${student[dataStudent]}`);
}
