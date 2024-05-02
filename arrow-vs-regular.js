/// ///////////////////// this

// const obj1 = {
//   fn: function () {
//     console.log(this);
//   },
// };

// const obj2 = {
//   fn: () => {
//     console.log(this);
//   },
// };

// obj1.fn();
// obj2.fn();

/// /////////////////////// constructor

// function Car1(color) {
//   this.color = color;
// }

// const redCar1 = new Car1("red");
// console.log(redCar1 instanceof Car1); // => true

// const Car2 = (color) => {
//   this.color = color;
// };

// const redCar2 = new Car2("red"); // TypeError: Car2 is not a constructor

/// ////////////////////////// arguments

// const fnr = function () {
//   console.log(arguments);
// };

// console.log(fnr("a", "b"));

// const fna = () => {
//   console.log(arguments);
// };

// // console.log(fna("a", "b")); // Uncaught ReferenceError: arguments is not defined

// const fna2 = (...args) => {
//   console.log(args);
// };

// console.log(fna2("a", "b"));

/// //////////////////////////////////// return

// const fn1 = function (a, b) {
//   a + b;
// };

// console.log(fn1(1, 2)); // returns undefined

// const fn2 = (a, b) => a + b;

// console.log(fn2(1, 2)); // returns 3

/// //////////////////////////////////////// methods

class Person {
    constructor(name) {
        this.name = name;
    }

    logName() {
        console.log(`${this.name} called from arrow function`);
    }

    logName2() {
        console.log(`${this.name} called from regular function`);
    }
}

const p = new Person('Hamza');

p.logName();
p.logName2();

setTimeout(p.logName, 1000);
setTimeout(p.logName2, 1000);
setTimeout(p.logName2.bind(p), 1000);
