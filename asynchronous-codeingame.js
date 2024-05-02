// setTimeout(() => {
//   console.log('I am an asynchronous message');
// }, 0);

// console.log('Test 1');

// for (let i = 0; i < 100000000; i++) {
//   doSomeStuff();
// }

// console.log('Test 2');

// function doSomeStuff() {
//   return 1 + 1;
// }

////////////////////////////////////////////////////////////

// let counter = 0;

// let timer = setInterval(() => {
//   console.log('I am an asynchronous message');
//   counter++;
//   if (counter >= 5) {
//     clearInterval(timer);
//   }
// }, 1000);

// console.log('I am a synchronous message');

/////////////////////////////////////////////////

// function job1(callback) {
//   setTimeout(function () {
//     callback('test 1');
//   }, 2000);
// }

// function job2(callback) {
//   setTimeout(function () {
//     callback('test 2');
//   }, 4000);
// }

// job1(function (data) {
//   console.log(data);

//   job2(function (data) {
//     console.log(data);
//   });
// });

/////////////////////////////////////////////////////////

// var promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve('hello world');
//   }, 2000);
// });

// promise
//   .then(function (data) {
//     console.log(data + ' 1');
//     return 'hello world';
//   })
//   .then(function (data) {
//     setTimeout(() => {
//       console.log(data + ' 2');
//     }, 2000);
//     console.log('hi');
//   });

// promise
//   .then(function (data) {
//     console.log(data + ' 3');
//     return 'hello world';
//   })
//   .then((data) => {
//     setTimeout(() => {
//       console.log(data + ' 4');
//     }, 3000);
//   });

///////////////////////////////////////////////////////////

// const prom = new Promise((resolve, reject) => {
//   resolve('hello ');
// });

// const f1 = async () => {
//   const x = await prom;
//   console.log(x + 1);

//   setTimeout(async () => {
//     const y = await prom;
//     console.log(y + 2);
//   }, 2000);

//   // const y = await prom;
//   // console.log(y + 2);
// };

// const f2 = async () => {
//   const x = await prom;
//   console.log(x + 3);

//   const y = await prom;
//   console.log(y + 4);
// };

// f1();
// f2();

/////////////////////////////////////

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('hello');
//   }, 2000);
// });

// promise
//   .then((data) => {
//     console.log(data + ' 1');
//     return 'from hello 1';
//   })
//   .then((data) => {
//     console.log(data);
//   });

// promise.then((data) => {
//   console.log(data + ' 2');
// });

// promise.then((data) => {
//   console.log(data + ' 3');
// });

////

// const getVal = async () => {
//   const val = await promise;
//   console.log(val);
//   return val;
// };

// getVal().then((data) => {
//   console.log(data + ' from async function');
// });

/////////////////////////////////////////////////

// const prom = new Promise((resolve, reject) => {
//   reject('hello ');
// });

// prom
//   .then(
//     (data) => {
//       console.log(data + 1);
//     },
//     (data) => {
//       console.log(data + 2);
//       return Promise.resolve('hi');
//     }
//   )
//   .then((data) => {
//     console.log(data);
//   });

// prom
//   .then((data) => {
//     console.log(data);
//     return Promise.reject('error found');
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//////////////////////////////////////////////////

// var promise = job1();

// promise

//   .then(function (data1) {
//     console.log('data1', data1);
//     return job2();
//   })

//   .then(function (data2) {
//     console.log('data2', data2);
//     return 'Hello world';
//   })

//   .then(function (data3) {
//     console.log('data3', data3);
//   });

// function job1() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve('result of job 1');
//     }, 1000);
//   });
// }

// function job2() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve('result of job 2');
//     }, 1000);
//   });
// }

////////////////////////////////////////

// const prom1 = new Promise((resolve, reject) => {
//   resolve('from prom1');
//   reject('rejected prom1');
// });

// const prom2 = new Promise((resolve, reject) => {
//   resolve(prom1);
// });

// (async () => {
//   try {
//     const val = await prom2;
//     console.log(`${val} in function`);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// const func = () => {
//   return prom1
//     .then((data) => {
//       console.log(data + ' in func');
//       return 1;
//     })
//     .then((data) => {
//       return 2;
//     });
// };

// let prom3 = func();

// prom3
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// console.log(func());

// const job = () => {
//   return new Promise((resolve, reject) => {
//     resolve('hi');
//   });
// };

// function test() {
//   let promise = job();

//   return new Promise(function (resolve, reject) {
//     promise.then(
//       function (data) {
//         // data = doSomething(data);
//         console.log('something');
//         resolve(data);
//       },
//       function (error) {
//         reject(error);
//       }
//     );
//   });
// }

// test();

// Promise(function (resolve, reject) {
//   promise.then(
//     function (data) {
//       // data = doSomething(data);
//       resolve(data);
//     },
//     function (error) {
//       reject(error);
//     }
//   );
// });

////

// const prom = new Promise((resolve, reject) => {
//   resolve('hi');
// });

// const doSomething = (data) => {
//   return data + ' 1';
// };

// const func = () => {
//   return prom.then((data) => {
//     return doSomething(data);
//   });
// };

// func().then((data) => {
//   console.log(data);
// });

//////////////////////////////////

// const prom = new Promise((resolve, reject) => {
//   reject('ok');
// });

// prom
//   .then(
//     (data) => {
//       console.log(data);
//       return Promise.reject('error from then');
//     },
//     (error) => {
//       console.log(error);
//       return Promise.reject('error from catch');
//     }
//   )
//   .catch((error) => {
//     console.log(error + ' in chain');
//     return Promise.resolve('from 2nd catch');
//   })
//   .then((data) => {
//     console.log(data);
//   });

// prom
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//     return;
//   })
//   .then(() => {
//     console.log('after catch');
//     return Promise.reject('err');
//   })
//   .catch((data) => {
//     console.log(data);
//   });

//////////////////////////////////////////////

// function job(delay) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log('Resolving', delay);
//       resolve('done ' + delay);
//     }, delay);
//   });
// }

// let promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

// promise.then(function (data) {
//   console.log('All done');
//   data.forEach(function (text) {
//     console.log(text);
//   });
// });

// const fn = (data1, data2) => {
//   console.log(data1 + data2);
//   // return data + ' 1';
// };

// setTimeout(fn, 1000, 'hi', ' world');

///////////////////////////////////////////////////////

// let p1 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 500, 'p1');
// });

// let p2 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 1000, 'p2');
// });

// let p3 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 1200, 'p3');
// });

// let p4 = new Promise(function (resolve, reject) {
//   setTimeout(reject, 300, 'p4');
// });

// let p5 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 800, 'p5');
// });

// let promise = Promise.all([
//   p1,
//   p2,
//   p3,
//   p4.catch(() => {
//     return 'hello';
//   }),
//   p5,
// ]);

// promise

//   .then(function (data) {
//     data.forEach(function (data) {
//       console.log(data);
//     });
//   })

//   .catch(function (error) {
//     console.error('error', error);
//   });

//////////////////////////////////////////

const id = setTimeout(() => {
  console.log('here');
}, 2000);

clearTimeout(id);
