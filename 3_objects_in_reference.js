/*
 * Objects are passed by reference.
 */
const wiley = { name: 'Wiley', type: 'cat', age: 7 };
const memu = wiley;
memu.name = 'Memu';
memu.age = 2;

// Problem! Modify memu, also modifies wiley.
console.log(memu);
console.log(wiley);

/*
 * Re-assigning a parameter, does not change the variable that was passed in.
 */
function outputName(pet) {
  pet = { name: 'Memu', type: 'cat', age: 2 };
  console.log(pet);
}
outputName(wiley);
console.log(wiley); // wiley is untouched

function modifyStr(str) {
  str = 'goodbye';
  console.log(str);
}
const inputStr = 'hello';
modifyStr(inputStr);
console.log(inputStr); // inputStr is untouched

/*
 * Modifying keys on an object DOES change the variable that was passed in.
 */
function outputName(pet) {
  pet.name = 'Memu';
  console.log(pet);
}
outputName(wiley);
console.log(wiley); // wiley's name is now Memu!

/*
 * Modifying an array that is passed to a function DOES change the variable that was passed in.
 */
function modifyNames(names) {
  names.push('Vasily');
}
const instructors = ['Victoria', 'Tim'];
console.log(instructors);
modifyNames(instructors);
console.log(instructors); // instructors now includes 'Vasily'!
