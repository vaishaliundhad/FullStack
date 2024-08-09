// Javscript async/await

// We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.

{
    // async function name(parameter1, parameter2, ...paramaterN) {
    //     // statements
    // }

    // // name - name of the function
    // // parameters - parameters that are passed to the function     
}

// Async 

// the async keyword is used before the function to represent that the function is asynchronous.

{
    // // async function example

    // async function f() {
    //     console.log('Async function.');
    //     return Promise.resolve("SkillQode");
    // }

    // f(); 
    // f().then(data=>console.log(data))
    // console.log(f().then(data=>console.log(data)));
}

// this function returns a promise, you can use the chaining method then()

{
    // async function f() {
    //     console.log('Async function.');
    //     return Promise.resolve(1);
    // }
    
    // f().then(function(result) {
    //     console.log(result)
    // });

    // // the f() function is resolved and the then() method gets executed.
}

// JavaScript await Keyword

// The await keyword is used inside the async function to wait for the asynchronous operation.

// The syntax to use await is

{
    // let result = await promise;
}

// The use of await pauses the async function until the promise returns a result (resolve or reject) value. 

{
    // a promise
    // let promise = new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //     resolve(1)}, 4000); 
    // });

    // // // async function
    // async function asyncFunc() {

    //     // wait until the promise resolves 
    //     let result = await promise; 

    //     console.log(result + 15);
    //     console.log('hello');
    // }

    // // calling the async function
    // asyncFunc();

    // // You can use await only inside of async functions.
}

// a Promise object is created and it gets resolved after 4000 milliseconds. Here, the asyncFunc() function is written using the async function.

// The await keyword waits for the promise to be complete (resolve or reject).

// hello is displayed only after promise value is available to the result variable.

// In the above program, if await is not used, hello is displayed before Promise resolved.

// This can be useful if there are multiple promises in the program.

{
    let promise1 = new Promise(function (resolve, reject) {
            setTimeout(function () {
            resolve("Promise 1")}, 2000); 
        });
    let promise2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
        resolve("Promise 2")}, 4000);
    });
    let promise3 = new Promise(function (resolve, reject) {
        setTimeout(function () {
        resolve("Promise 3")}, 6000);
    });

    async function asyncFunc() {
        let result1 = await promise1;
        let result2 = await promise2;
        let result3 = await promise3;
        
        console.log(result1);
        console.log(result2);
        console.log(result3);
    }
    // asyncFunc()
    // // In the above program, await waits for each promise to be complete.
}

// Error Handling.

// While using the async function, you write the code in a synchronous manner. And you can also use the catch() method to catch the error. 

{
    // asyncFunc().catch(
    //     // catch error and do something
    // )
}

// The other way you can handle an error is by using try/catch block.

{
//    // a promise
    // let promise = new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //     reject('Promise resolved')}, 3000); 
    // });

//     // async function
    // async function asyncFunc() {
    //     try {
    //         // wait until the promise resolves 
    //         let result = await promise; 

    //         console.log("try Block: ",result);
    //     }   
    //     catch(error) {
    //         console.log("Catch Block",error);
    //     }
    // }

//     // calling the async function
    // asyncFunc(); // Promise resolved 

//     // we have used try/catch block to handle the errors. If the program runs successfully, it will go to the try block. And if the program throws an error, it will go to the catch block.
}

// Benefits of Using async Function

// The code is more readable than using a callback or a promise.
// Error handling is simpler.
// Debugging is easier.

// Note: These two keywords async/await were introduced in the newer version of JavaScript (ES8). Some older browsers may not support the use of async/await. 


// Javascript setInterval()

// In JavaScript, a block of code can be executed in specified time intervals. These time intervals are called timing events.

// There are two methods for executing code at specific intervals.

{
    // setInterval()
    // setTimeout()
}

// JavaScript setInterval()

// The setInterval() method repeats a block of code at every given timing event.

{
    // setInterval(function, milliseconds);

    // // function - a function containing a block of code
    // // milliseconds - the time interval between the execution of the function
    // // The setInterval() method returns an intervalID which is a positive integer.
}

// Display a Text Once Every 1 Second

{
    // // program to display a text using setInterval method
    // function greet() {
    //     console.log('Hello world');
    // }

    // setInterval(greet, 1000);

    // // the setInterval() method calls the greet() function every 1000 milliseconds(1 second).

    // // Hence the program displays the text Hello world once every 1 second.

    // // Note: The setInterval() method is useful when you want to repeat a block of code multiple times. For example, showing a message at a fixed interval.
}

// Display Time Every 5 Seconds

{
    // // program to display time every 5 seconds
    // function showTime() {

    //     // return new date and time
    //     let dateTime= new Date();

    //     // return the time
    //     let time = dateTime.toLocaleTimeString();

    //     console.log(time)
    // }

    // let display = setInterval(showTime, 5000);
}

// The above program displays the current time once every 5 seconds.

// new Date() gives the current date and time. And toLocaleTimeString() returns the current time.

// JavaScript clearInterval()

// The syntax of clearInterval() method is

{
//     clearInterval(intervalID);
// // Here, the intervalID is the return value of the setInterval() method.
}

// Use clearInterval() Method

{
    // // program to stop the setInterval() method after five times

    // let count = 0;

    // // function creation
    // let interval = setInterval(function(){

    //     // increasing the count by 1
    //     count += 1;

    //     // when count equals to 5, stop the function
    //     if(count === 5){
    //         clearInterval(interval);
    //     }

    //     // display the current time
    //     let dateTime= new Date();
    //     let time = dateTime.toLocaleTimeString();
    //     console.log(time);

    // }, 2000);

    // // the setInterval() method is used to display the current time every 2 seconds. The clearInterval() method stops the function call after 5 times.
}

// You can also pass additional arguments to the setInterval() method. The syntax is

{
    // setInterval(function, milliseconds, parameter1, ....paramenterN);
}

// When you pass additional parameters to the setInterval() method, these parameters (parameter1, parameter2, etc.) will be passed to the specified function.

{
    // // program to display a name
    // function greet(name, lastName) {
    //     console.log('Hello' + ' ' + name + ' ' + lastName);
    // }

    // // passing argument to setInterval
    // setInterval(greet, 1000, 'John', 'Doe');

    // // two parameters John and Doe are passed to the setInterval() method. These two parameters are the arguments that will be passed to the function (here,  greet() function) that is defined inside the setInterval() method.
}
