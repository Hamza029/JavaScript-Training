// const ar = [7, 1, 4, 'world', 'hello', 0, '0'];

/// ////////////////////// array iteration
// for(const val of ar) {
//     console.log(val);
// }

// for(let i = 0; i < ar.length; i++) {
//     console.log(ar[i]);
// }

// console.log(ar);

/// ///////////////////// sorting
// ar.sort();
// console.log(ar);

/// ////////////////////// Adding new element
// ar.push({name: 'Hamza', age: 24});
// console.log(ar);
// ar.sort();
// ar[ar.length] = 'lol';
// console.log(ar)

/// ///////////////////////////// creating arrays
// let ar2 = [2, 3];
// console.log(ar2); // out: [2, 3];

// ar2 = new Array(3, 4);
// console.log(ar2); // out: [3, 4];

// ar2 = new Array(4);
// console.log(ar2); // array with 3 undefined elements
// ar2[1] = 'test';
// console.log(ar2); // [ <1 empty item>, 'test', <2 empty item> ]

// ///////////////////////////// instance of
// console.log(ar instanceof Array, ar2 instanceof Array); // both true

/// /////////////////////// merging array
// const array1 = ["Cecilie", "Lone"];
// const array2 = ["Emil", "Tobias", "Linus"];
// const array3 = ["Robin", "Morgan"];

// const myChildren = array1.concat(array2, array3);
// console.log(myChildren);

// const ar1 = array1.concat('ab', 'cd');
// console.log(ar1);

/// ///////////////////////////// Slice
// array slice is similar to string slice

/// //////////////////////////// Splice
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");

// console.log(fruits); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

// // 2 -> position where the items will be inserted
// // 0 -> number of items to be removed
// // ('Lemon', 'Kiwi') -> new items to be added

// fruits.splice(1, 2, 'test');
// console.log(fruits);

// fruits.splice(1, 2);
// console.log(fruits);

/// ////////////////// toSplice
// keeps the original array unchanged

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(1, 2, 'test');

// console.log(months, spliced);

/// //////////////////// Flattening an array
// let ar = [[1, 2], [3, 4], [5, 6]];
// const ar1 = ar.flat();
// console.log(ar, ar1);

/// ////////////////////////////////// copy within
// const ar = [1, 2, 3, 4, 5, 6];
// ar.copyWithin(2, 3, 6);

// console.log(ar);

/// ///////////////////////////////////// indexOf, lastIndexOf, includes
// const ar = [10, 20, 30, 30, 40, 30];

// console.log(ar.indexOf(30));
// console.log(ar.lastIndexOf(30));
// console.log(ar.includes(20), ar.includes(20, 2));

/// ///////////////////////////////////// findIndex, findLast, findLastIndex
// const ar = [4, 9, 16, 25, 29, 1];

// const fn = (value, index, array) => {
//     return value > 18;
// }

// console.log(ar.findIndex(fn));
// console.log(ar.findLast(x => x > 18));
// console.log(ar.findLastIndex(x => x > 18));

/// //////////////////////////////////////////// forEach
// const ar = [45, 4, 9, 16, 25];

// ar.forEach((x, index) => {
//     console.log(`${x} - ${index}`);
// });

/// /////////////////////////////////////////////// map
// const ar = [45, 4, 9, 16, 25];

// const ar2 = ar.map((val, idx) => {
//     return val * 2;
// });

// console.log(ar, ar2);

/// ///////////////////////////////////////////// filter

// const ar = [45, 4, 9, 16, 25];

// const ar2 = ar.filter((x, idx) => {
//     return x > 18;
// });

// console.log(ar, ar2);

/// /////////////////////////////////////////////// reduce

// const ar = [45, 4, 9, 16, 25];

// const ar2 = ar.reduce((total, x, idx) => {
//     console.log(`${idx} - ${x} - ${total}`);
//     return total + x;
// });

// console.log(ar, ar2);

// const ar3 = ar.reduceRight((total, x, idx) => {
//     console.log(`${idx} - ${x} - ${total}`);
//     return total + x;
// });

// console.log(ar, ar3);

/// ////////////////////////////////////////////// every, some

// const ar = [45, 4, 9, 16, 25];

// const chk1 = ar.every((x, idx) => x > 18);

// console.log(ar, chk1, ar.every((x, idx) => x < 50));

// const chk2 = ar.some((x, idx) => x > 18);

// console.log(ar, chk2);

/// //////////////////////////////////////////// Array.from

// const ar = Array.from('abcde');
// console.log(ar);

/// /////////////////////////////////////////////// array keys

// const ar = [45, 4, 9, 16, 25];

// const keys = ar.keys();

// for(const key of keys) {
//     console.log(key);
// }

// console.log(typeof keys);

/// ////////////////////////////////////////// array entries

// const ar = [45, 4, 9, 16, 25];

// const entries = ar.entries();

// for(const x of entries) {
//     console.log(x);
// }

// entries.forEach((x, idx) => {
//     console.log(x, idx);
// })

/// /////////////////////////////////////////// with

// const months = ["Januar", "Februar", "Mar", "April"];

// const myMonths = months.with(2, "March");

// console.log(months, myMonths);

/// //////////////////////////////////////////// spread operator

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1, ...q2, ...q3, ...q4];

// console.log(year);

/// ////////////////////////////////////////////////// array const

// const ar = [1, 2, 3];

// ar.pop();
// console.log(ar);

// ar.push(4);
// ar[1] = 20;
// console.log(ar);

console.log('ok');
console.log('ok2');
