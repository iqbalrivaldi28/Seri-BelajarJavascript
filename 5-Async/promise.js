function getData() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve('Data diterima');
    }, 2000);
  });
}

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
