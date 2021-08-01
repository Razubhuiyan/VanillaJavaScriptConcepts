var num2 = 100 // Global scope
var sum = function() {
    // Child scope/ parent of second child
    var num1 = 10;
    // here this num1 varibale is referenced in closures
    // because this variable accessed by another anonymous
    // function which was inside the sum function
    // If this num1 value was not accessed by anonymous function it will be in Global scope
    return function() {
        // Child scope
       return num1 + num2;
    }
}
var func = sum();
// this dir function give the overview of whole scenario
console.dir(func);
