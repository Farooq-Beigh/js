"use strict"; //treat all JS code as newer version

// alert(3+3)   // we are using nodejs, not browser

let name = "hitesh"
let age = 18
const varNumber= 1225679986543222222222244555n  //BigNumber
let isLoggedIn = false 
let state;

const id = Symbol('123')
const anotherId=Symbol('123')
console.log(id === anotherId)   //false

//Data Types in JS
// -------------------------Primitive Data Types---------------
//number => range 2 to power 53
//bigint
//string => "", ''
//boolean => true/false
//null => standalone value
//undefined=> 
//symbol => unique 

//---------------------------Non Premitive Data Types-------------
//Array , objects, functions

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof isLoggedIn);
console.log(typeof state);

console.log(typeof null);   //object
let sym=Symbol('unique');
console.log(sym);
console.log(typeof(sym));
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber)
console.log(typeof(bigNumber))




//Array
const heros =["Hello","Java","Script"]
console.log(heros);
console.log(typeof(heros));


//object
let myObjt={
    id:"01",
    name:"hitesh",
    age:22
}
console.log(myObjt);
console.log(typeof(myObjt));

// function
const myFunction=function(){
    console.log("First Function");
}


//+++++++++++++++++++++++++++++++++++++++
// Stack (primitive), Heap (non Primitive )
let myYoutubename = "hitesh"
let anothername=myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename); // copy of original so it will not effect original object
console.log(anothername);

let userOne={
    email: "user@gmail.com",
    upi:"user@ybl"
}
let userTwo=userOne // reference
userTwo.email="beigh@google.com"  // it will change in both objects because its copying refrence 
console.log(userOne);
console.log(userTwo);





