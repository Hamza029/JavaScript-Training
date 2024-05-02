const val = 10;

// val = 10, val += 10, val++;
///////////////////// will cause errors

const obj = {
    type: 1,
    name: 'hello',
    age: 20.1
};

obj.type = 2;
obj.name = 100;
obj.age += 1;

console.log(obj);

// obj = {
//     type: 3,
//     name: 'hello there',
//     age: 20.1
// };
//////////////////// will cause error