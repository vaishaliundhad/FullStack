/*  call method  */

// let person={
//      sayHello: function(city)
//      {
//         return `${this.name} and ${this.age} 
       
//      city is: ${city}`

//     }
// }

// let data={
//     name:'bansi',
//     age:21
// };

// let data1 ={
//      name:'janu',
//      age:20
// };

// console.log(person.sayHello.call(data, 'bombay'));



/*  apply method  */

// let person={
//      sayHello: function(city)
//      {
//         return `${this.name} and ${this.age},
       
//         city is: ${city}`

//     }
// }

// let data={
//     name:'bansi',
//     age:21
// };

// let data1={
//      name:'janu',
//      age:20
// };

// console.log(person.sayHello.apply(data1, ['mumbai']));

/*  bind method  */

let person={
    name: 'ami',
    age:21,
    sayHello: function(city){
        return ` ${this.name} and ${this.age}, city: ${city}`
    }
}

let data={
    name: 'ruhi',
    age:30
};
console.log(person.sayHello.bind(data,'mumbai')());