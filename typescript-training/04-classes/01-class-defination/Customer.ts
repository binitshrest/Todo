class Customer {
    firstName:string;
    lastName: string;
    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("Binit", "Shrestha");
// myCustomer.firstName="Binit";
// myCustomer.lastName="Shrestha";
console.log("firstname " + myCustomer.firstName);
console.log("lastname " + myCustomer.lastName); 