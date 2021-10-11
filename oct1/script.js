// var longestCommonSubsequence = function (text1, text2) {
//   //first make an indexArray consisting of indices in text2 that matches letters in text1
//   let indexArray = makeArrayOfIndex(text1, text2);
//   //console.log("indexArray", indexArray);

//   //find subsequences in the array above and push them (as arrays) into container array
//   //initialize an array as conainer for subsequences;
//   const container = [[]];

//   //for each element of indexArray, if the element is smaller than the last element of any array in container, make a new array with smaller indices and element and push it to container
//   for (let ele of indexArray) {
//     if (!(findArrayEndsSmallerIndex(container, ele))) {
//       container.push(makeNewArray(indexArray, ele));
//     } else {
//       //push the element to an array/arrays whose last item is smaller than the element.
//       for (let subsequence of container) {
//         if (!(subsequence[subsequence.length - 1] >= ele)) {
//           subsequence.push(ele);
//         }
//       }
//     }
//   }

//   console.log("container", container);

//   //return the length of the longest subsequence
//   //make an array of length of subsequences within the container;
//   let lengthArray = [];
//   for (let subsequence of container) {
//     lengthArray.push(subsequence.length);
//   }

//   //return the largest number in lengthArray
//   return Math.max(...lengthArray);
// };

// console.log(longestCommonSubsequence("ezupkr", "ubmrapg")); //順番が正しくないといけない
// console.log(longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy")); //一番長いsubsequenceでないといけない
// console.log(longestCommonSubsequence("bsbininm", "jmjkbkjkv")); //答は１。text2の中の同じ文字を二回数えてはならない
// console.log(longestCommonSubsequence("abcba", "abcbcba"))//答は5。

// //function to finds if any of the arrays in an outer array ends with element smaller than a specific number;
// function findArrayEndsSmallerIndex(array, num) {
//   let count = 0;
//   for (let innerArray of array) {
//     if (!(innerArray[innerArray.length - 1] > num)) {
//       count++;
//     }
//   }
//   return count > 0;
// }

// console.log(findArrayEndsSmallerIndex([[1, 2, 8], [5, 6], [10]], 4));
// console.log(findArrayEndsSmallerIndex([[]], 5));

//function that creates arrayOfIndex from text1 and text2. Elements in the array are index of text2 that matches element in text1;
// function makeArrayOfIndex(text1, text2) {
//   const arrayOfIndex = [];
//   for (let letter of text1) {
//     for (let i = 0; i < text2.length; i++) {
//       if (letter === text2[i]) {
//         arrayOfIndex.push(i);
//       }
//     }
//   }
//   return arrayOfIndex;
// }

// console.log(makeArrayOfIndex("abcdefg", "cdefab"));

//make new array that includes only smaller indices up to a specific index
// function makeNewArray(array, num, i = 0, newArray = []) {
//   if (array[i] === num) {
//     newArray.push(num);
//   } else {
//     if (array[i] < num) {
//       newArray.push(array[i]);
//     }
//     i++;
//     makeNewArray(array, num, i, newArray);
//   }
//   return newArray;
// }

// let arr = [1, 4, 6, 10, 7, 3];
// console.log(arr);
// console.log(makeNewArray(arr, 3));


var longestCommonSubsequence = function (text1, text2) {
  return getMaxLength(makeSubsequenceArray(makeIndexArray(text1, text2)));
};

function makeIndexArray(string1, string2) {
  let indexArray = [];
  for (let letter of string1) {
    const innerArray = [];
    for (let i = 0; i < string2.length; i++) {
      if (letter === string2[i]) {
        innerArray.push(i);
      }
    }
    indexArray.push(innerArray);
  }
  return indexArray;
}

function makeSubsequenceArray(outerArray, i = 0, result =[[]]) {
  if (i === outerArray.length) {
    return result;
  }
  let newResult = [...result];
  for (let ele of outerArray[i]) {
    for (let array of result) {
      //console.log(array);
      if (array[array.length - 1]<ele||array[array.length-1] === undefined) {
        newResult.push([...array, ele]);
      }
    }
  }
   i++;
  return makeSubsequenceArray(outerArray, i, newResult);
}


function getMaxLength(subsequenceArray) {
  let lengthArray = [];
  for (let subsequence of subsequenceArray) {
    lengthArray.push(subsequence.length);
  }

  //return the largest number in lengthArray
  return Math.max(...lengthArray);
}


function test(actual, expected){
  if (actual === expected){
    console.log("Pass")
  } else {
    console.log(`actual is ${actual}`, `expected is ${expected}`)
  }
}

let str1 = "zdbcfb";
let str2 = "abbcdeb";
let strr1 = "abcba";
let strr2 = "abcbcba";

console.log(longestCommonSubsequence(strr1, strr2))
console.log(longestCommonSubsequence("abcdef", "def"));
test(longestCommonSubsequence("abbc", "abc"), 3);
test(longestCommonSubsequence("abc", "abbc"), 3);
test(longestCommonSubsequence("abcdef", "bcfadef"), 5)
//console.log(longestCommonSubsequence("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))
