/*1)You can access the specific char in the string by using square bracket syntax []
you have to provide the index of the char you have to access starting from 0
 */
const language = "Javascript";
console.log(language[0]);//-----J
console.log(language[1]);//-----a


/* 2)combining it with length */
const lang = "Javascript";
let text = lang[lang.length-2]//10-2=8,--lang[8];
console.log(text);//----------p

lang [lang.length]//-------undefine 
/*3)bec char acces start at 0----lang[0] length start count from 1
so for string javascript havig length 10 but when accessing using square bracket it start with zero 
javascript length is 10 but char 9 is the last position of char .
*/

/*4).at(index) method 
2022 js has .at() method that reads the char at a certain index which can also be negtive 
*/
const lan = "javascript";
lan.at(0);//--------j
lan.at(1);//--------a
lan.at(-1);//--------t
lan.at(-2);//-------p

// when negative index used you start countring from the end 
// -1 is the last char , -2 is the sencond last char 


/*if negative index we use in square bracket gives undefine 
language[-1] ------undefine
so when ever you want to use negative index you should use the .at() method 

*/