/*
 * Objects are passed by reference.
 */

const str1 = 'hi';
const str2 = 'hi';
const wiley = { name: 'Wiley', type: 'cat', age: 7 };
const memu = wiley;
memu.name = 'Memu';
memu.age = 3;

console.log(wiley);
console.log(memu);


/*
 * Re-assigning a parameter, does not change the variable that was passed in.
 */
function changeParam(param) {
  param = 'something else';
  console.log(param);
}

const str = 'yolo';
changeParam(str);
console.log(str);

const arr = [1, 2, 3];
changeParam(arr);
console.log(arr);

const obj = { a: 'b' };
changeParam(obj);
console.log(obj);

/*
 * Modifying keys on an object DOES change the variable that was passed in.
 */
function modifyName(pet) {
  pet.name = 'Not Wiley';
  console.log(pet.name);
}
const pet = { name: 'Wiley' };
console.log(pet);
modifyName(pet);
console.log(pet);

/*
 * Modifying an array that is passed to a function DOES change the variable that was passed in.
 */
function modifyArr(arr) {
  arr[0] = 'yolo';
  console.log(arr);
}

const modArr = [1, 2, 3];
console.log(modArr);
modifyArr(modArr);
console.log(modArr);
