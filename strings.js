//Question One
//extracting characters from a string
const str ="extravaganza";
console.log(str.slice(8,12));

//Question Two
//inserting a string into another string
const food = "The quick fox jumped over a lazy fox";
let b = "eat";
const c = `The ${b} quick fox jumped over a lazy fox`;
console.log({c})

//Question Three
//counting how many times a string appears in a string
let story = " The quick brown fox jumps over the lazy fox";
console.log(story.match(/the/g).length || []);
console.log(story.match(/brown/g).length || []);

//Question Four
//finding a string a string 
let str1 = "The pupils are reading in the library.";
console.log(str1.search(/are/));
let str2 = "The child was sitting on the table before it fell";
console.log(str2.search(/sitting/));

//Question FIve
//converting to Uppercase
let word1 = "wondeful"
console.log(word1.toUpperCase())

//converting to Lowercase
let word2 = "amazing"
console.log(word2.toLowerCase())

//coverting to Lowercase
let word3 = "UndERneath"
console.log(word3.toLowerCase())

//converting to Title Case
let word4 = "A wonderful world"
console.log(word4.toUpperCase())


