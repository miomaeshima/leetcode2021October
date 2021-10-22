//bestSum(targetSum, numbers)
//The function should return an array containing the shortest combination of numbers that add up to the targetSum
//If there is a tie for the shortest combination, you may return any one of the shortest.

//bestSum(7, [5, 3, 4, 7]) returns [7]
//bestSum(8, [2, 3, 5]) returns [3, 5]

const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (const num of numbers) {
    remainder = targetSum - num;
    let combination = bestSum(remainder, numbers);
    if (combination !== null) {
      combination.push(num);
      return combination;
    }
  }
  return null;
};

// console.log(bestSum(0, [1, 4]), []);
// console.log(bestSum(5, [4, 3]), null);
// console.log(bestSum(5, [2, 3]), [3, 2]);
console.log(bestSum(7, [2, 3, 5]), [3, 2, 2]);

const getCombinations = (targetSum, numbers, combination = []) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (const num of numbers) {
    remainder = targetSum - num;
    if (getCombinations(targetSum, numbers, combination) === true) {
      combination.push(num);
      console.log(targetSum, combination);
      return true;
    }
  }
  return false;
};

console.log(getCombinations(7, [2, 3, 5]));
