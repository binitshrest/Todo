"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//let's create an instance
var Customer_1 = require("./Customer");
var myCustomer = new Customer_1.Customer("Binit", "Shrestha");
console.log(myCustomer.firstName + " " + myCustomer.lastName);
console.log("Binit changed to ", myCustomer.firstName = "Priya");
console.log(myCustomer.firstName + " " + myCustomer.lastName);
