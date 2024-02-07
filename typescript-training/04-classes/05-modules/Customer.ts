export class Customer {
    constructor(private _firstName: string, private _lastName:string){ 
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

