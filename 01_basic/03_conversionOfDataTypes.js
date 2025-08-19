let score=33 ;
let score1="33abc";
let score2=null;
let score3=undefined;
let score4= false

console.log(typeof score); // number
console.log(typeof score1); // string

let valueInNumber = Number(score1);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN
console.log(typeof(score2));
console.log(typeof(score3));
console.log(typeof(score4)); // boolean

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// false => 0

let isLoggedIn = 1
let isLoggedIn1= 0
let isLoggedIn3=""
let isLoggedIn4="hitesh"
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(booleanLoggedIn); // true
let booleanLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanLoggedIn1); // false
let booleanLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanLoggedIn3); // false
let booleanLoggedIn4 = Boolean(isLoggedIn4);
console.log(booleanLoggedIn4); // true
