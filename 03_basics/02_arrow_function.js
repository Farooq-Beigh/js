// Syntax of Arrow function
// const arrow = (n1,n2) => {
//     return n1+n2
// }
// console.log(arrow(50,100))

// console.log(arrow(50,100))
const arrow = (n1,n2) => n1+n2
console.log(arrow(50,100))

// Difference between normal function and arrow function on use of this 
const obj = {
    value : 20,
    // myFunction : function( ){
        myFunction : () => {
        console.log('value is ' + this.value)
    }
}
obj.myFunction()
