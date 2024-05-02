const changeContent = () => {
    let val = document.getElementById('demo').innerHTML * 1;
    console.log(val);
    val += 1;
    document.getElementById('demo').innerHTML = (val + '');
}

let x = 0;
const ar = [100, 150, 200, 250, 200, 150, 100, 50];

const changePos = () => {
    x %= 8;
    console.log(x, ar[x]);
    document.getElementById('no').style.left = ar[x] + 'px';
    x++;
}

xx = 10;
document.getElementById('test').innerHTML = window.xx;
console.log(window.xx);

const btn1 = document.getElementById('btn1');

console.log(btn1);

// btn1.addEventListener('click', (e) => {
//     e.target.textContent = 'hehe';
// });

const fne = (e) => {
    e.target.textContent = 'hehe';
};

btn1.addEventListener('click', fne);

const obj = {
    name: 'test object'
};

let num = 10;

const changeObj = (x, y) => {
    x.name = 'hehe';
    y = 20;
};

changeObj(obj, num);

console.log(obj, num);