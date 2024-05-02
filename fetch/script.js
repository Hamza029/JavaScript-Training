// fetch('https://codeforces.com/api/user.info?handles=29logN')
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error('HTTP Error: ' + res.status);
//     }

//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.result[0].maxRating);
//   })
//   .catch((e) => console.log(e));

const form = document.querySelector('form');
const inp = document.querySelector('#inp');
const tab = document.querySelector('.tab');

const insertUser = (user) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td1.innerText = user.handle;
    td2.innerText = `${user.firstName ? user.firstName : ''} ${user.lastName ? user.lastName : ''}`;
    td3.innerText = user.maxRating;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tab.appendChild(tr);
};

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const handle = inp.value;

    try {
        const res = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status} ${res.message}`);
        }

        const data = await res.json();
        const user = data.result[0];

        insertUser(user);

        inp.value = '';
    } catch (error) {
        // alert('User not found');
        console.log(error);
    }

    // fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
    //     .then((res) => {
    //         if (!res.ok) {
    //             throw new Error(`HTTP Error: ${res.status}`);
    //         }
    //         return res.json();
    //     })
    //     .then((data) => data.result[0])
    //     .then((user) => {
    //         console.log(user.maxRating);
    //         inp.value = '';
    //         insertUser(user);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         // alert('User not found!');
    //     });
});
