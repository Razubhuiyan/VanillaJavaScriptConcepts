// Counter Dilemma
// initiete counter
const counterFunc = (function add() {
    let counter = 0;
    return function() {
        return counter += 1;
    }
})();
counter = 3
//let myFunc = counterFunc();
console.dir(counterFunc)
console.log(counterFunc(), counterFunc(), counterFunc()); //invoking counter 3 times
