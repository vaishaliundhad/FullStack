
/* 1. Write a JS function that reverse a number. 
Example x = 15438;
Expected Output : 83451 */ 
 
// let string = prompt('Enter a number: '); 
// { 
     
// function reverseString(str)
//  { 
 
//     let newString = ""; 
//     for (let i = str.length - 1; i >= 0; i--) 
//     { 
//         newString += str[i]; 
//     } 
//     return newString; 
// } 
 
// let result = reverseString(string); 
// console.log((+result)); 
// console.log(typeof result);
// } 



/* 2. Write a JS function that returns a passed string with letters in alphabetical order. 
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string. */


// function getRearrange() {
//   let str = document.getElementById("str").value;
//   console.log(str);
//   let array = str.split("");
//   console.log(array);
//   array.sort();
//   str = array.join("");
//   document.getElementById("result1").innerHTML = str;
//   document.getElementById("result1").style.color = "red";
// }


/* 3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
   Example string : 'the quick brown fox'
   Expected Output : 'The Quick Brown Fox' */

// {
//   function firstCharCapitalize(str){
//       wordArray = str.split(' ');
//       for(let i = 0; i < wordArray.length; i++){
//           wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
//       }

//       capitalStr = wordArray.join(' ');

//       return capitalStr;
      
//   }
//   console.log(firstCharCapitalize('javascript with a happiness'));
// }

/* 4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
   Example string : 'Web Development Tutorial'
   Expected Output : 'Development' 
*/

{
  // function longStr(str){
  //     let charArray = str.split(' ');
  //     let newArray = [];
  //     for(let i = 0; i < charArray.length; i++){
  //         newArray[i] = charArray[i].length;
  //     }

  //     let count = 0;
  //     for(let i = 0; i < newArray.length; i++){
  //         if(count < newArray[i]){
  //             count = newArray[i];
  //         }
  //     }

  //     for(let i = 0; i < newArray.length; i++){
  //         if(charArray[i].length == count){
  //             return charArray[i];
  //         }
  //     }
  // }
  // console.log(longStr('Hello Javascript'));
}
  
 

/* 5. Write a JavaScript function that checks whether a number is perfect.*/

// function perfectnum(Number){

//    let Number = prompt('Enter a Number: '); 
//    let temp=0;
     
//      for(let i=1; i<=Number/2; i++)
//      {
//         if(Number%i===0)
//         {
//             temp+=i;
//         }
//      }

//      if(temp===Number && temp !==0)
//      {
//         console.log("it is a perfect number");
//      }
//      else
//      {
//         console.log("it is not perfect number");
//      }
// }

// perfectnum(15)




