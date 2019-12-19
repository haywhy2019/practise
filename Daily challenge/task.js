

//write a function that changes the  p pharagraph when the page is loaded

// const first= document.getElementById('p1');
// const second = document.getElementById('p2');
// const third = document.getElementById('p3');

// window.addEventListener('load', myFunction);

// function myFunction(){
//     first.innerText = 'function1 was called'
//       second.innerText = 'function2 was called'
//       third.innerText = 'function3 was called'
    

// }

// write a function that takes in compares two words and returnds false if a word contained in the
//second is not in the first adn true if all the words in the latter is in the first



// function compare(arr) {
//   var arr1 = arr[0].toLowerCase();
//   var arr2 = arr[1].toLowerCase();
//   var first = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     if(arr1.includes(arr2[i])){
//       first+
//     }
//   }
//     if(first==arr2.length){
//       return true
//     }else{
//       return false
//     }
//   }
//   compare(['word','dori'])



  // write a function that returns the largest number in an array

//   function largestOfFour(arr) {
//     let number = [];
//     for (i = 0; i < arr.length; i++) {
//         number.push(Math.max(...arr[i]))
//     }
//     return number
// }
// console.log(largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1]
// ]))

//write a function that sums a range of number from min to max

// function addNumber(arr){
//   var sum = 0
// for (let i = Math.min(...arr); i<= Math.max(...arr); i++){
//   sum += i
// }
// return sum
// }
// addNumber([1,4])

// // write a function that returns a unique string of letters

// function uniqueStrings(a) {
//   var word = ''
//   for (let i = 0; i <= a.length; i++) {
//       if (word.index(a.charAt(i)) < 0) {
//           word += a.charAt(i);
//       }
//   }
//   return word;
// }
// uniqueStrings('thequickbrownfoxjumpsoverthelazyfox')


//write a function that sorts an array

/* <button id="button">Click on me!</button>

<script>
  button.onclick = function(event) {
    if (event.altKey && event.shiftKey) {
      alert('Gbosa!');
    }
  };
</script> }*/

/*"Gbosa" would be alerted only when the if conditional statement is met, which
 is the altKey and shiftKey must be pressed when the onClick event occurs */

// arr = []

// function sortArray(arr) {
//   arr.sort(function(a, b){return a - b});

// }
// sortArray([25, 7, 34, 48])

// // write a function that prints a triangle
// function symbol(){
//   for( let x = '*'; x.length<=7; x = x+'*'){
//  console.log(x)
//   }
 

//   }
//   symbol()

// Write a function to create a clock.
// Note: The outcome will come every second.
// Expected console output
// 10:20:42
// 10:20:43
// 10:20:44
// 10:20:45

// const tick = () => {
//   let day = new Date();
// 	console.log(day.toLocaleTimeString());
// };

// let timer = setInterval(tick, 1000);


//Challenge:
// Write a JavaScript function to validate if a given value type is a pure json object or not.
// Sample:
// console.log(isJson({location: 'Lekki'}))  true
// console.log(isJson('chair'))  false
// console.log(isJson(54))   false

// function testJSON(obj){
//     if (typeof(obj) === 'object'){
//         return true;
//     } else{
//         return  false;
//     }
// }
  
// console.log(testJSON({input: 'value'}));

// function sumInput(){
 
//   let numbers= [];

// while (true) {
//   let input = prompt('input a number', 0);
//   if(input === "" || input === null || input === !isFinite(input)) break;

//   numbers.push(+input);
// }
  
//   let sum = 0;
//   for(let number of numbers){
//     sum+=number;
//   }
//   return sum;
// }

// alert(sumInput());

//  function addNumber(arr) {
//      var sum = 0;
//      for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//          sum += i;
//      }
//      return sum;
//  }



//  console.log(addNumber([1, 4]))
// function sumNumber(number) {
//     var result = 0;
//     for (var i = 0; i <= number; i++) {
//         result += i;
//     }
//     return result
// }
// console.log(sumNumber(5))

// Morning challenge for today:
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"]should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


// function compare(arr) {
//     var arr1 = arr[0].toLowerCase();
//     var arr2 = arr[1].toLowerCase();
//     for (let i = 0; i <= arr1.length; i++) {
//         if (arr1[i].includes(arr2[i])) {
//             continue;
//         } else {
//             return false;
//         }
//     }
//     return true


// }
// console.log(compare(['word', 'dow']))


// Write a JavaScript function that accepts a string and returns unique characters from it.
// e.g thequickbrownfoxjumpsoverthelazydog
// should return thequickbrownfxjmpsvlazydg

// function uniqueStrings(a) {
//     var word = ''
//     for (let i = 0; i <= a.length; i++) {
//         if (word.indexOf(a.charAt(i)) < 0) {
//             word += a.charAt(i);
//         }
//     }
//     return word;
// }
// uniqueStrings('thequickbrownfoxjumpsoverthelazyfox')

//check
//https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations

// Good morning @channel here is your morning challenge for today:
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
// Submit via google doc in your TA's channel


