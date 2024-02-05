let score = "ava"

// console.log(typeof score);

let converted = Number(score)
// console.log(typeof converted);
// console.log(converted);

/**
  "33" -> 33
  "s" -> NaN
  false -> 0
  null -> 0
  undefined -> NaN
 */

let isTrue = false
let s = String(isTrue)
// console.log(s);
// console.log(typeof s);


let bool = +true
// console.log(bool);

// console.log(null >= 0); // true
// console.log(null == 0); // false

console.log(NaN == 0); // false
console.log(NaN >= 0); // false