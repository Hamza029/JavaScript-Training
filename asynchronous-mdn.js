// const fetchPromise = fetch(
//   'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
// );

// console.log(fetchPromise);

// fetchPromise
//   .then((response) => {
//     return Promise.reject({ name: 'hamza' });
//     throw new Error('test error');
//     console.log(`Received response: ${response.status}`);
//     console.dir(response);
//   })
//   .catch((x) => {
//     console.log(x);
//   });

// console.log('Started request…');

///////////////////////////////////////////

// const fetchPromise = fetch(
//   'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
// );

// fetchPromise
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].name);
//     const p = new Promise((resolve, reject) => {
//       resolve(1);
//     });
//     console.log(p);
//     return p;
//   })
//   .then((x) => {
//     console.log(x);
//   });

// const fetchPromise = fetch(
//   'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
// );

// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   console.log(jsonPromise);
//   jsonPromise.then((data) => {
//     console.log(data[0].name);
//   });
// });

// fetch(
//   'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0]);
//   });

////////////////////////////////////////////////

// const rej = () => {
//   return Promise.reject('rejected');
// };

// const fn = async () => {
//   console.log('inside fn');

//   try {
//     const response = await fetch(
//       'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.jso'
//     );
//     if (!response.ok) {
//       throw new Error('some error');
//     }
//   } catch (error) {
//     console.log(error);
//   }

// rej()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const  = await x;

// console.log(response);

// const prom1 = response.json();

// console.log(prom1);

// const res = await prom1;

// console.log(res);

// prom1.then((data) => {
//   console.log('from then', data);
// });
// };

// fn();

// console.log('hello');

// let x = 100;

// setTimeout(() => {
//   console.log('insde setTimeout');
// }, 3000);

// console.log('lol');

////////////////////////////////////////////
// catching errors

const fetchPromise = fetch(
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.jso'
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.log(`could not get products: ${error.message}`);
  });
