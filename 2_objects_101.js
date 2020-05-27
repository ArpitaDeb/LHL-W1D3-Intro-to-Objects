/*
 * Primitives
 */

const name = 'Victoria';
let someoneElsesName = name;

// console.log(name);
// console.log(someoneElsesName);

someoneElsesName += ' eyy';

console.log(someoneElsesName);
console.log(name);

const num = 1;
let num2 = num;

console.log(num);
console.log(num2);

num2 += 1;

console.log(num);
console.log(num2);

const truthyBool = true;
let falseyBool = truthyBool;

console.log(truthyBool);
console.log(falseyBool);

falseyBool = false;

console.log(truthyBool);
console.log(falseyBool);

/*
 * Objects
 */

const pet = { name: 'Wiley', type: 'cat', age: 7 };

console.log('Pet: ', pet);

console.log('name: ', pet.name);

const key = 'type';

console.log('type: ', pet[key]);


/*
 * Looping with Objects
 */

function createPet(name, type, age) {
  return { name: name, type: type, age: age };
}

const wiley = createPet('Wiley', 'cat', 7);
console.log(wiley);

/*
 * for...in
 */

function outputPet(pet) {
  for (let key in pet) {
    const value = pet[key];

    const output = `Key: ${key}, Value: ${value}`;
    console.log(output);
  }
}

outputPet(wiley);

/*
 * Object.keys()
 */

function outputPetObjectKeys(pet) {
  const keys = Object.keys(pet);
  keys.forEach(function (key) {
    const value = pet[key];

    const output = `Key: ${key}, Value: ${value}`;
    console.log(output);
  });
}

outputPetObjectKeys(wiley);
