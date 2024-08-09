/* 1. Write a program to convert temperatures between Celsius and Fahrenheit.*/

// let celcius = parseFloat(prompt("Enter a Celcius:"));
// let fahrenheit
// function hello() {
//     fahrenheit = ( (celcius*9)/5) + 32;
//     console.log(fahrenheit);
// }
// hello();

  

/* 2. Write a program that acts as a simple calculator performing addition, subtraction, multiplication, and division. */

// function add(a,b)
// {
//    return a+b;
// }

// function subtract(a,b) 
// {
//   return a-b;
// } 

// function multi(a,b) 
// {
//   return a*b;    
// }

// function division(a,b) 
// {
//   return a/b;    
// }



// const num1 = 10;
// const num2 = 5;

// console.log(`${num1} + ${num2} = ${add(num1,num2)} `);
// console.log(`${num1} - ${num2} = ${subtract(num1,num2)} `);
// console.log(`${num1} * ${num2} = ${multi(num1,num2)} `);
// console.log(`${num1} / ${num2} = ${division(num1,num2)} `);


/* 3. Write a program to find the largest of three numbers. */ 
 
// let a=prompt("Enter the number a") 
// let b=prompt("Enter the number b") 
// let c=prompt("Enter the number c") 
// { 
//     function larg(a,b,c)
//     { 
//         if(a>b && a>c)
//         { 
//             console.log("a is the large number") 
//         } 
//         else if(b>a && b>c)
//         { 
//             console.log("b is the large number") 
//         } 
//         else
//         { 
//             console.log("c is the large number") 
//         } 
//     } 
//     larg(a,b,c) 
// } 

/* 4. Write a program to find the factorial of a given number. */

// function factorial(n,i,fact)
// {
//     do
//  {
//     fact = fact * i;
//     i++;
//  }

//  while(i <= n);

//    console.log(`the Factorial Number of ${n} is`,fact);
// }

// factorial(6,1,1);


/* 5. Write a program to print the first n terms of the Fibonacci sequence.*/

// (function fibbonacci(i,n,a,b,p){
// for(i ; i <= n; i++)
// {
//     p = a + b;
//     a = b;
//     b = p;
//     console.log(p)
// }
// })
// (0,10,0,1)




 
/* 6. Write a program to reverse a given string. */ 

// let string = prompt('Enter a string: '); 
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
// console.log(result); 
// } 


 
/* 7. Write a program to check if a string is a palindrome. */ 

let palindrome = (str) =>{
    for(let i = 0;   i<str.length/2 ; i++)
    {
        if(str[i]!==str[str.length-1-i]){
            console.log("not palindrome")
        }
        else{
            console.log("palindrome");
        }
    }
}

/* 8. Write a program to find the sum of the first n natural numbers. */

// let x = 1;
// let sum = 0;
// function sumnumber(x,sum){
// for(x ; x <= 10 ; x++){
//     sum += x;
// }return sum
// }
// let c = sumnumber(1,0)
// console.log(c)
 


/* 9. Write a simple guessing game where the user has to guess a number between 1 and 10. */

// let number = prompt("Select Number:");
// function game(){
// switch(number){
//     case '1' : console.log("1");
//     break;
//     case '2' : console.log("2");
//     break;
//     case '3' : console.log("3");
//     break;
//     case '4' : console.log("4");
//     break;
//     case '5' : console.log("5");
//     break;
//     case '6' : console.log("6");
//     break;
//     case '7' : console.log("7");
//     break;
//     case '8' : console.log("8");
//     break;
//     case '9' : console.log("9");
//     break;
//     case '10' : console.log("10");
//     break;
//     default : console.log("Invalid..")
// }
// }
// game()

/* 10. Write a program to count the number of vowels and consonants in a given string. */

// let vowel = (str,i) =>
//    {
//     for(i ; i < str.length ; i++){
//         if(str[i] == 'A'  || str[i] == 'E'  || str[i] == 'I'  || str[i] == 'O'  || str[i] == 'U'  || str[i] == 'a'  || str[i] == 'e'  || str[i] == 'i'  || str[i] == 'o' || str[i] == 'u'){
//             console.log(`i = ${str[i]}`);
//         }
//     }
// }
// vowel("Hello World",0);



/* 11. Write a program to check if a year is a leap year or not. */

// (function leapyear(year)
// {
//     if(year %4 == 0)
//     {
//         console.log("Leap year")
//     }
//         else{
//             console.log("Not Leap year");   
//         }
// })
// (2024)
