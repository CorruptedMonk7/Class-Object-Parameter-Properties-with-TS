class Bank {
    name: string;
    accNumber: number;
    private _balance: number;
    constructor(name: string, accNumber: number, balance: number) {
        this.name = name
        this.accNumber = accNumber
        this._balance = balance
    }
}
const myAccount = new Bank("MD. Rayhan Uddin", 1675945975, 1086)
// myAccount.accNumber = 0 I can change the value if it is not private
console.log(myAccount)