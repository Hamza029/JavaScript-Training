const s = new Set([2, 'a', 1, 'b']);

s.add('c');
s.add('b');
s.delete('a');

// for(const x of s) {
//     console.log(x);
// }

// s.forEach((x) => {
//     console.log(x);
// });

// for(const x of s.values()) {
//     console.log(x);
// }

console.log(s, s.values());

console.log(s.size, s.has(2));