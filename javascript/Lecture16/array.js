/* Array in javascript */
//  Array => similar data store in one  variable 
// [size]

// let data=[];
// let data=new Array('hello','world','skill','quode');
// let data=[10,20,30,40,50]
// console.log(data);
// console.log(data[3]);
// data[3]=100;
// console.log(data);

//property -> length

// let data=[10,20,30,40,50,60,70,80];

// console.log(Array.isArray(data));
// console.log(data.length);

/* push-> insert into last index */

// data.push(100)
// data.push(120,150)

/* pop  -> remove into last position */
let data=[10,20,30,40];

data.pop()
data.pop()
document.getElementById('res').innerText=data;
function pop()
{
    data.pop();
    document.getElementById('res').innerText=data;
    
    
}
console.log(data);

/* unshift => insert first position */

// data.unshift(190)
// data.unshift(200,300,500)

/* shift => first position remove */

// data.shift()
// data.shift()


//  splice (start, removeCount,...add)
//  data.splice(2,0,100,200,300)

// data.sort()  //char data  sorting
// console.log(data.sort((a,b)=>a-b));
// console.log(data.slice(1,5));
// console.log(data.reverse());



// let num1=[11,22];
// console.log(data.concat(num1,['a','b','c']));


/* includes => check if  elements is exit or not */
//  console.log(data.includes(50));
//  console.log(data);

// const  maxfun =(e)=>{
//     return Math.max.apply(null,e)
// }

// const  minfun =(e)=>{
//     return Math.min.apply(null,e)
// }

// console.log(maxfun(data));
// console.log(minfun(data));


/* array join */

// let data=['fire','air','join'];

// console.log(data.join());
// console.log(data.join(''));
// console.log(data.join('-'));





