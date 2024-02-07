import {Shape} from "./Shape";
import {Circle} from "./Circle";
import { Rectangle } from "./Reactangle";

let myShape = new Shape(10, 15);
// console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 20);
// console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 3, 7);

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
}
