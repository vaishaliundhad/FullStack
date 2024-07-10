/*  javascript  Break  And Continue statement  */

/* break statement */

// {
//     for(i=0; i<10; i++)
//         {
//             if(i==6)
//                 {
//                     break;
//                 }
//                 console.log('break loops ');
//         }
// }

/* continue statement */
// {
//     for(i=0; i<10; i++)
//         {
//             if(i==6)
//                 {
//                     continue;
//                 }
//                 console.log('break loops ');
//         }
// }

/* nested loop */

// {
//     demo:for(i=0; i<10; 1++){
//         if(i==5)
//             {
//                 break;
//             }
//             console.log('main loop')
//         }
//         {
//         if(i==2)
            
//             {
//                 continue;
//             }
//             console.log('main loop')
//         }

// }


/* call back function */
// {
//      function num (a,b,callback){
//         callback()
//         return a+b
//      }

//      function callback(){
//         console.log(`This is  callback  function`);
//      }

//     //  console.log(sum(20,30,callback));
// }
// {
//     function sum(a,b)
//     {
//         function callback() {
//             console.log(`This is a  callbackfunction`);
//         }
//         callback()
//         return a+b
//     }

//     console.log(sum(20,30));
// }

/*   IIFE */

// (Function()
// {
//     console.log('helo IIFE ');
// }
// )()

// const func=(()=> console.log('iife'))

// (function(name){
//     console.log(name);
// })

// ('helo world!')


/* javascript string method*/


/* string.prototypes */

/* javascript  string.trim() */

/*
  trim() / trimstart()  /trimEnd()

    trim():-  The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.


    trimstart():-  The trimStart() method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. trimLeft() is an alias of this method.

    trimEnd():-   The trimEnd() method of String values removes whitespace from the end of this string and returns a new string, without modifying the original string. trimRight() is an alias of this method.

*/

// {
//      let str='This is a javascript  string method !'
//               1234567890123456789012345678901234567890
//                0123456789012345678901234567890123


//             console.log(str.length);

//             let str1= str.trim()

//             console.log(str1);

//             console.log(str1.length);

//             let str2=str.trimStart()

//             console.log(str2);

//             let str3=str.trimEnd()

//             console.log(str3);
// }

/* javascript  string.chartAt() / string.chartcodeAt() method */

/*
string.chartAt():-  The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.

string.chartcodeAt():-  The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

*/

//string.charAt(index)
//string.charcodeAt(index)

// {
//     let str=' this is a javascript  string method!'
//     1234567890123456789012345678901234567890
//     0123456789012345678901234567890123

//     let char1 = str.charAt(-11)
//     console.log(char1);

//     let char2 = str.charcodeAt(12)
//     console.log(char2);
// }


/* javascript  string.at() method*/

// The at() method of String values takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.

//at(index)

// {
//     let str='hello javascript!'
//              01234567890

//     let  At =str.at(-10)

//     console.log(At);



// }

/* javascript  string.includes() Method*/

// String.includes():-

// The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate


// includes(searchstring)
// includes(searchstring , position)

// {
//      let str='javascript string  includes!'
//               01234567890123

//      let include=str.includes('v')
     
//      console.log(include);

//      let include1=str.includes('s',12)// asque value
     
//      console.log(include1);
// }

