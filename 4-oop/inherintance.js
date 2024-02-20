//* Pewarisan (Inheritance) pada konseop OOP Javascript
//* Keyword 'Extends' merupakan kuncu untuk mewarisi sifat SuperClass

//? Super Class (Parent)
class MailServices {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} send a ${message} to ${receiver}`);
  }
}

//? Sub Class (Child)
class WhatsAppService extends MailServices {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

class EmailAppServices extends MailServices {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}

//? Kita buat Objeknya
const whatsApp = new WhatsAppService('+11 (Nayswa)');
const emailApp = new EmailAppServices('naisa@gmail.com');

whatsApp.sendMessage('Hai naisa', '+10 (Naisa)'); //? Bisa pake method yg ada di SuperClass
whatsApp.sendBroadcastMessage('Belajar bareng yuk!', ['+10 (Naisa)', '+13 (Natasha)']); //? Method yag ada di Sub classnya

emailApp.sendMessage('Hai bang', 'ibang@gmail.com');
emailApp.sendDelayedMessage('Jemput aku yaa bang', 'ibang@gmail.com', 1000);
