// canConstruct takes a string and an array of strings
// and checks if the string can be constructed with element(s) in the array
// It returns a boolean

// if string is empty, return true
// if word is prefix of string, reset string by removing prefix and recurse

////Brute Force:
// const canConstruct = (targetString, wordBank) => {
//   if (targetString === "") return true;
//   for (let word of wordBank) {
//     if (targetString.indexOf(word) === true) {
//       targetString = targetString.slice(word.length);
//       if (canConstruct(targetString, wordBank) === true) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

const canConstruct = (targetString, wordBank, memo = {}) => {
  if (targetString in memo) return memo[targetString];
  if (targetString === "") return true;
  for (let word of wordBank) {
    if (targetString.indexOf(word) === true) {
      suffix = targetString.slice(word.length);
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[targetString] = true;
        return true;
      }
    }
    memo[targetString] = false;
    return false;
  }
};

console.log(canConstruct("abcdef", ["ab", "def"]));
console.log(canConstruct("abcdef", ["cde", "abc", "f"]));
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "eee",
    "eeeee",
    "eeeeeee",
  ])
);

console.log("potato".indexOf("pq")); //-1
console.log("potato".indexOf("pot")); //0
console.log("potato".indexOf("tato")); // 2
