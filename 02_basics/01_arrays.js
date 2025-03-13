//Array
const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

//Array Methods
//push method adds element at the  end of array, we can add multiple elements  
myArr.push(6,7,8,9,10)
console.log(myArr);


//pop method deletes last element of an array deletes 1 element at a time 
myArr.pop()

myArr.unshift(11)
myArr.shift()
console.log(myArr);
//includes
console.log(myArr.includes(10));

//indexof
console.log(myArr.indexOf(10));

//join converts array into string
console.log(myArr.join())

//slice, splice
//Note:: difference between slice and splice is slice is not mauplating original string 
//while splice is manuplating original string
console.log("A",myArr);                 //[0,1,2,3,4,5,6,7,8,9]
const myn1 = myArr.slice(1,3)           

console.log(myn1);                      //[1,2]
console.log("B",myArr);                 //[0,1,2,3,4,5,6,7,8,9]

const myn2 = myArr.splice(1,3)
console.log("c",myArr);                 //[0,4,5,6,7,8,9]
console.log(myn2);                      //[1,2,3]







