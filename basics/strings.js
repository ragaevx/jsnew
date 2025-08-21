const name = "raghav"
const repoCount = 50

// console.log (name + repoCount + " Value");

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('raghav-ex')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('4'));

// console.log(gameName.indexOf('x'));

const newString = gameName.substring(0, 4,)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); 

const newStringOne = "   raghav   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://raghav.com/raghav%20dev"

console.log(url.replace('%20', '-'))

console.log(url.includes('bhagat'))

console.log(gameName.split('-'));

// refer this :  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

