// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
//     fullName: function() {
//         return this.firstName + ' ' + this.lastName;
//     }
// };

// console.log(person.fullName());

// creating new properties

// person = {
//     name: ["Bob", "Smith"],
//     age: 32,
// };

// person.age = 45;
// person["name"]["last"] = "Cratchit";

// person["eyes"] = "hazel";

// person.farewell = function () {
//   console.log("Bye everybody!");
// };

// person.test = 'hello';

// const myDataName = "height";
// const myDataValue = "1.75m";
// person[myDataName] = myDataValue;

// console.log(person);

////////////////////////////////// constructor

// function Person(name) {
//   const obj = {};
//   obj.name = name;
//   obj.introduceSelf = function () {
//     console.log(`Hi! I'm ${this.name}.`);
//   };
//   return obj;
// }

// const salva = Person("Salva");
// salva.introduceSelf();

// const frankie = new Person("Frankie");
// frankie.introduceSelf();



////////////////////////////////// prototype

const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid

console.log(myObject.toString());

console.log(Object.getPrototypeOf(myObject));
