class Product {
    name: string;
    price: number;
    color: string;

    constructor(name: string, price: number, color: string) {
        this.name = name
        this.price = price
        this.color = color
    }
    productPrice(year: number): string {
        return (`The ${this.name} car price is ${this.price} which is made in ${year}`)
    }

}
class Car extends Product {
    // name: string;
    // price: number;
    // color: string;

    constructor(name: string, price: number, color: string) {
        super(name, price, color)
        // this.name = name
        // this.price = price
        // this.color = color
    }
    // productPrice(year: number): string {
    //     return (`The ${this.name} car price is ${this.price} which is made in ${year}`)
    // }
}
const BMW = new Car("BMW", 5000000, "Black")
BMW.productPrice(2020)


class Ship {
    name: string;
    price: number;
    color: string;
    property: string;
    constructor(name: string, price: number, color: string, property: string) {
        this.name = name
        this.price = price
        this.color = color
        this.property = property
    }
    productPrice(year: number): string {
        return (`This ${this.name} price is ${this.price} made in ${year}`)
    }
    shipProperty(place: string): string {
        return (`This ship can do ${this.property} on the ${place}`)
    }
}
