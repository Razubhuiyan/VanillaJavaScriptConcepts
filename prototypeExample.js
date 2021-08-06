function Car(brand, model) {
    this.brand = brand;
    this.model = model;
};

Car.prototype = {
    color() {
        console.log(`Color is mat black!`);
    },

    speed() {
        console.log(`Max speed is 300km per hour!`);
    },
};

let car = new Car("Audi", 2020);
car.color();