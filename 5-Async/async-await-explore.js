function getUsers() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      const users = [
        { id: 1, fullName: 'M. Iqbal' },
        { id: 2, fullName: 'Naisa Alifia Yuriza' },
        { id: 3, fullName: 'Nasywa Fadhilla' },
      ];

      resolve(users);
    }, 1000);
  });
}

async function displayUsers() {
  try {
    console.log('Mengambil data user');
    const users = await getUsers();
    console.log(`Data Pengguna:`, users);
    console.log('Menampilkan data pengguna!');
    users.forEach((user) => {
      console.log(`Id: ${user.id} FullName: ${user.fullName}`);
    });
  } catch (error) {
    console.log(`Terjadi kesalahan ${error}`);
  }
}

displayUsers();
