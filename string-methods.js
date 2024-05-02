let text = "Apple, Banana, Kiwi";

console.log(text.slice(7, 13));
// substring [7, 13)

console.log(text.slice(7));
// substring [7, length)

console.log(text.slice(-4));
// counted from end of string

console.log(text.slice(-4, -2));

console.log(text.substring(7, 13));

console.log(text.substr(7, 6));

console.log(text.toUpperCase());

let str = '   abcd  ';
console.log(str.trim());

str = str.trim();
str = str.padStart(6, '.');

console.log(str);

let num = 5;
let numStr = num.toString() + 100;

console.log(numStr);

str = 'abcd abc';
str = str.replace(/abc/g, 'efg');

console.log(str);

console.log(text.split(','));

console.log(text.search(/banana/i));
console.log(text.indexOf('Banana', 7)); // 7
console.log(text.indexOf('Banana', 8)); // -1
console.log(text.includes('Banana', 7));
console.log(text.includes('Banana', 8));
console.log(text.startsWith('App'));
console.log(text.endsWith('wi'));

str =
`The quick
brown fox
jumps ${1+2} over
the lazy dog`;

console.log(str);