/*
 * Using `this` in objects to access context
 */

function profileGenerator() {
  console.log(`
    This is ${this.name}. 
    They are a ${this.type} and they are ${this.age} years old. 
    Their favourite thing is ${this.favouriteThing}.
    `);
  if (this.pets) {
    console.log(`They have ${this.pets.length} pet(s).`);
    this.pets.forEach(function (pet) {
      if (pet.profile) {
        pet.profile();
      }
    });
  }
}

const wiley = { name: 'Wiley', type: 'cat', age: 7, favouriteThing: 'food' };
const memu = { name: 'Memu', type: 'cat', age: 2, favouriteThing: 'chasing squirrels' };
const yonda = { name: 'Yonda', type: 'toy cat', age: 0, favouriteThing: 'Memu' };
wiley.profile = profileGenerator;
memu.profile = profileGenerator;
memu.pets = [yonda];
yonda.profile = profileGenerator;


const person = {
  name: 'Victoria',
  type: 'person',
  age: 27,
  favouriteThing: 'going outside when not in quarantine',
  pets: [wiley, memu],
  profile: profileGenerator
};

person.profile();
