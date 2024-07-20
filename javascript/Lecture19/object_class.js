/***************object and class method **************/

/***object method****/

// let data = new object();
// console.log(typeof(data));

// let data={
//     name:"bansi",
//     age:21,
//     hobbies: ['dancing','drawing'],
//     marks: {
//         maths:30,
//         sci:45,
//         eng:50
//     },
//     hello :()=> ('hello guys..........')

// };

// console.log(data);
// console.log(data.hello());
// console.log(data.hobbies[0]);
// console.log(data.marks.eng);
// console.log(data['name']);
// console.log(data['marks']['sci']);
// console.log(data['hobbies'][0]);


// let a= "marks"
// console.log(data[a]);

/****  add  new field  ****/
// data.new ="howww"
// console.log(data);

// delete data.hello
// console.log(data);



/***class method****/

// class jshello
// {
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         this.gender='female'
//     }


// sayhello()
// {
//     return `my name is ${this.name} and my age  is ${this.age}, gender is : ${this.gender}.`

//   }
// };

// let abc= new  jshello ('john peter',21);

// console.log(abc.sayhello());

/**   javascript  object.hasOwn() method  **/

// syntax =>  object.hasOwn(obj,prop)
// {
//     let obj={
//         fname:'bansi',
//         lname:'patel',
//         age:21
//     }
//     console.log(Object.hasOwn(obj,'fname'));
// }


/**   javascript  object.is() method  **/

// syntax =>  Object.is(value1,value2)

{
    console.log(Object.is('1', 1));
    console.log(Object.is(NaN, NaN));
    console.log(Object.is(-0, 0));
    console.log(Object.is({},{}));
    console.log(Object.is([],[]));
    console.log(Object.is([],{}));
}