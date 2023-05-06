class Bank {
    name: string;
    private accNumber: number;
    protected _balance: number;
    constructor(name: string, accNumber: number, balance: number) {
        this.name = name
        this.accNumber = accNumber
        this._balance = balance
    }
    addBalance(amount: number) {
        this._balance = this._balance + amount
    }
}
class othersAccount extends Bank {
    test() {
        this._balance
    }
}
const myAccount = new Bank("MD. Rayhan Uddin", 1675945975, 1086)
// myAccount.accNumber = 0 I can change the value if it is not private
console.log(myAccount)