const myArr = [1,2,3,4,5,6,7,8,9,10]
const myNewArr = myArr.filter( (num) => {
    return num>=5
})
// console.log(myNewArr);


const books = [
    { title: "Book One", genere: "History", publish: 1981, edition : 2004,},
    { title: "Book two", genere: "fiction", publish: 200, edition : 2014,},
    { title: "Book three", genere: "non fiction", publish: 2016, edition : 2018,},
    { title: "Book four", genere: "science", publish: 2020, edition : 2025,},
]
const myBooks = books.filter( (book) =>{
    return book.genere === "non fiction" || book.edition === 2025
})
console.log(myBooks);

