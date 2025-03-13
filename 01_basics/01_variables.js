const accountId=123456;
let accountEmail='beigh@bf.com';
var accountCity= 'Kashmir'; //dont use var because its has block and functional scope issues
accountState='Jammu and Kashmir';
let accountPin;

// accountId=789   TypeError: Assignment to constant variable.
// we cant modify const variables 
console.log(accountId,accountEmail,accountCity,accountState,accountPin);

accountEmail="beighbf@gmail.com"
accountCity='Hyderabad';
accountState="Hello Banguluru"

console.log(accountId,accountEmail,accountCity,accountState,accountPin);
console.table([accountId,accountEmail,accountCity,accountState,accountPin])


