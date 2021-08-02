function Person(name, age) {
  //let person = Object.create(Person.prototype);
  // this is the you dont have to create object like that javascript will do it for you. just simply use this keyword it will do the same job as before

  this.name = name;
  this.age = age;

  //return person;
};

Person.prototype = {
    eat() {
        console.log("Person is eating");
      },
    
    sleep() {
        console.log("Person Sleeping");
    },
    play() {
        console.log("person is playing");
    },

};

let sakib = new Person("sakib", 35);
// new keyword gives tha extra benefits to programmer
sakib.play();
let tamim = new Person("Tamim", 36);
tamim.eat();