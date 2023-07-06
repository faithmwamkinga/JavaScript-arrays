/*Arrays
Find the last element of the following arrays.
arr1 = [3,7,34,90,12]
arr2 = [true, "green", "where",12,56]
 */
let arr1 = [3,7,34,90,12];
let otherarray = arr1[arr1.length-1];
//let otherarray = arr1.slice(-1);
//console.log(otherarray);
console.log(otherarray);
let arr2 = [true, "green", "where",12,56];
let myarray = arr2[arr2.length-1];
console.log(myarray);








let string =  "myname";
let mnew =string.substring();
console.log(mnew);



/*Write a JS program that will join the following array elements into a string
myP
let = ["Cow", "Python", "Snake", "Dog"];
 */
let myPets= ["Cow", "Python", "Snake", "Dog"];
 let mystring = myPets.join();
 console.log(mystring);
 //.toString eg console.log(myPets.toString())
 //console.log

 /*Sort arrays
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ]; */
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3.sort();
var arr7 = arr3.reverse();
console.log(arr7);

/*Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"]; */

 var fruits = ["apple", "mango", "apple",
 "orange", "mango", "mango"];
 fruits
  var newFruits = [...new Set(fruits)];
  

console.log(newFruits);

// var personl = [];
// arr1.forEach(item=>{
//   if (!personl.includes(item)){
//     personl.push
//   }
// })
// console.log()
/*Write a JS script to search for the following word in the array.
4
If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4, 23]; */


//  let arr5 = ["the", "way", "x", 4, 23];
// if()

/*Write a JS script to sort the following string
let word = "lufituaeb" */

// let alphabets = "lufituaeb";

// console.log(alphabets.sort());
let arrayyy =[2,3,4,5,6,7];
let sarray = [48,9,10];
let arraythree =arrayyy.concat(sarray);
console.log(arraythree);

let mercy = [24,22,20,30];
let joy = [];
mercy.forEach(item => {
  
  joy.push(item*2 ) 
  
});
console.log(joy)

let fefe = [34,45,67,89];
let y=fefe.map(function(item){
  return item*4
})
console.log(y);

let fifi =[78,90,89,89,90,56];
fifi
var newfifi=[...new Set (fifi)]
console.log(newfifi)
console.log(fifi.pop())

let rose = [1,2,3,4,4,5,6,7,7];
rose
let newRose = [...new Set(rose)]
console.log(newRose);

let angel = ["angel","glory","rose","joune"];
if (anyname<nname){

}
console.log(angel.filter)
console.log(angel.join(""))

// console.log(fifi.find(0));


// let harray =arrayyy.findIndex(arrayy(7));
// console.log(arrayyy);
