// const f = async () => {
//   return 1;
// };

// f().then(alert);

//////////////////////

// const f = async () => {
//   return Promise.resolve(1);
// };

// f().then(alert);

/////////////////////////////

// const fn = async () => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done!'), 1000);
//   });

//   let result = await promise;

//   console.log(result);
// };

// fn();

//////////////////////////////////

// const showAvatar = async () => {
//   // read json
//   // let response = await fetch('/article/promise-chaining/user.json');
//   // let user = await response.json();
//   const user = {
//     name: 'Hamza029',
//   };

//   // read github user
//   const githubResponse = await fetch(
//     `https://api.github.com/users/${user.name}`
//   );
//   let githubUser = await githubResponse.json();

//   console.log(githubUser);

//   // show the avatar
//   const img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = 'promise-avatar-example';
//   document.body.append(img);

//   // wait 3 seconds
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// };

// showAvatar();

///////////////////////////////////////////

// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     alert(resolve);
//     // resolve with this.num*2 after 1000ms
//     setTimeout(() => resolve(this.num * 2), 1000); // (*)
//   }
// }

// async function f() {
//   // waits for 1 second, then result becomes 2
//   let result = await new Thenable(1);
//   alert(result);
// }

// f();

const fn = async () => {
  return 'from fn';
};

fn()
  .then((res) => {
    console.log(res);
    return 'from first then';
  })
  .then((res) => {
    console.log(res);
  });
