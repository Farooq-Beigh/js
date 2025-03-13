//forof loop on Array
const myArr = [10,20,30]
for (const val of myArr) {
    console.log(val);
    
}

//forof loop on Object //error object is not iterable
// const myObj = {
//     1:"JS",
//     2:"CPP",
//     3:"Python",
// }
// for (const val of myObj) {
//     console.log(val);
    
// }

// for in loop on array
const myArr1 = [20,30,40]
for (const val in myArr1) {
   console.log(val,myArr1[val]);
   
}

//for in loop on array
const myObj = {
        1:"JS",
        2:"CPP",
        3:"Python",
}
for (const key in myObj) {
   console.log(key,myObj[key]);
   
}