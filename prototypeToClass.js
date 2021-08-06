class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    };
    color() {
        console.log(`Color is Mat black!`);
    };
    speed() {
        console.log(`Max Speed is 300km per hour!`);
    };
}

let car = new Car("Bmw", 2016);
car.speed();