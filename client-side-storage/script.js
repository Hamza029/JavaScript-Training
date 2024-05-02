// localStorage.setItem('name', 'Hamza');

// let x = localStorage.getItem('name');
// console.log(x);

// setTimeout(() => {
//     localStorage.removeItem('name');
//     x = localStorage.getItem('name');
//     console.log(x);
// }, 2000);

// localStorage.setItem('testValue', [
//     [1, 2],
//     [3, 4],
// ]);

// x = localStorage.getItem('testValue');

// console.log(typeof x);

// localStorage.setItem('val', 100);

// x = localStorage.getItem('val');

// console.log(typeof (x * 1));

// x = localStorage.getItem('testValue');

// const ar = x.split(',');

// for (let i = 0; i < ar.length; i += 1) {
//     console.log(ar[i]);
// }

// if (!localStorage.getItem('haha')) {
//     console.log('not found');
// }

/// /

// const div = document.querySelector('div');

// div.addEventListener('click', () => {
//     for (let i = 0; i < 10; i += 1) {
//         setTimeout(() => {
//             console.log(i);
//         }, 2000);
//     }
// });

/// /

const url = 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg';

fetch(url)
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP Error ${res.status}`);
        }

        console.log(res);

        return res.blob();
    })
    .then((data) => {
        console.log(data);
    });
