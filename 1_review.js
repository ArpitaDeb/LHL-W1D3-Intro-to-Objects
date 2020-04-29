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
  for (let word of words) {
    let include = true;
    for (let canadianWord of canadianWords) {
      if (word === canadianWord) {
        include = false;
      }
    }

    if (include) {
      americanWords.push(word);
    }
  }

  return americanWords.join(' ');
}

console.log(americanize(words1));
console.log(americanize(words2));

function americanizeWithIncludes(words) {
  const canadianWords = ['eh', 'aboot'];
  const americanWords = [];
  for (let word of words) {
    if (!canadianWords.includes(word)) {
      americanWords.push(word);
    }
  }

  return americanWords.join(' ');
}

console.log(americanizeWithIncludes(words1));
console.log(americanizeWithIncludes(words2));
