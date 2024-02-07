//let's create an instance
import {Customer} from "./Customer";

let myCustomer = new Customer("Binit", "Shrestha");
console.log(myCustomer.firstName + " " + myCustomer.lastName);
console.log("Binit changed to " , myCustomer.firstName = "Priya");
console.log(myCustomer.firstName + " " + myCustomer.lastName);
