/* 
 * Primitives: 
 * They are immutable, meaning that every time you assign a variable to a primitive, 
 * it accesses a new part in memory.
 */

const str = 'hello';
let str2 = str;
str2 += ' guys!';

console.log(str);
console.log(str2);

const num = 100;
let num2 = num;
num2 += 1;

console.log(num);
console.log(num2);

const bool = true;

console.log(bool);

const undef = undefined;

console.log(undef);

/*
 * Looping with Objects
 */

const pet = { name: 'Wiley', type: 'cat', age: 7 };

console.log(pet.name);

const key = 'type';

console.log(pet[key]);

/*
 * for...in
 */
function petProfile(pet) {
  for (let key in pet) {
    console.log(`Key: ${key}, Value: ${pet[key]}`);
  }
}

petProfile(pet);

/*
 * Object.keys()
 */
function petProfileWithObjectKeys(pet) {
  const keys = Object.keys(pet);
  console.log(keys);
  keys.forEach(function (key) {
    console.log(`Key: ${key}, Value: ${pet[key]}`);
  });
}

petProfileWithObjectKeys(pet);

/*
 * Object.values()
 */
function petProfileWithObjectValues(pet) {
  const values = Object.values(pet);
  console.log(values);
}

petProfileWithObjectValues(pet);
