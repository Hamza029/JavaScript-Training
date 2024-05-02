////////////////////////////// synchronous
// console.log('I');
// console.log('eat');
// console.log('Ice Cream');

/////////////////////////////// asynchronous
// console.log('I');

// setTimeout(() => {
//   console.log('eat');
// }, 2000);

// console.log('Ice cream');

///////////////////////////////// callback

// const one = () => {
//   console.log('step 1');
// };

// const two = () => {
//   console.log('step 2');
// };

// one();
// two();

////

// const one = (call_two) => {
//   call_two();
//   console.log('step 1 complete. please call step 2');
// };

// const two = () => {
//   console.log('step 2');
// };

// one(two);

//////////////////////////////// ice cream project (callback)

// let stocks = {
//   fruits: ['strawberry', 'grapes', 'banana', 'apple'],
//   liquid: ['water', 'ice'],
//   holder: ['cone', 'cup', 'stick'],
//   toppings: ['chocolate', 'peanuts'],
// };

// let order = (fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.fruits[fruit_name]} was selected`);

//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log('production has started');

//     setTimeout(() => {
//       console.log('the fruit has been choped');

//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//         setTimeout(() => {
//           console.log('the machine was started');

//           setTimeout(() => {
//             console.log(`ice cream was placed on ${stocks.holder[0]}`);

//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} was added as toppings`);

//               setTimeout(() => {
//                 console.log('serve ice cream');
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0);
// };

// order(0, production);

////////////////////////////////////// ice cream project (promise)

// let stocks = {
//   fruits: ['strawberry', 'grapes', 'banana', 'apple'],
//   liquid: ['water', 'ice'],
//   holder: ['cone', 'cup', 'stick'],
//   toppings: ['chocolate', 'peanuts'],
// };

// let is_shop_open = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log('our shop is closed'));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
//   .then(() => {
//     return order(0, () => {
//       console.log('production has started');
//     });
//   })
//   .then(() => {
//     return order(2000, () => console.log('the fruit was choped'));
//   })
//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
//     );
//   })
//   .then(() => {
//     return order(1000, () => console.log('start the machine'));
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log(`ice cream placed on ${stocks.holder[0]}`);
//     });
//   })
//   .then(() => {
//     return order(3000, () => console.log(`${stocks.toppings[0]} was selected`));
//   })
//   .then(() => {
//     return order(1000, () => console.log('ice cream was served'));
//   })
//   .catch(() => {
//     console.log('customer left');
//   })
//   .finally(() => {
//     console.log('day ended, our shop is closed');
//   });

///////////////////////////////////// ice cream project (async-await)

// const stocks = {
//   fruits: ['strawberry', 'grapes', 'banana', 'apple'],
//   liquid: ['water', 'ice'],
//   holder: ['cone', 'cup', 'stick'],
//   toppings: ['chocolate', 'peanuts'],
// };

// const order = async () => {
//   try {
//     await abc;
//   } catch (error) {
//     console.log("abc doesn't exist", error);
//   } finally {
//     console.log('runs code anyways');
//   }
// };

// order().then(() => {
//   console.log('inside then');
// });

//// await example

// let is_shop_open = true;

// const toppings_choice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log('which toppings would you love?'));
//     }, 3000);
//   });
// };

// const kitchen = async () => {
//   console.log('A');
//   console.log('B');
//   console.log('C');

//   await toppings_choice();

//   console.log('D');
//   console.log('E');
// };

// kitchen();

// console.log('cleaning the dishes');
// console.log('cleaning the tables');
// console.log('taking others orders');

//// ice ceram project

// let is_shop_open = true;

// const time = async (ms) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(resolve, ms);
//     } else {
//       reject(console.log('shop is closed'));
//     }
//   });
// };

// const kitchen = async () => {
//   try {
//     await time(2000);
//     console.log(`${stocks.fruits[0]} was selected`);

//     await time(0);
//     console.log('start the production');

//     await time(2000);
//     console.log('cut the fruit');

//     await time(1000);
//     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//     await time(1000);
//     console.log('start the machine');

//     await time(2000);
//     console.log(`ice cream placed on ${stocks.holder[0]}`);

//     await time(3000);
//     console.log(`${stocks.toppings[0]} was selected`);

//     await time(2000);
//     console.log('serve ice cream');
//   } catch (error) {
//     console.log('customer left', error);
//   } finally {
//     console.log('day ended, shop is closed');
//   }
// };

// kitchen();

// async use korlei ta promise object hoye jay

const fn = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('fn is resolved');
    }, 1000);
  });
};

// console.dir(fn());

const fn1 = async () => {
  try {
    const x = await fn();
    console.log(x);
    console.log('after fn');
  } catch (error) {
    console.log('error');
  } finally {
    console.log('finally');
  }
};

fn1();

console.log('after await');
