/*
 * Using `this` in objects to access context
 */

const cat1 = { name: 'Wiley', type: 'cat', age: 7, favouriteThing: 'food' };
const cat2 = { name: 'Memu', type: 'cat', age: 2, favouriteThing: 'chasing squirrels' };
const cat3 = { name: 'Yonda', type: 'cat', age: 0, favouriteThing: 'being a cat' };

cat2.pets = [cat3];

const profileGenerator = function () {
  // Log name and favouriteThing
  console.log(`This is ${this.name}. Their favourite thing is ${this.favouriteThing}.`);
  // Go through each pet and log name and favouriteThing
  if (this.pets) {
    console.log(`They have ${this.pets.length} pet(s).`);
    console.log(`\nPet profile(s)\n`);
    this.pets.forEach(function (pet) {
      if (pet.profile) {
        pet.profile();
      }
    });
  }
};

const person = {
  name: 'Victoria',
  age: 27,
  favouriteThing: 'going outside when not in quarantine',
  pets: [cat1, cat2],
  profile: profileGenerator,
};

cat1.profile = profileGenerator;
cat2.profile = profileGenerator;
cat3.profile = profileGenerator;

person.profile();

