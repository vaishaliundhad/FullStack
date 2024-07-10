/* javascript  loops */

/* incerement,decrement */

{
    let x=10
    console.log(++x);
}
{
    let x=10
    console.log(--x);
}

/* 
  while loop 
  do-while loop
  for loop
  for-in loop
  for-of loop

*/

// while loop 

// while (condition) {
//     statement;
//     afterThought;
    
// }

// {
//     let age=0
//     while (age<=18) {
//         console.log(`now i am  minor! ${age}`);
//         age++;

        
//     }
// }

/*  do-while loop */

/*
    do{
    statement 
    afterThought
    }
    while(condition)
*/
    // let age=0;
    // do{
    //     console.log(`now i am  minor! ${age}`);
    //     age++;
    // }
    // while(age==1)


// for loop   

//    for(intial; condi; after)
//     {
//         statement;
//     }

    {
        let i=0
        for(i; i<10; i++)
            {
                console.log('javascript for loop');
            }
    }

//  for-in loop  

{
    let ary=[]
    console.log(ary);
    ary[0]='10'
    console.log(ary);
    ary.shift()
    console.log(ary);
    ary.length=10
    console.log(ary);
    ary[5]='10'
    console.log(ary);

    let arrays=[]
    console.log(typeof arrays);
    let arrayss=new Array()
      console.log( typeof arrayss);    

}
{
    let obj={}
    console.log(obj);
    obj.key1='skilllquode'
    console.log(obj);
    console.log(obj.key1);
    console.log(obj['key1']);
}


//push  and unshift value add  in array
// pop and shift value remove in array

/* for in loop

     The for ..in statement literates  over all  enumerable  string  properties  of an object (ignoring properties  keyed  by sybmols),including  inherited  enumberable  properties.

*/

{
    let obj={
        a:10,
        b:20,
        c:30,
        d:[
            {

            }
        ]
    }
}

