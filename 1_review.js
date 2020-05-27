const green = '\x1b[32m%s\x1b[0m';
const red = '\x1b[31m%s\x1b[0m';
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(green, `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(red, `Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
 * Coding Challenge:
 * americanize function takes in a words array
 * and returns a sentence string with Canadian words removed
 * 
 * Starter code:
 * 
 * const words1 = ['Hello', 'how\'s', 'it', 'going', 'eh'];
 * const words2 = ['What\'s', 'all', 'this', 'aboot', 'then'];
 * 
 * function americanize(words) {
 * 
 * }
 * 
 */

const words1 = ['Hello', 'how\'s', 'it', 'going', 'eh'];
const words2 = ['What\'s', 'all', 'this', 'aboot', 'then'];

function americanize(words) {
  const canadianWords = ['eh', 'aboot'];
  const americanWords = [];

  for (let word of words) { // word = 'eh'
    let include = true;

    for (let canadianWord of canadianWords) { // canadianWord = 'aboot'
      if (word === canadianWord) { // 'eh' !== 'aboot'
        include = false;
      }
    }

    if (include) {
      americanWords.push(word);
    }
  }

  return americanWords.join(' ');
}

assertEqual(americanize(words1), 'Hello how\'s it going');
assertEqual(americanize(words2), 'What\'s all this then');

function americanizeWithIncludes(words) {
  const canadianWords = ['eh', 'aboot'];
  const americanWords = [];

  words.forEach(function (word) {
    if (!canadianWords.includes(word)) {
      americanWords.push(word);
    }
  });

  return americanWords.join(' ');
}

assertEqual(americanizeWithIncludes(words1), 'Hello how\'s it going');
assertEqual(americanizeWithIncludes(words2), 'What\'s all this then');
