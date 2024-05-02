////////////////////////////////// random number [0, 1);

// const r = Math.random();
// console.log(r);


//////////////////////////////// random integer in range [0, 10);

// const r = Math.floor(Math.random() * 10);
// console.log(r);

//////////////////////////////// random integer in range [1, 10];

// const r = Math.floor(Math.random() * 10) + 1;
// console.log(r);


//////////////////////////////// random integer in range [10, 20];

// const r = Math.floor(Math.random() * 11) + 10;
// console.log(r);



//////////////////////////////// random integer in range [mn, mx];

const mn = 10, mx = 20;
const diff = mx - mn + 1;

const r = Math.floor(Math.random() * diff) + mn;
console.log(r);