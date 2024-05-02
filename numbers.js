let x = 10, y = 20;

console.log('the sum is ' + x + y);
console.log(x + y + ' is the sum');

let z = '30';
let num = z * 1;

let mx = Math.min(Infinity, 1);

console.log(typeof z, typeof num);
console.log(mx);
console.log(0xF);

x = BigInt(100000000000000000000000000000000000000000000);
console.log(`type of big int is: ${typeof x}`);
console.log(Number('    10  '), Number('abcd'), Number.isSafeInteger(999999999999999), Number.MAX_SAFE_INTEGER);
console.log(Number.parseFloat('10 20 30'), Number.parseFloat('years 10'), Number.parseFloat('10 years'));
console.log(Number.MAX_VALUE);

x = BigInt('9007199254740992');
y = BigInt('9007199254740993');

console.log(9007199254740992 === 9007199254740994);
// console.log(x === y);
// console.log(Number.EPSILON);
// console.log(Number.POSITIVE_INFINITY, 1/0);
// console.log(Number.NaN == 10/'apple');
// console.log(Number.NaN);
// console.log(10/'apple');
// console.log(NaN === NaN);
// console.log(Math.round(10.14878234), Math.ceil(10.14878234), Math.floor(10.14878234), Math.round(10.5));
// console.log(typeof NaN);
// console.log(9007199254740992n - 9007199254740997n);