function sum(num1,num2){
    return num1+num2 
}
// console.log(sum(10,20));

function handleMultipleArguments(...num){           //rest operator
    return num 
}
console.log(handleMultipleArguments(10,20,30,40));

//passing object as an argument
function userLogin(user){
    return `${user.name} is logged in`
}
let user= {
    name:"Beigh Farooq",
    age: 22,
}
console.log(userLogin(user));

//js hoisting
hello()
function hello(){
    console.log("hello world")
}

