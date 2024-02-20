//* Callback adalah salah satu cara handling asynchronous di Javascript
//* Callback ketika kita panggil itu berupa dimana argumennya berupa function

//! Contoh 1
function getUsers(callback) {
  setTimeout(() => {
    const user = ['Naisa', 'Nasywa', 'Natasha'];
    callback(user);
  }, 3000);
}

//? Cara manggilnya adalah argument/parameter function getUser adalah sebuah function
getUsers((dataUser) => {
  console.log(dataUser);

  //? Belajar destructuring datanya dan ngambil data user satu
  const [userSatu, userDua, userTifa] = dataUser;
  console.log(userSatu);
});
