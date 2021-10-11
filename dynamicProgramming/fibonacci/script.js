"use strict";

// function fib(n, count = 3, array = [1, 1]) {
//   if (n <= 2) return 1;
//   if (count === n) return array[array.length - 1] + array[array.length - 2];
//   array.push(array[array.length - 1] + array[array.length - 2]);
//   count++;
//   return fib(n, count, array);
// }

function slowFib(n) {
  if (n <= 2) return 1;
  return slowFib(n - 1) + slowFib(n - 2);
}

const fastFib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
  return memo[n];
};

console.log(fastFib(42));
//console.log(fib(7))

//1,1,2,3,5
//console.log("fib(4)", fib(4));

function print(n) {
  if (n === 0) return;
  console.log(n);
  print(n - 1);
}
//print(50);

function dib(n) {
  if (n <= 1) {
    console.log(n);
    return;
  }
  console.log(n);
  dib(n - 1);
  dib(n - 1);
}

//dib(5)

function count(n, start = 0) {
  if (start === n) {
    console.log("stop");
    return;
  }
  start++;
  console.log(start);
  return count(n, start);
}

//count(4);
