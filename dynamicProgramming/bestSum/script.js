//bestSum(targetSum, numbers)
//The function should return an array containing the shortest combination of numbers that add up to the targetSum
//If there is a tie for the shortest combination, you may return any one of the shortest.

//bestSum(7, [5, 3, 4, 7]) returns [7]
//bestSum(8, [2, 3, 5]) returns [3, 5]

const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (const num of numbers) {
    remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers);

    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  return shortestCombination;
};

//console.log(bestSum(7, [2, 3, 5]));
console.log(bestSum(8, [4, 2]));
