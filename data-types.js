let x = 16 + 4 + 'Hello';

console.log(x);
// x = 20Hello
// expressions are evaluated from left to right

console.log(123e5, 123e-5);

x = BigInt('123456789012345678901234567890');
x *= BigInt('2');

console.log(x);

const pcs = ['dell', 'hp', 'lenovo'];
console.log(pcs);

const laptop = {
    brand: 'hp',
    ram: '16gb',
    rom: '512gb',
    weight: 3,
};

console.log(typeof laptop, laptop);