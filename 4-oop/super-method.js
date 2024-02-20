//* Super method digunakan untuk mengakses method (function) yg ada di parent

class Shape {
  paint() {
    console.log('Paint Shape');
  }
}

class Circle extends Shape {
  paint() {
    super.paint(); //? memanggil paint() method parent class
    console.log('Paint Circle');
  }
}

const objectCircle = new Circle();
objectCircle.paint();
