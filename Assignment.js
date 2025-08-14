/*JS assignment day (Data types)*/

/*1. Write a program that declares a variable using var, let, and const and prints the value to the console.*/

var a = 30;
let b = "Hello";
const pi = 3.14;
console.log(` First print: var is ${a} , let is ${b} and const is ${pi}`);

/*2. Write a program that reassigns a value to a variable declared with let and prints the new value to the console.*/

b = "Dona";
console.log(` Second print: let is ${b}`);

/*3. Write a program that tries to reassign a value to a variable declared with const and prints the message to the console.*/

// pi = "math variable";
console.log(` Third print: const is ${pi}`); //wrong output as const cannot be reassigned

/*4. Write a program to declare a const, let, var variable within an if statement and try to access the variable outside the if block, what is the result?*/

if (60> 10){
  var myvar="JavaScript"
let mylet=675.23
const max=100
console.log(` Within if block: var is ${myvar} , let is ${mylet} and const is ${max}`)
}
console.log(` Outside of if block: var is ${myvar} `); // this is possible
// console.log(` Outside of if block: var is ${myvar} , let is ${mylet} and const is ${max}`) this is wrong as let and cost is block scoped.

/*5.Write a program that concatenates two or more strings and prints the result to the console.*/

let string1="Hello";
let string2="World";
let newString=string1+" "+string2;
let newString2=string1.concat(" ",string2," ",string1)
console.log(`Final first string :${newString}`)
console.log(`Final second string : ${newString2}`)

/*6. Write a program that takes a string as input and prints the length of the string to the console.*/
let size=newString.length
console.log(`length of ${newString} is ${size}`)

/*7. Write a program that converts a string to uppercase and prints the result to the console. */

console.log(newString2.toUpperCase())












/*JS Assignment - 1 (Function and Arrays and their built in methods)*/

/*1. Given a string “Azad Ram Madiha Yash”. Return a string with the first letter of every word from the string. (Use built in methods).*/

const myStringOne = "Azad Ram Madiha Yash";

const myRes = (stringOne) => {
  let words = stringOne.split(" ");

  for (let i = 0; i < words.length; i++) {
    let first = words[i][0];
    console.log(first);
  }
};
myRes(myStringOne);

/*2. Given an array [1, -4, 12, 0, -3, 29, -150]. Calculate the sum of all positive numbers (use built in array methods).*/

let myArray = [1, -4, 12, 0, -3, 29, -150];
const positiveNum = myArray.filter(function (number) {
  return number > 0;
});

const performSum = positiveNum.reduce(function (sum, num) {
  return sum + num;
}, 0);
console.log(performSum);

/* 3.Given an array [1, 2, 3, 4, 5]. Create a new array with the square of each element(use built in array methods).*/

let myArray2 = [1, 2, 3, 4, 5];
const squaredNUmbers = myArray2.map(function (num) {
  return num * num;
});
console.log(squaredNUmbers);

/* 4. Write a function called multiplyBy that takes a number as input and returns a new function that multiplies any number passed into it by the original number. (hint: return function from mentioned function) */


function multiplyBy(originalVal){
  return function(num){
    return num*originalVal;
  };
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(5)); 

/*write a JS program to check if a string is a pangram or not.*/

function checkPanagram(str){
  let mainstr='abcdefghijklmnopqrstuvwxyz';

  const lettersOnly = str.replace(/[^a-zA-Z]/g,'');

  let myset=new Set(lettersOnly.toLowerCase());
  if ( myset.size >= mainstr.length){
    console.log("Panagram");
    }
  else{
    console.log("Not Panagram");
  }
}

checkPanagram("mlpokjniuhbYGVFTCDRESwzxAQ")