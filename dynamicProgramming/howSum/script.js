// //The function howSum takes a number (targetSum), array of numbers and returns any combination of numbers that sums up to the targetSum

// const howSum = (targetSum, numbers, result = []) => {
//   //if targetSum is 0, return [] to upper layer
//   // if targetSum is negative, then return null to upper layer

//   if (targetSum === 0) {
//     return [];
//   }
//   if (targetSum < 0) {
//     return null;
//   }

//   // go through the array of numbers. if lower layer returns something other than null, that should be the result coming back from the lower layer, so add yourself (the number) to the result and return it as answer.

//   for (const num of numbers) {
//     const remainder = targetSum - num;
//     if (howSum(remainder, numbers, result) !== null) {
//       result.push(num);
//       return result;
//     }
//   }

//   //If the for loop above does not return, then the return statement below is triggered

//   return null;
// };

const howSum = (targetSum, numbers, result = [], memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    if (howSum(remainder, numbers, result, memo) !== null) {
      result.push(num);
      //have to spread result array to make a copy
      memo[targetSum] = [...result];
      return result;
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log(howSum(5, [5, 2]));
console.log(howSum(0, [4, 2]));
console.log(howSum(5, [4, 3, 2]));
console.log(howSum(-1, [7, 5]));
console.log(howSum(10, [3, 4]));
console.log(howSum(11, [6, 4, 5]));
console.log(howSum(10, [6, 2, 3]));
console.log(howSum(300, [7, 14]));
