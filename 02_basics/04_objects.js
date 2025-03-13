// const tinderUser = new Object() //singleton

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false 

console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "beigh",
            lastname: "farooq"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

//How to combine two objects
const obj1 = {1: "a",2:"b"}
const obj2 = { 3: "a", 4: "b"}
const obj3 = Object.assign({},obj1,obj2)    //here {} is target and others are source
console.log(obj3);

//using spread operator mainly used 
const obj4 = {...obj1,...obj2}
console.log(obj3);

//how to get keys and values of object
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



