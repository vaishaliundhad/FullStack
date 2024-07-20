// high order function
// function as a object

function text(a,b) {
    return text.length;
    
}
console.log(text);

function sumAll() {
    let  total=0;
    for (let i = 0; i< arguments.length; i++) {
        total +=arguments[i];
        return total;
       
    }

    console.log(sumAll(2,3,4,5,34,67));
}


// rest parameter(...)

function hello(...args)
{
    return args;
};

console.log(hello(1,2,3,4,5,6));

// Generator

function*test()
{
    yield 1;
    yield 2;
    yield 3;
    yield "test";
    yield "hello";

}

let data=test();
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);


/*..........This keyword..................*/

let person={
      firstname:'bansi',
      lastname:'patel',
      age:21,
      hobbies:['travelling','Dancing'],
      test:function(){
        console.log(`intro my self: ${this.firstname} ${this.lastname}, his age is ${this.age} years old. and his  hobbies is: ${this.hobbies[1]}`);
      }
}

person.test();