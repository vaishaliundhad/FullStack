/*  javascript  string methods */

/* javascript string.slice() method  */

//    The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.


//   slice(indexstart)
//   slice(indexstart,indexend)

// {
//      let str='this is a javascript string method!'
//               01234567890123456789012345678901234

//       let result=str.slice(-8)
//       console.log(result);       
      
//       let result1=str.slice(10,-10)
//       console.log(result1);
// }


 /* javascript  string.substring() */

// The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.


// substring(indexstart)
// substring(indexstart,indexend)


// {
//     let str='this is javascript string method!'
//              012345678901234567890123456789012

//              let result1=str.slice(34)
//              console.log(result1);       
      
//              let result2=str.slice(8,-20)
//              console.log(result2);

// }

// /* javascript string.concat() method */

// The concat() method of String values concatenates the string arguments to this string and returns a new string.

// concat()
// concat(str1)
// concat(str1,str2)
// concat(str1,str2,/* ..., */strN)
// {
//     let str1="this"
//     let str2='is javascript'
//     let str3='string method!'

//     let result=str1.concat(str2)

//     console.log(result);

//     let result2=str1.concat(str3,str2)

//     console.log(result2);
// }


/* javascript  string.strartwith() / string.endwith()  */

// The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.

// The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.



// {
//     let str=' This is javascript string method! '
//             //  01234567890123456789012345678901234

//     let  result1=str.startswith(' ')
//     console.log(result1);

//     let result2=str.startwith(' ',10)
//     console.log(result2);

//     let result3=str.endwith(' ')
//     console.log(result3);

//     let result4=str.endwith('!',34)
//     console.log(result4);
    
    
// }

/* javascript  string.indexof() method  */


// The indexOf():

// method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.


// lastindexof():

// The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.


// indexOf(searchstring)
// indexOf(serchstring,position)

// lastIndexOf(searchstring)
// lastindexof(searchstring,position)

// {
//     let str='hi , i am javascript am!'
//              012345678901234567890123

//     let result1=str.indexOf('am')

//     console.log(result1);     
    
//     let result2=str.indexOf('am',8)

//     console.log(result2);

//     let result3=str.lastIndexOf('am')

//     console.log(result3);

//     let result4=str.lastIndexOf('am' ,24)

//     console.log(result4);

         
// }

/* javascript  string.padstart() / string.padend() */

//  string.padStart():

//      method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.

// string.padEnd():

//      The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.


// padstart(targetLength)
// padstart(targetLength,padstring)

// padEnd(targetLength)
// padEnd(targetLength,padstring)


// {
//      let str='this is  padstart method!'
//               1234567890123456789012345

//      let result1=str.padstart(30, '01')
//      console.log(result1);
     
//      let result2=str.padEnd(30,'01')
//      console.log(result2);


// }

/*  javascript  string.repeat() */

// The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.

// repeat(count)

// {
//     let str='helo'
//     let result =str.repeat(10)
//     console.log(result);
// }

// javascript string.touppercase / string string.tolowercase

// {
//     let str='helo'

//     let result1=str.toLocaleLowerCase()
//     let result11=str.toLowerCase()

//     console.log(result11);
    
//     let result2=str.toLocaleUpperCase()
//     let result22=str.touppercase()
    
//     console.log(result22);
// }

/* javascript string.spilt() method */

// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.


// spilt(separator)
// spilt(separator,limit)

// {
//     let str='hello'
//     let result =str.split(' ',2)
//     console.log(result);
// }


/* javascript str.valueof() method */


// The valueOf() method of String values returns this string value.

// value of()


{
    let str1='helo'
    let str2=new string('helo')

    let result1=str1.valueof()
    console.log(result1);
    console.log(typeof result1);

    let result2=str2.valueOf()
    console.log(result2);
    console.log(typeof result2);

    console.log(typeof str1);
    console.log(typeof str2);
}

