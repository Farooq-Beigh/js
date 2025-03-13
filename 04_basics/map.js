const myNumbers=[1,2,3,4,5]
// const newNums = myNumbers.map( (num) => num*10)

//we can use map chaining
const newNums = myNumbers.map( (num) => num*10).map( (num) => num+1)
console.log(newNums);
