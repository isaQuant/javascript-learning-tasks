// Single quotes and double quotes
var string1 = "this is a String";
var string2 = 'this is also a String';
let lengthString1 = string1.length;


// using double quotes inside a String
var myString = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myString)

/***
 CODE OUTPUT
 \'     single quote
 \"     double quote
 \\     backslash
 \n     newline
 \r     carriage return
 \t     tab
 \b     backspace
 \f     form feed
 ***/

// concatenate two Strings
var str = "I come first. ";
str += "I come second.";
console.log(str)

// character of a String
var firstName = "Ada";
let secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName)

// extracting String parts
let fruits = "Apple, Banana, Kiwi";
let partOfFruits = fruits.slice(7,13);
console.log(partOfFruits);
