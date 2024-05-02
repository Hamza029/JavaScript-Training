// 'use strict';
// x = 10; // Uncaught ReferenceError: x is not defined

////////////////////////////////////////////////////////
// 'use strict';

// const myFunction = () => {
//   x = 10; // Uncaught ReferenceError: x is not defined at myFunction
// };

// myFunction();

//////////////////////////////////////////////////////

// const myFunction = () => {
//   'use strict';
//   y = 20; // only the code inside the function will be strict mode (local mode)
// };

// x = 10;

// myFunction();

let a = [1, 2, 3];
let b = new Array([1, 2]);

console.log(a);
