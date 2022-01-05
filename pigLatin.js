function translate(word) {
  word = word.toLowerCase();
  let vowelIndex = word.search(/[aeiou]/);
  console.log(vowelIndex);
  if (vowelIndex === 0) {
    return word + "way";
  } else if (vowelIndex === -1) {
    return "Please enter a word with a vowel";
  } else {
    let wordAsArray = word.split("");
    let trimmedArray = wordAsArray.slice(vowelIndex);
    for (let i = 0; i < vowelIndex; i++) {
      trimmedArray.push(wordAsArray[i]);
    }
    return trimmedArray.join("") + "ay";
  }
}

console.log(translate("grand"));

module.exports = translate;

// make word all lowercase
// find indexOf first vowel in word
// if first letter -- add "way" to end
// if  letter x move consonant(s) to end and add 'ay'
