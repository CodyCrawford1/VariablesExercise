// 1
// Const is used for a variable with a value that will not change
// 2
let num = 20;
// 3
num = 15;
// 4
num = num + 7
// 5
num = num - 1
// 6
num = "This is not a number"
// 7
let blank
// 8
console.log(blank);
// 9
const blank = null;

// Bonus
// 1
const quarter = 0.25, dime = 0.10, nickel = 0.05, penny = 0.01;
// const [quarter, dime, nickel, penny] = [ 0.25, 0.10, 0.05, 0.01]
// const quarter = 0.25; const dime = 0.10; const nickel = 0.05; const penny = 0.01

// 2 
console.log(quarter, dime, nickel, penny); // 0.25 0.1 0.05 0.01
// console.log(quarter + " " + dime + " " + nickel + " " + penny);

// 3
let letters = "qwertyuiop"

// 4
console.log(letters[letters.length - 1]); // p