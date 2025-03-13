//singleton
//Object.create

//object literals

const mySym = Symbol("key1")// use symbol in objects as key
const JsUser= {
    name : "Farooq",
    email : "beigh@google.com",
    city : "J&K",
    age : 18,
    lastlogin: ["Monday","sunday"],
    [mySym]: "key1",
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);
console.log(JsUser);
JsUser.email="beigh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="beigh@microsoft.com"  //after freezing object changes cant be reflected in object
console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello object JsUser, ${this.name}`); 
}
console.log(JsUser.greeting());




