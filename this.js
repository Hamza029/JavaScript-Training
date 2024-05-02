/////////////////////// basic

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   id: 5566,
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(person.fullName());

////////////////////////

// console.log(this);

// // ('use strict');
// console.log(this);

// (() => {
//   console.log(this);
// })();

// (function () {
//   console.log(this);
// })();

('use strict');

(function myFn() {
  console.log(this);
})();

(function myFn() {
  console.log(this);
})();
