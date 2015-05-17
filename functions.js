/*
 * PROBLEM `checkData`: (easy)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */


function checkData(inputString) {
		if(typeof inputString !== "string"){throw('Invalid Input');}
		if(inputString.length === 3){return true;}
		if(inputString.length > 3){return false;}
		if(inputString.length < 3){return false;}
		;}







/*
 * PROBLEM `concatenateArrays`: (easy)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */



function concatenateArrays(a,b){

if(a.length>b.length){var apple = a.length;}
if(a.length<=b.length){var apple = b.length;}

if(Array.isArray(a) !== true){throw("Invalid Input");}

if(Array.isArray(b) !== true){throw("Invalid Input");}




for(var y = 0;y < (a.length);y++){if (a[y] % 1 !== 0){throw("Invalid Input");};}	
for(var z = 0;z < (b.length);z++){if (b[z] % 1 !== 0){throw("Invalid Input");};}



for (var i = 0; i <= b.length-1; i++){

	a.push(b[i]);}
return a;

}

//concatenateArrays([4,3,3,2,2.7],[4]);									
 	

 	










/*
 * PROBLEM `fixProperNoun`: (easy)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */




function fixProperNoun(noun) {
	// your code goes here
if(typeof noun !== "string"){throw('Invalid Input');}
//if(noun = ''){throw('Invalid Input');}

if(noun.length==0){throw('Invalid Input');}



return noun.charAt(0,1).toUpperCase() + noun.slice(1,(noun.length)).toLowerCase();


};

fixProperNoun("kEith");





/*
 * PROBLEM `sortLetters`: (easy)
 * Write a function called `sortLetters` that returns a string that sorts all 
 * the letters from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */


function sortLetters(inputString) {
if(typeof inputString !== "string"){throw('Invalid Input');}


//if(inputString.length===0){throw('Invalid Input');}

var keithisawesome = inputString.split("");
austintexas = keithisawesome.sort();
console.log(austintexas);
var houston = austintexas.join("");
return houston;
};

sortLetters("people");

/*
 * PROBLEM `absVal`: (easy)
 * Write a function called `absVal` that return the absolute value of a given 
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function absVal(integer) {
if(integer%1 !== 0){throw "Invalid Input";}
if(typeof(integer) === "object"){throw "Invalid Input";}
if(!String(integer).trim()===true){throw "Invalid Input";}
if(parseInt.integer === null){throw "Invalid Input";}
//if((!a.trim()) == ''){throw "Invalid Input";}
//var cow = integer.match(/[a-z]/i);
//if (cow !== null){throw "Invalid Input";}
if(String(integer).match(/[a-z]/i) !== null){throw "Invalid Input";} 	
if(integer<0){integer=0-integer;}
var b = parseInt(integer);
if(typeof(b) !== "number"){throw "Invalid Input";}
if(typeof(b) === NaN){throw "Invalid Input";}
return b;




	// your code goes here
};absVal(7);

/*
 * PROBLEM `myMin`: (easy)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function myMin(a,b){

if(a%1 !== 0){throw "Invalid Input";}
if(b%1 !== 0){throw "Invalid Input";}
if(!String(a).trim()===true){throw "Invalid Input";}
if(!String(b).trim()===true){throw "Invalid Input";}
if(a === null){throw "Invalid Input";}
if(b === null){throw "Invalid Input";}

if(a<=b){return(a);}
if(a>b){return(b);}

};

/*
 * PROBLEM `myMax`: (easy) - Actual Interview Question
 * Write a function called `myMax` that takes an array of integers ans returns
 * the largest.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without using a for loop.
 */

 function myMax(a){

if(typeof(a)!=="object"){throw "Invalid Input";}
 //	for(var a = 0;(a < pickles.length - 1);a++){}
//if(!Object(a)===true){throw "Invalid Input";}

if(a==(null)){throw "Invalid Input";}
if(a==(undefined)){throw "Invalid Input";}
if(a==(NaN)){throw "Invalid Input";}
if(Object.keys(a).length === 0){throw "Invalid Input"};

//if(typeof(a[0])==="string"){throw "Invalid Input";}
//if(typeof(a[1])==="string"){throw "Invalid Input";}
//if(typeof(a[2])==="string"){throw "Invalid Input";}
for(var m = 0;m<a.length;m++){if(typeof(a[m])=== "string"){throw "Invalid Input";} ;}
for(var f = 0;f<a.length;f++){if(a[f]%1!==0){throw "Invalid Input";} ;}
var couch = Math.max.apply(null,a);
return couch;


}; myMax([1,2,3,4.5]);



 





