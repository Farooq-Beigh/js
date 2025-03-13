const name="beigh"
const repoCount = 10
console.log(name+repoCount);

//string inter position
//Back ticks
console.log(`Hello my name is ${name} and i have ${repoCount} repos`);

//Another Way to declare string
const gameName = new String("Beigh Farooq")

//Methods in strings
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('q'));
console.log(gameName.substring(0,7));
console.log(gameName.slice(3,5));
const newStringOne ="    hitesh    "
console.log(newStringOne.trim());
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('%20'));
console.log(gameName.split(' '));
console.log(gameName.concat(url));















