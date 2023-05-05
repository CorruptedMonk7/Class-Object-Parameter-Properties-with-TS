class Animal {
    // name: string;
    // color: string;
    // sound: string;
    constructor(public name: string, public color: string, public sound: string) {
        // this.name = name
        // this.color = color
        // this.sound = sound
    }
    //Method
    //Arrow function not allowed as it does not support this
    soundDetails() {
        console.log(`The ${this.name} creates ${this.sound} sound`)
    }
}
const cat = new Animal("Jenny", "white", "mew");
cat.soundDetails()