/*
 * PROBLEM `getMonth`: (easy)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function getMonth(a){


if(a===1){return"January";}
if(a===2){return"February";}
if(a===3){return"March";}
if(a===4){return"April";}
if(a===5){return"May";}
if(a===6){return"June";}
else if(a===7){return"July";}
else if(a===8){return"August";}
else if(a===9){return"September";}
else if(a===10){return"October";}
else if(a===11){return"November";}
else if(a===12){return"December";}
else {throw "Invalid Input";}
};





/*
 * PROBLEM `randomElement`: (medium)
 * Create a function called `randomElement` that takes an array of values and
 * returns one randomly selected value from that array.
 */


function randomElement(a){
	if(typeof(a)!=="object"){throw "Invalid Input";}
	if(Object.keys(a).length === 0){throw "Invalid Input"};

	var keithIsCool = a[Math.floor(Math.random()*a.length)];
	return keithIsCool;

};randomElement([1,2,3,4,5,6,7]);


/*
 * PROBLEM `studentPairs`: (medium)
 * Create a javascript function called `studentPairs` that takes an array of
 * student names and returns an array of randomly selected pairs of students
 * (array of arrays).
 */

function studentPairs(a){

	if(typeof(a)!=="object"){throw "Invalid Input";}
	if(Object.keys(a).length === 0){throw "Invalid Input"};

	var keithIsCool = 0;
	var keithIsFat = 0;
	for(var m = 0;a.keithIsCool!==keithIsFat;m++){
		keithIsCool = a[Math.floor(Math.random()*a.length)];
		keithIsFat = a[Math.floor(Math.random()*a.length)];
		if(keithIsCool!==keithIsFat){return keithIsCool+" "+keithIsFat;} 
	;}

};studentPairs(["keith","x","asdfasd","asdfadfs","duke"]);




/*
 * PROBLEM `sumSquares`: (medium)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function sumSquares(a){

//	if(String.a.test(/[^0-9]/g) === true){throw "Invalid Input";}
	if(isNaN(a) === true){throw "Invalid Input";}
	if(a%1 !== 0){throw "Invalid Input";}
	if(a===(null)){throw "Invalid Input";}
	//if(a===(NaN)){throw "Invalid Input";}
	if(a===(undefined)){throw "Invalid Input";}
	if(typeof(a)!=="number"){throw "Invalid Input";}

	if(a<1){throw "Invalid Input";}
	
	var sum = 0;
	for(var m=0;m<a+1;m++){
		sum = sum+m*m;
		if(m===a){return sum;}
	;}


};sumSquares(NaN);





/* 
 * PROBLEM `findMaxDiff`: (medium)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function findMaxDiff(a){
//if(isNaN(a) === true){throw "Invalid Input";}
if(a===(null)){throw "Invalid Input";}

	if(typeof(a)!=="object"){throw "Invalid Input";}
if(Object.getOwnPropertyNames(a).length === 0){throw "Invalid Input";}
if(a.length===0){return 0;}
if(a.length===1){return 0;}

	//if(a===(NaN)){throw "Invalid Input";}
	if(a===(undefined)){throw "Invalid Input";}
for(var m = 0;m<a.length;m++){

if(typeof(a[m])!=="number"){throw "Invalid Input";}
if(a[m]%1!==0){throw "Invalid Input";}

}


var d = [];
for(var m=0;m<a.length-1;m++){d.push(a[m]-a[m+1]);d.push(a[m+1]-a[m]);}
	

var couch = Math.max.apply(null,d);
return Math.abs(couch);


}; findMaxDiff([7,3]);




/*
 * PROBLEM `insertDashes`: (medium)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function insertDashes(a){

if(typeof(a)!=="string"){throw "Invalid Input";}



var res = a.split("",a.length);

var energy = res.join("-");



var abcd = energy.replace(/- -/g, ' ');
return abcd;

   // var iron = a.replace('', '-');
   // return iron;
	//var res = a.split("",a.length);
	//console.log(res);

};insertDashes('abba test goober');



/* 
 * PROBLEM `mySubstring`mySubstring: (medium)
 * Implement a function called `mySubstring` that can output the substring of 
 * the given string within specified bounds.
 * 
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 * 
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function mySubstring(a,b,c){

if(typeof(a)!=="string"){throw "Invalid Input";}

if(a.length===0){throw "Invalid Input";}
if(a.length===1){throw "Invalid Input";}
	var superman = a.split("");
	var newString = []
	for(var m=b;m<=c;m++){newString.push(superman[m])};
	return newString.join("");


};mySubstring("obfiscation",3,8);








/*
 * PROBLEM `splitSwap`: (medium)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 * 
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function splitSwap(a){
//	console.log(typeof(a));
//if(Array.keys(a).length==0){return "[]";}
//if(a==="[]"){return a;}

if(typeof(a)!=="object"){throw "Invalid Input";}

if(typeof(a)==="number"){throw "Invalid Input";}
if(a === null){throw "Invalid Input";}
if(a.String === "[]"){throw "[]";}
if(Object.getOwnPropertyNames(a).length === 0){throw "Invalid Input";}
//if(Object.keys((a).length) == 0){throw "Invalid Input";}
if(a.length<2){return a;}
if(a.length===2){var c = [];c.push(a[1]);c.push(a[0]);return c;}
if(a.length===3){var p = [];p.push(a[1]);p.push(a[2]);p.push(a[0]);return p;}
var house = a.slice(0,Math.floor(a.length/2));

var boat = a.slice(Math.floor(a.length/2),((Math.floor(a.length/2))*2));


var c = boat.concat(house);

var last_element = a[a.length - 1];


if(a.length%2!==0){c.splice(Math.floor(a.length/2), 0, last_element);}
return c;

//if(a.length%2!==0){var godzilla = c.push(a.splice((Math.floor((a.length/2),0,(-1)[0])));}
//return godzilla;}
									 
};splitSwap([]);

/*
 * PROBLEM `smallMultiples`: (medium)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.


 */
