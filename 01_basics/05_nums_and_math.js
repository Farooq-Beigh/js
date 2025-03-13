const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

//Number methods 
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));// 2 digits after decimal 

const otherNumber= 123.8966
console.log(otherNumber.toPrecision(4)); //Doing round off after decimal point 

const hunderds = 1000000
console.log(hunderds.toLocaleString());//by default us standard
console.log(hunderds.toLocaleString('en-IN')); // Indian standard

//++++++++++++++++++++ Math ++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); // changes -ive nos in +ive no's
console.log(Math.round(4.6)); // round off 
console.log(Math.ceil(4.4)); // always rounding off to top value
console.log(Math.floor(4.9)); // always rounding off to lowest value 
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,5,6,8));

console.log(Math.random());
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min));















