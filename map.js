const fruits = new Map([
    ["orange", 200],
    ["banana", 300]
]);

fruits.set("apple", 500);

console.log(fruits);

fruits.set('apple', 200);

console.log(fruits);

console.log(fruits.get('apple'), fruits.size, fruits.has('apple'));

fruits.delete('orange');

console.log(fruits);

fruits.forEach((val, key) => {
    console.log(key + ' ' + val);
});
