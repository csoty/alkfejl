"user strict";

const cim = {
    varos: 'Budapest',
    utca: "Pármány péter sétány",
    hazszam: `1/c`,
    toString(){
        return `${this.varos}, ${this.utca}`;
    }
};
cim.iranyitoszam = '1117';
console.log(cim);
console.log(cim.toString());

class Point{
    constructor(x, y){
        this._x = x;
        this._y = y;
    }
    setX(value){
        this._x = value;
    }
    set x(val){
        this._x = val;
    }
    get x() {
        return this._x;
    }
}
class Circle extends Point {
    constructor(x, y, r) {
        super(x, y);
        this._r = r;
    }
}

const p1 = new Point(10, 20);
const c1 = new Circle(20, 30, 40);
console.log(p1);
console.log(c1);