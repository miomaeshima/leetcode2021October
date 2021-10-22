//The aim of this file is to show function declared with function key is a property to window object

let a = 1;
console.log(a);

function addA(num) {
  return a + num;
}

const subtractOne = (num) => num - 1;

console.log(addA(3));
console.log(window.addA(3)); //window object represents open window in browser, function declared with function key is a property to window object. This line prints 4 on console, but does not work on node as window represents open window in browser.
console.log(subtractOne(4));
console.log(window.subtractOne(4)); //prints "undefined" on console as function declared by arrow function is not a property to window object
console.log(a);
console.log(window.a); //prints "undefined" on console as variable is not a property to the window object
