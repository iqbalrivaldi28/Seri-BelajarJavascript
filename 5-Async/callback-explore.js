//! Contoh penerapan Callback
function getData(callback) {
  setTimeout(() => {
    callback('Data diterima');
  }, 2000);
}

function processData(data) {
  console.log(data);
}

getData(processData);
