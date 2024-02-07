class Customer {
    private _firstName:string;
    private _lastName:string;

    constructor(theFirst:string, theLast:string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName():string{ //getter 
        return this._firstName;
    }
    public set firstName(value:string){ //setter
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(theLast:string){
        this._lastName = theLast;
    }

}

let myCustomer = new Customer("Binit", "Shrestha");
console.log(myCustomer.firstName + " " + myCustomer.lastName);
console.log("Binit changed to " , myCustomer.firstName = "Priya");
console.log(myCustomer.firstName + " " + myCustomer.lastName);
 