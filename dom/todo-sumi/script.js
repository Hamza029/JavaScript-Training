///////////////////////////////
// get element by id
// let headerElement = document.getElementById('header');
// // headerElement.textContent = 'To-Do Apps';
// console.log(headerElement.textContent);
// console.log(headerElement.innerText);
// console.log(headerElement.innerHTML);

// headerElement.style.color = 'red';
// headerElement.style.fontSize = '50px';

////////////////////////////////////
// get elements by class

// let items = document.getElementsByClassName('item');

// for (let i = 0; i < items.length; i++) {
//   items[i].style.color = 'red';
// }

///////////////////////////////////
// get element by tag name

// let items = document.getElementsByTagName('li');

// console.log(items);

///////////////////////////////////
// query selector

// let newTask = document.querySelector('#new-task');

// console.log(newTask);

////

// let lastItem = document.querySelector('.item:last-child');

// lastItem.style.color = 'red';

////

// let lastItems = document.querySelectorAll('.item:last-child');

// console.log(lastItems);

// for (let element of lastItems) {
//   element.style.color = 'red';
// }

////

// let item = document.querySelector('.item:nth-child(2)');

// item.style.color = 'red';

////

// let item = document
//   .querySelector('.complete-list')
//   .querySelector('.item:nth-child(1)');

// item.style.color = 'red';

/////////////////////////////////////////////////
// parent-child relation

// const grandparent = document.querySelector('.todo-list');
// const parent = grandparent.children;
// const children = parent[1].children;

// console.log(children);

////

// const children = document.querySelector('.item');
// const parent = children.parentElement;
// console.log(parent);
// const grandparent = children.closest('.todo-list');
// console.log(grandparent);

////

// const childrenOne = document.querySelector('.item');
// const childrenTwo = childrenOne.nextElementSibling;
// const prev = childrenTwo.previousElementSibling;

// childrenTwo.style.color = 'red';
// prev.style.color = 'green';

///////////////////////////////////////////////
// manipulate the DOM

////////////////////////////////////////////////
// creating an element

// const divElement = document.createElement('div');

// divElement.className = 'red';
// divElement.setAttribute('id', 'red');
// divElement.setAttribute('title', 'Red Div');

// const container = document.querySelector('.todo-list');
// const h2Element = container.querySelector('h2');

// container.insertBefore(divElement, h2Element);
// container.appendChild(divElement);
// container.append(divElement, document.createElement('p'), 'hello');
// only html element in appendChild but in append we can add text as well
// appendChild also returns the appended element
// in append we can give multiple elements as arguments

//////////////////////////////////////////////////
// event listener

// const headerElement = document.querySelector('#header');
// headerElement.addEventListener('click', (e) => {
//   console.log(e);
// });

// catch input

// const inputElement = document.querySelector('input[type="text"]');

// inputElement.addEventListener('keydown', (e) => {
//   console.log(e);
// });

////

// const formElement = document.querySelector('form');

// formElement.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log(e);
// });

////

// const inputElement = document.querySelector('input[type="text"]');

// inputElement.addEventListener('keyup', (e) => {
//   console.log(e.target.value);
// });

/////////////////////////////////////////////////////
// to-do app

// select elements and assign them to variables
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

// functions
const createTask = (task) => {
  let listItem = document.createElement('li');
  let checkBox = document.createElement('input');
  let label = document.createElement('label');

  label.innerText = task;
  checkBox.type = 'checkbox';

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.className = 'item';

  return listItem;
};

const addTask = (event) => {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = '';
  bindIncompleteItems(listItem, completeTask);
};

const bindIncompleteItems = (taskItem, checkboxClick) => {
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxClick;
};

const completeTask = function () {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.className = 'delete';
  listItem.appendChild(deleteBtn);

  let checkBox = listItem.querySelector('input[type="checkbox"]');
  checkBox.remove();
  completeUl.appendChild(listItem);

  bindCompleteItems(listItem, deleteTask);
};

const deleteTask = function () {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

const bindCompleteItems = function (taskItem, deleteButtonClick) {
  const deleteButton = taskItem.querySelector('.delete');
  deleteButton.onclick = deleteButtonClick;
};

function checkboxClick(event) {}

//

const btn = document.querySelector('#addTask');

form.addEventListener('submit', addTask);

for (let i = 0; i < todoUl.children.length; i++) {
  bindIncompleteItems(todoUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}
