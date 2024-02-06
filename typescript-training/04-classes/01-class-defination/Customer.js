var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("Binit", "Shrestha");
// myCustomer.firstName="Binit";
// myCustomer.lastName="Shrestha";
console.log("firstname " + myCustomer.firstName);
console.log("lastname " + myCustomer.lastName);
