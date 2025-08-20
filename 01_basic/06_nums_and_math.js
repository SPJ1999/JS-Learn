const score = 100;
console.log(score);

const balance = new Number(200);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const OtherNumber =11233.876
console.log(OtherNumber.toPrecision(5));

const AnotherNumber = 1000000;
console.log(AnotherNumber.toLocaleString("en-IN"));


//++++++++++++++++++++++++Math+++++++++++++++++++++++++


console.log(Math.ceil(4.555));
console.log(Math.floor(4.555));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)