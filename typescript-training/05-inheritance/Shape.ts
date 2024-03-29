export class Shape{
   
    constructor(private _x:number, private _y:number){
    }

    public get x():number {
        return this._x;
    }

    public set x(theX: number) {
        this._x = theX;
    }

    public get y():number{
        return this._y;
    }
    public set y(theY: number){
        this._y = theY;
    }

    getInfo():string {
        return `x=${this._x}, y=${this._y}`;
    }

}