// Good morning @channel here is your morning challenge for today:
// Write a function that accepts a ‘string’ of 10 numbers (between 0 and 9), and returns a string of those numbers in the form of a phone number.
// Example: createPhoneNumber('1234567890') // => returns '(123) 456-7890'
// - Check if the string length is equal to 10, if not, alert a message
// - Ensure to convert the string to an array in your code

// Write a function that returns an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])should return an array.
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])should return [27, 5, 39, 1001].
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])should return [9, 35, 97, 1000000].
// largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])should return [25, 48, 21, -3].

// Good morning @channel, welcome to class.
// Morning challenge for today:
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// function sortArray(a, b) {
//     return (b - a)
// }
// console.log(sortArray([25, 7, 34, 48]))


Challenge:
// Write a JavaScript function to validate if a given value type is a pure json object or not.
// Sample:
// console.log(isJson({location: 'Lekki'}))  true
// console.log(isJson('chair'))  false
// console.log(isJson(54))   false

// input= () =>{ obj === isJson({input: 'value'}) ? console.log('true'): console.log('false')}

// console.log(input(isJson({location:'lekki'})))


// function json(obj){
//     if(typeof obj === Json({})){
//         console.log('true')
//     }else{
//         console.log('false')
//     }
// }
// console.log(json({location:'value'}))

// function testJSON(obj){
//     if (typeof(obj) === 'object'){
//         return true;
//     } else{
//         return  false;
//     }
// }
  
// console.log(testJSON({input: 'value'}));


// Write a function that accepts a word and returns the number equivalent based on alphabet a - z
// Sample
// If　a = 1, b = 2, c = 3 ... z = 26
// Then l + o + v + e = 54
// and f + r + i + e + n + d + s + h + i + p = 108
// So friendship is twice stronger than love :-)

// const alphaNumeric = word => {
//   let alphabets = "abcdefghijklmnopqrstuvwxyz";
//   let letterList = word.split('');
//   let letter;
//   let total = 0;
//   for( letter of letterList ) {
//     total += ( alphabets.indexOf(letter) + 1 );
//   }

//   return total;
// }

// alphaNumeric('love');

// Given a collection,
// students = [
//   {name: "Olu", age: 20, gender: "male"},
//   {name: "John", age: 14, gender: "male"}
// ]
// Write a MongoDB query to insert a document with name, age and gender properties.


// use students

// db.students.insertMany([{name: "Olu", age: 20, gender: "male"},
//   {name: "John", age: 14, gender: "male"}])


// MongoDB Exercise in mongo shell
// Connect to a running mongo instance, use a database named `mongo_practice`.
// Document all your queries in a javascript file to use as a reference.
// ## Insert Documents
// Insert the following documents into a movies collection.
// ```




// ## Query / Find Documents
// query the `movies` collection to
// 1. get all documents
// 1. get all documents with `writer` set to "Quentin Tarantino"
// 1. get all documents where `actors` include "Brad Pitt"
// 1. get all documents with `franchise` set to "The Hobbit"
// 1. get all movies released in the 90s
// 1. get all movies released before the year 2000 or after 2010

db.createCollection('movies')
db.movies.insertMany([

	{title : 'Fight Club',writer : 'Chuck Palahniuk',
		year : '1999',actors : ['Brad Pitt','Edward Norton']},

	{title : 'Pulp Fiction',writer : 'Quentin Tarantino'
		year : '1994',actors : [  'John Travolta','Uma Thurman']},

	{title : 'Inglorious Basterds',writer : 'Quentin Tarantino',
		year : '2009',actors : ['Brad Pitt','Diane Kruger','Eli Roth']},

	{title :' The Hobbit: An Unexpected Journey',writer : 'J.R.R. Tolkein',
		year : "2012",franchise : 'The Hobbit'},

	{title : 'The Hobbit: The Battle of the Five Armies',writer : 'J.R.R. Tolkein'
		year : '2012',franchise : 'The Hobbit',
		synopsis : 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.'
	},

	{title : "Pee Wee Herman's Big Adventure"},

	{title: 'Avatar'}
])

// db.movies.find().pretty()

// db.movies.find({writer:'Quentin Tarantino'})

// db.movies.find({actors:{$in:['Brad Pitt']}})

// db.movies.find({franchise: 'The Hobbit'})

// db.movies.find({year: {$lt:'2000'}})

// db.movies.find({$or: [ {year: {$lt: '2000'}}, {year:{$gt: '2010'}} ]})

// given a HTMLAllCollection
// Write a query statement to select documents with titles that match the word Book
// Hint: use $regex operator

// books = [
//     {id: 1, title: "Book one"},
//     {id: 2, title: "Book two"},
//     {id: 3, title: "Web tools"}
//   ]
  
// db.books.find({title: {$regex: /^Book.*/}})

// Given a Collection
// students = [
//   {id: 1, name: "Segun", results: [50, 40, 70]},
//   {id: 2, name: "Olu", results: [70, 75, 10]},
//   {id: 3, name: "James", results: [80, 87, 88]},
//   {id: 4, name: "Helen", results: [90, 95, 90]},
// ]
// Write a query statement to know the number of documents that contain 
// at least one score in the results array that is greater than or equal to 70 and less than 80

// db.students.find(result: { $elemMatch: { $gte: 70, $lt: 80 }.count() )



