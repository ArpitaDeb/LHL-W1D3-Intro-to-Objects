# Objects in JS (W1D3)

## Overview
1. Review
2. Objects 101
3. Objects in functions
4. `this` in Object methods


## 1. Review
- Arrays are good for storing lists of similar data
- Example:
```js
const numbers = [1, 2, 3, 4];
numbers.length; // 4
numbers[0]; // 1
```
- Arrays and loops
- Example:
```js
// Good
for (let number of numbers) { }

for (let index in numbers) { }

numbers.forEach(function (number) { });

// Not so good
for (let i = 0; i < numbers.length; i++) { }

let i = 0;
while (i < numbers.length) { i++; }
```


## 2. Objects 101
- Types:
  - 7 Primitives (string, number, boolean, undefined, null, bigint, symbol)
  - Non-Primitives / Objects (Objects, Arrays, Functions)
- Object is key-value paired data
- Example:
```js
const pet = { name: 'Wiley', type: 'cat', age: 7 };
pet.name; // 'Wiley'
const key = 'type';
pet[key]; // 'cat'
```
- Compared to Arrays, Objects are good for storing groups of related data which can be any type
- Difference between primitives and Objects
- Looping with Objects
- Example:
```js
for (let key in pet) { }

Object.keys(pet);
```



## 3. Objects in functions
- Passing by reference
- Similar to pointers
- Example:
```js
const wiley = { type: 'cat', name: 'Wiley', age: 7 };
const memu = wiley;
memu.name = 'Memu';

console.log(wiley); // { type: 'cat', name: 'Memu', age: 7 }
```


## 4. `this` in Object methods
- `this` can be thought of as context
- Example:
```js
const person = {
 firstName: 'Victoria',
 lastName: 'Johns',
 fullName: function () {
   return `${this.firstName} ${this.lastName}`;
 },
};

console.log(person.fullName()); // 'Victoria Johns'
```