///-------- THIS FUNCTION WORKS CORRECTLY. SOMETHING IS WRONG WITH THE TEST
function smallMultiples(n,k){
if(Number.isNaN(k)){throw "Invalid Input";} 
if(typeof(n)!=="number"){throw "Invalid Input";}
if(typeof(k)!=="number"){throw "Invalid Input";}




	var apple = [];
	for(var m = 2;k*m<=n;m++){
		
			apple.push("happy");
	//		if(m*k>=n){return apple;
		
	}
	{return apple.length;}		        
	//};


};smallMultiples(1,NaN);





/* 
 * PROBLEM `rot13`: (hard)
 * Create a function called `rot13` that takes an unencrypted string and returns
 * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `derot13`: (hard)
 * Create a function called `derot13` that takes a ROT-13 encrypted string and
 * returns the decrypted version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `rotn`: (hard)
 * Create a function called `rotn` that takes an unencrypted string and an
 * integer (n) and returns the ROT-N version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `findBoth`: (hard)
 * Write a function called `findBoth` that takes two arrays of integers a and b 
 * returns an array that includes only the elements that appear in both a and b.
 * A value should not appear more than once in the returned array.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `countBoth`: (hard)
 * Write a function called `countBoth` that takes two arrays of integers a and 
 * b. The function should return the number of elements that exist in both a and
 * b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/* 
 * PROBLEM `isDiagonalMatrix`: (hard)
 * In linear algebra, a square matrix (array of arrays) is called a diagonal 
 * matrix if all entries outside the main diagonal are zero (the diagonal from 
 * the upper left to the lower right).
 * For example:
 * [
 *   [1, 0, 0],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is a diagonal matrix.
 *
 * [
 *   [1, 0, 2],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is not a diagonal matrix.
 *
 * [
 *   [1, 0, 0],
 *   [0, 2, 0]
 * ]
 * is not a diagonal matrix.
 *
 * Write a function called `isDiagonalMatrix` that takes a matrix and returns
 * true if the matrix is a diagonal matrix. Otherwise return false.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `isAnagram`: (hard) - Actual Interview Question
 * An anagram is a type of word play, the result of rearranging the letters of a
 * word or phrase to produce a new word or phrase, using all the original
 * letters exactly once.
 *
 * Write a function called `isAnagram` that takes two arrays of strings of equal 
 * lengths arr1 and arr2. The function should return a new array of the same 
 * length as the input with boolean values at each position i. The boolean value
 * at position i of the result array should be true if the strings at position i
 * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
 * position i of the result array should be false.
 *
 * For example:
 * isAnagram(
 * 		['cinema', 'shot', 'aba', 'rain'],
 * 		['iceman', 'hots', 'bab', 'train']
 * ) === [true, true, false, false];
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `validateParentheses`: (hard) - Actual Interview Question
 * Write a function called `validateParentheses` that takes a string of
 * parentheses. The string can contain the following characters repeated any
 * number of times in any order: ()[]{}
 *
 * The function should return true if the parentheses are in a valid order and
 * false if they are not. One type of parentheses cannot close before it has
 * been opened and one type of parentheses cannot be closed while a different
 * type of parentheses is open. All parentheses that are opened must also be
 * closed.
 *
 * For example:
 * validateParentheses(']') === false;
 * validateParentheses('[') === false;
 * validateParentheses('[]') === true;
 * validateParentheses('{[]}') === true;
 * validateParentheses('([)]') === false;
 * validateParentheses('{[(){()}]}') === true;
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/* 
 * PROBLEM `flattenArray`: (hard) - Actual Interview Question
 * Write a function called flattenArray that takes an array of any type of
 * element, and flattens it, such that any element in the given array that is an
 * array is converted to a list of non-arrays. For example:
 *
 * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
 * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without recursion.
 */


