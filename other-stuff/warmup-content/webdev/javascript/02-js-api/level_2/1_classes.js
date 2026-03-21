// classes assignment
class Animal {
    constructor(name, legsCount, sound) {
        (this.name = name), (this.legsCount = legsCount), (this.sound = sound);
    }
    speak() {
        console.log(this.sound);
    }
    static myName() {
        return "Animal";
    }
}

let a1 = new Animal("Dog", 4, "Bhow Bhow");
a1.speak();

console.log(Animal.myName());
