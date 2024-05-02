/////////////////////////// sort, reverse
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.sort();
// console.log(fruits);

// fruits.reverse();
// console.log(fruits);

/////////////////////////////// toSorted
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const fruits2 = fruits.toSorted();
// console.log(fruits2);

// const fruits3 = fruits2.toReversed();
// console.log(fruits3);


////////////////////////////// numeric sort
const points = [40, 100, 1, 5, 25, 10];

points.sort((x, y) => (x - y));
console.log(points);

points.sort((x, y) => (y - x));
console.log(points);