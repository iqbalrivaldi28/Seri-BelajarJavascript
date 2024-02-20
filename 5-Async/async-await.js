async function getData() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve('Data diterima');
    }, 2000);
  });
}

async function fetchData() {
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
