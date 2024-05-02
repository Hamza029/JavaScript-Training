// const num1 = 10;

// const sum = () => {
//   const num2 = 20;

//   return () => {
//     return num1 + num2;
//   };
// };

// const myFunc = sum();

// console.dir(myFunc);

///////////////////////////////////////////////

// var num1 = 2;

// var sum = () => {
//   var num2 = 3;
//   var num3 = 6;

//   return () => {
//     return num1 + num3;
//   };
// };

// var myFunc = sum();

// console.dir(myFunc);

//////////////////////////////////////////// inside enclosing scope

// (() => {
//   var num1 = 2;

//   var sum = () => {
//     var num2 = 3;
//     return num1 + num2;
//   };

//   console.dir(sum);
// })();

/////////////////////////////////////////////////////////////
// closure doesn't keep the value, it keeps the variables' references

// (() => {
//   let num1 = 2;
//   let num2 = 3;

//   const sum = () => {
//     return num1 + num2;
//   };

//   console.log(sum());
//   console.dir(sum);

//   num1 = 6;
//   num2 = 7;

//   console.log(sum());
//   console.dir(sum);
// })();

////////////////////////////////////////////////////////////
// var vs let in closure
// let is in block scope that's why its in script scope instead of global

// let num1 = 2;
// let num2 = 3;

// const sum = () => {
//   return num1 + num2;
// };

// console.dir(sum);

///////////////////////////////////////////////////////

// const stopWatch = () => {
//   let startTime = Date.now();

//   const getDelay = () => {
//     console.log(Date.now() - startTime);
//   };

//   return getDelay;
// };

// var timer = stopWatch();

// console.dir(timer);
// timer();

// for (let i = 0; i < 100000000; i++) {
//   let a = Math.random() * 10000000;
// }

// console.dir(timer);
// timer();

// // once we know that timer function won't be used anymore we should make it null for garbage collecion for optimization. because in large projects there may be many references like this which may slow the program and require optimization
// timer = null;

/////////////////////////////////////////////

// (() => {
//   let a = 30;

//   const asyncFn = () => {
//     a = 20;

//     const myFn = () => {
//       console.log(a);
//     };

//     setTimeout(myFn, 3000);

//     console.dir(myFn);
//   };

//   asyncFn();

//   a = 30;
// })();

/////////////////////////////////////////////////////

// const apiFunction = (url) => {
//   fetch(url)
//     .then((res) => {
//       console.log(res);
//       console.log(url);
//       // here we have access to url due to closure
//       const fn = () => {};
//       console.dir(fn);
//       return () => {};
//     })
//     .then((fn) => {
//       console.log(url);
//       console.dir(fn);
//     });
// };

// apiFunction('https://jsonplaceholder.typicode.com/todos/1');

//////////////////////////////////////////

// for (let i = 0; i < 3; i++) {
//   const fn = () => {
//     console.log(i);
//   };

//   fn();
// }

////

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 3000);
// }

// console.log('after for loop');

////

// for (let i = 0; i < 3; i++) {
//   const myFn = () => {
//     console.log(i);
//   };

//   console.log(i);
//   console.dir(myFn);
//   setTimeout(myFn, 3000);
// }

// console.log('after for loop');

////

for (var i = 0; i < 3; i++) {
  const myFn = () => {
    console.log(i);
  };

  console.log(i);
  console.dir(myFn);
  setTimeout(myFn, 3000);
}
