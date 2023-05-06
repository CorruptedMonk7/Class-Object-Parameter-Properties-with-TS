class Person {
    takeNap(): void {
        console.log("He sleeps 8 hours a day")
    }
}
class Person2 extends Person {
    takeNap(): void {
        console.log("He sleeps 10 hours a day");
    }
}
class Person3 extends Person {
    takeNap(): void {
        console.log("He sleeps 4 hours in a day")
    }
}
function getNap(param: Person) {
    param.takeNap()
}
const rayhan = new Person()
const uddin = new Person2()
const tomal = new Person3()
getNap(rayhan)
getNap(uddin)
getNap(tomal)


