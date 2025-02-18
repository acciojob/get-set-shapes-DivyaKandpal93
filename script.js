class Rectangle{
    constructor(Rwidth, Rheight){
this.Rheight = Rheight;
this.Rwidth = Rwidth;
    }
    get width(){
        return this.Rwidth;
    }
    get height(){
        return this.Rheight;
    }
    getArea(){

        return this.width*this.height;
    }
    set width(newW){
        this.Rwidth = newW;
    }
    set height(newH){
        this.Rheight = newH;
    }
}

class square extends Rectangle{
    constructor(side){
        super(side, side);

    }
    

    getperimeter(){
return 4*this.width;
    }
}

const rect = new Rectangle(5,6);
console.log(rect.getArea());
const sq = new square(4);
console.log(sq.getperimeter());
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
