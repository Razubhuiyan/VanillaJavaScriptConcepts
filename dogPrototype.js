function Dog(name, age) {
    this.name = name;
    this.age = age;
};

function Bread(name, age, type, country) {
    Dog.call(this);
    this.name = name;
    this.country = country;
    this.type = type;
    this.country = country;
}

Dog.prototype = {
    eat() {
        console.log(`${this.name} is eating`);
    },
    speak() {
        console.log(`Woof woof!`);
    }
};

Bread.prototype = Object.create(Dog.prototype);
Bread.prototype.constructor = Bread;
Bread.prototype.paly = function() {
    console.log(`${this.name} is playing`);
}
let bool = new Bread("booldog", 3, "German Shepard", "Germany");
bool.speak();
bool.paly();