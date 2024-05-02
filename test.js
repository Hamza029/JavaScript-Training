// const fn = function () {
//   console.log(typeof arguments);
//   console.log(arguments[0], arguments[1]);
// };

// fn('a', 100);

// var heroName = 'xyz';

// class Hero {
//   constructor(heroName) {
//     this.heroName = heroName;
//   }

//   logName() {
//     console.log(this.heroName);
//   }

//   logNameA = () => {
//     console.log(this.heroName + ' from arrow function');
//   };
// }

// const batman = new Hero('Batman');

// setTimeout(batman.logName, 1000);
// console.log(this.heroName);

// console.log('after set time out');

// setTimeout(batman.logNameA, 2000);

// console.log('after set time out arrow function');

// const fna = (x, ...a) => {
//   console.log(x);
//   console.log(a);
// };

// fna(10, 20, 30, 40, 50);

var a = 20;
let b = 30;

const obj1 = {
  a: 10,
  x: function () {
    console.log(this, this.a, arguments, window.a, window.b);
  },
};

const obj2 = {
  a: 10,
  x: () => {
    console.log(this, this.a);
  },
};

obj1.x();
obj2.x();
