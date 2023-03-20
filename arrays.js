/*Arrays
Find the last element of the following arrays.
arr1 = [3,7,34,90,12]
arr2 = [true, "green", "where",12,56]
 */
let arr1 = [3,7,34,90,12];
let otherarray = arr1[arr1.length-1];
console.log(otherarray);
let arr2 = [true, "green", "where",12,56];
let myarray = arr2[arr2.length-1];
console.log(myarray);

/*Write a JS program that will join the following array elements into a string
myPets = ["Cow", "Python", "Snake", "Dog"];
 */
let myPets= ["Cow", "Python", "Snake", "Dog"];
 let mystring = myPets.join(" ");
 console.log(mystring);

 /*Sort arrays
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ]; */
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort());

/*Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"]; */

 var fruits = ["apple", "mango", "apple",
 "orange", "mango", "mango"];
 fruits
  var newFruits = [...new Set(fruits)];

console.log(newFruits);

/*Write a JS script to search for the following word in the array.
4
If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4, 23]; */

 let arr5 = ["the", "way", "x", 4, 23];
if()

/*Write a JS script to sort the following string
let word = "lufituaeb" */

let alphabets = "lufituaeb";

console.log(alphabets.sort());
