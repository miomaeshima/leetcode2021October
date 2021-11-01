//countConstruct takes a string <string> and an array of words <wordBank> and returns the number of ways string can be constructed with words in the array
// //Brute Force
// const countConstruct = (string, wordBank) => {
//   let count = 0;
//   if (string === "") return 1;
//   for (let word of wordBank) {
//     //if word can construct the string then increment count by 1
//     //meaning if the word is prefix of the string and the returned value of the countConstruct(string-word, wordBank) is 1
//     if (string.indexOf(word) === 0) {
//       let suffix = string.slice(word.length);
//       if (countConstruct(suffix, wordBank) === 1) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

const countConstruct = (string, wordBank, memo = {}) => {
  if (string in memo) return memo[string];
  if (string === "") return 1;
  let count = 0;
  for (let word of wordBank) {
    //if word can construct the string then increment count by 1
    //meaning if the word is prefix of the string and the returned value of the countConstruct(string-word, wordBank) is 1
    if (string.indexOf(word) === 0) {
      let suffix = string.slice(word.length);
      count = +countConstruct(suffix, wordBank, memo);
      //  memo[string] = count;
    }
  }
  memo[string] = count;
  console.log(memo);
  return count;
};

console.log(countConstruct("abc", ["abc", "def", "a", "bc"]));
console.log(countConstruct("abcdef", ["cde", "abc", "f"]));
// console.log(
//   countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "eee",
//     "eeeee",
//     "eeeeeee",
//   ])
// );
