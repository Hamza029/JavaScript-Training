// console.log(`\`` === '`');

// console.log(`string test line 1
//       string text line 2`);

// console.log(`fifteen is ${5 + 10}
// and not ${10 + 10}`);

///////////////////////////////////////////// nesting templates

// const isLargeScreen = () => false;

// item = {
//   isCollapsed: true,
// };

// const classes = `header ${
//   isLargeScreen() ? '' : `icon-${item.isCollapsed ? 'expander' : 'collapser'}`
// }`;

// console.log(classes);

////////////////////////////////////////////// tagged templates

// const person = 'Mike';
// const age = 18;

// const myTag = (strings, p, a) => {
//   const s = [];

//   strings.forEach((val) => {
//     s.push(val);
//   });

//   console.log(strings); // the string is converted to array seperated by template string expressions
//   console.log(`${p}, ${a}`);
//   // console.log(args);

//   return `${p} is now ${a < 18 ? 'young' : 'old'}`;
// };

// const output = myTag`That ${person} is now ${age}. ${100}`;

// console.log(output);
// // console.log(person, age);

// console.log.bind(1, 2, 3)`a`;

// const obj = {
//   person,
//   age,
// };

// if (true) {
//   console.log(obj);
//   const { person, age } = obj;
//   console.log(person, age);
// }

// const x = 'hello';
// console.log`Hello`;
// console.log.bind(1, 2)('a', 'b', 'c');

const obj = {};

Object.defineProperty(obj, 'x', { value: 0, writable: false });

console.log(obj);

let x = 0o10;
console.log(x);
