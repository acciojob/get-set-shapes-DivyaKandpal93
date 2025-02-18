class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side, side);
    }
    getPerimeter(){
        return 4 * this.width;
    }
}

const rect = new Rectangle(5,6);
console.log(rect.getArea());
const sq = new Square(4);
console.log(sq.getPerimeter());
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
