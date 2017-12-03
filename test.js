
require("babel-polyfill");

let arr = [1,2,3,4];

let [a,...b] = arr

console.log(...b)

Array.from(arr)