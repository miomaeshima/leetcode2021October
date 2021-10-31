// canConstruct takes a string and an array of strings
// and checks if the string can be constructed with element(s) in the array
// It returns a boolean

// const canConstruct = (targetString, wordBank, result = false) => {
//   if (targetString.length === 0) return true;
//   // if the word and the first part of targetString are not the same, return false;

//   //check if word and the first part of targetString are the same, if so, remove the word from the targetString and continue to do recursion
//   for (let word in wordBank) {
//     if (targetString.slice(0, word.length) === word) {
//       targetString = targetString.slice(word.length);
//       let newTargetStringStartsWithWord = canConstruct(targetString, wordBank, result);
//       result = (result || newTargetStringStartsWithWord);
//     } else {
//       return false;
//     }
//   }
//   return result;
// };

const canConstruct = (targetString, wordBank) => {
  if (targetString === "") return true;
  for (let word of wordBank) {
    if (targetString.indexOf(word) === true) {
      targetString = targetString.slice(word.length);
      if (canConstruct(targetString, wordBank) === true) {
        return true;
      }
    }
  }
  return false;
};

console.log(canConstruct("abcdef", ["ab", "def"]));
console.log(canConstruct("abcdef", ["cde", "abc", "f"]));

console.log("potato".indexOf("pq")); //-1
console.log("potato".indexOf("pot")); //0
console.log("potato".indexOf("tato")); // 2
