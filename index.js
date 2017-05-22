const app = "I don't do much."

function Rectangle(sides, width, height) {
  this.sides = sides;
  this.width = width;
  this.height = height;
}
  Rectangle.prototype.area = function() {
  return this.width * this.height;
}
  Rectangle.prototype.perimeter = function () {
  return (this.width + this.height) * 2;
}

function Square(sides, length) {
  this.sides = sides;
  this.width = length;
  this.height = length;
  this.area = function() {
    return this.width * this.height;
  },
  this.perimeter = function() {
    return (this.width + this.height) * 2;
  }
}

var rect = new Rectangle(4, 3, 5);
var square = new Square(4, 2);
