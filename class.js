class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Bread extends Dog {
    
    constructor(name, age, type, country) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }

    bark() {
        console.log(`${this.name} is barking woof woof!`);
    }
}

let dog = new Bread("booldog", 3, "German sheperd", "Germany");
dog.bark();
console.log(dog.type);
console.dir(dog)