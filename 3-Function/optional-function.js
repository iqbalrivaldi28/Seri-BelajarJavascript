//* Secara default, parameter di function itu optional
//* Artinya kita tidak wajib mengisi value nya ketika memanggil function
//* Jika ngak kita isi parameternya nilainya otomatis default

//! Contoh 1
function people(firstName, middleName, Lastname) {
  console.log(`${firstName}, ${Lastname}`);
}

people('Nasywa', '', 'Fadhilah');
