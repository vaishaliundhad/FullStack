/* 1.Check if a number is odd or even in JavaScript */


// const number =prompt("enter the number:");


//check is the  number even 

// if(number%2==0)
//     {
//         console.log(`This is a ${number} number even.`);
//     }

// //check is the  number odd 
// else
// {
//     console.log(`The is a ${number} number is odd`);
// }



/* 2. Find the larger of two number*/

// let num1=prompt("enter the num1:")

// let num2=prompt("enter the num2")


// let larger;

// if (num1 > num2) {
//     larger = num1;
// } else {
//     larger = num2;
// }

// console.log(larger);

// 3. Perform arithmetic operations on two numbers 
 {
    //  let num1=prompt("enter the num1:")

    //  let num2=prompt("enter the num2")

   
   let num1 = 10;
   let num2 = 20;


    let sum = num1 + num2;
    console.log(`Addition: ${num1} + ${num2} = ${sum}`);
 }  


//  4. Find the grade for input marks
{
    function getGrade(marks) {
        let grade;
    
        switch (true) {
            case (marks >= 90 && marks <= 100):
                grade = 'A';
                break;
            case (marks >= 80 && marks < 90):
                grade = 'B';
                break;
            case (marks >= 70 && marks < 80):
                grade = 'C';
                break;
            case (marks >= 60 && marks < 70):
                grade = 'D';
                break;
            case (marks >= 50 && marks < 60):
                grade = 'E';
                break;
            case (marks >= 0 && marks < 50):
                grade = 'F';
                break;
            default:
                grade = 'Invalid marks';
                break;
        }
    
        return grade;
    }
    

    let marks = 92; 
    let grade = getGrade(marks);
    console.log(`Marks: ${marks}, Grade: ${grade}`);
    
} 

// 5. Sort three numbers 


// javascript  logical program

// Evaluate each of the following JavaScript expressions and show the value. 

/* 1.-9*3 */

 let x=-9
 let y=3
 let z=-9*3
 console.log(z);


//  2. “Value is “+ 50   

  let value="value is "+50;
  console.log(value);

//   3. 17 % 5  

  let a=17
  let b=5
  let c=17%5
  console.log(c);

//   4. 5 % 17  

   let a1=5
   let b1=17
   let c1=5%17
   console.log(c1);

//    5. 5/10   


     let num1=5
     let num2=10
     let num3=5/10
     console.log(num3);

//  6. (4 == 4)  
 {
    let x='4'
    let y='4'
    let z1 = x==y
  
    console.log(z1);
      
}

// {
//     let number=4;;
//     let number1='4';

//     console.log(number==4);
//     console.log(number1==4);
//     console.log(number==number);
    

// }

// 7. (4! = 5) 

{
    let x='4'
    let y='5'
 
    let z2 = x!=y
   
    console.log(z2);    
}

// 8. (7 <= 8)   
{
    let x='7'
    let y='8'
 
    let z1 =(7<=8)
   
    console.log(z1);    
}

