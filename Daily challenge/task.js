

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


