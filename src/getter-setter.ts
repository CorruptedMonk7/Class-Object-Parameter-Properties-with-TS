class Clock {
    name: string;
    color: string;
    private _price: number;
    constructor(name: string, color: string, _price: number) {
        this.name = name
        this.color = color
        this._price = _price
    }
    changePrice(): number {
        return this._price
    }
    get balance(): number {
        return this._price
    }
    set newBalance(amount: number) {
        this._price = this._price + amount
    }

}
class NewClock extends Clock {
    test() {

    }
}
const myClock = new Clock("Casio", "White", 5000)
console.log(myClock.balance)
myClock.newBalance = 500;
console.log(myClock.balance)
