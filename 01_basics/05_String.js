const name = "Priyanshu"
const repocount = 50

// console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('Priyanshu-hc-com')

// console.log(gameName[0]);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4)
console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "  Priyanshu   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "http://hitesh.com/hitesh%20Choudhary"
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));



