/*String := you can create stinrg in js bu using the double quotes("")or single quotes('')
"this is a string "
'This is another String'

String property .length 
it is used to return the length of the string .
length start with 1 .....

ex 
"Nice!".length;----//5
"Hello World".length-------11

length should not have parentheses () after it bec it is a property 
whereas .toLowerCase() --is a method that having () because its an action that you are performing .
*/
let text = "hello world";
text.length ;  // 11

//define char lengh count function 
function getCharCount(str){
    return str.length;
}

/* Basic String methods 
.toLowerCase()--this will return a new string that has all of its char in lower case ;
.toupperCase()-- this will return a new string that has all of its char in upper case ;

*/

let t1 = "BLUE".toLowerCase();
console.log (t1);

let t2 = "blue".toUpperCase();
console.log (t2);

// using function 
function shoutmyName(name){
    return name.toUpperCase();
}

//console.log(...) is used for debugging and is NOT a replacement for return.