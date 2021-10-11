// const gridTraveler = (x, y) => {
//   if (x === 0 || y === 0) return 0;
//   if (x === 1 && y === 1) return 1;
//   return gridTraveler(x - 1, y) + gridTraveler(x, y - 1);
// };

const gridTraveler = (x, y, memo = {}) => {
  const key = x + "," + y;
  if (key in memo) return memo[key];
  if (x === 0 || y === 0) return 0;
  if (x === 1 && y === 1) return 1;
  memo[key] = gridTraveler(x - 1, y, memo) + gridTraveler(x, y - 1, memo);
  console.log(memo);
  return memo[key];
};

console.log(gridTraveler(4, 3));
//console.log(gridTraveler(15, 15));
