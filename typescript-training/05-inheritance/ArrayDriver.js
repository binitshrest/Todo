"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Reactangle_1 = require("./Reactangle");
let myShape = new Shape_1.Shape(10, 15);
// console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(5, 10, 20);
// console.log(myCircle.getInfo());
let myRectangle = new Reactangle_1.Rectangle(0, 0, 3, 7);
let theShapes = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}
