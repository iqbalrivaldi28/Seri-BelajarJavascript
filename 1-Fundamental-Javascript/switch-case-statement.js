//! Contoh Satu

let language = 'indonesia';

switch (language) {
  case 'malaysia':
    console.log('Apa Khabar!');
    break;
  case 'inggris':
    console.log('How Are You!');
    break;
  case 'indonesia':
    console.log('Apa Kabar!');
    break;
  default:
    console.log('Ini nilai default');
}

//! Contoh Dua
let name = 'Naisa';
let message = null;

switch (name) {
  case 'Naisa':
    message = 'Kamu cantik!';
    break;
  case 'Raisa':
    message = 'Kamu manis!';
    break;
  case 'Nasywa':
    message = 'Kamu imut!';
    break;
  default:
    message = 'Upps nilai defaul!';
}

console.log(message);
