/* map and set mathod*/


/*.........map.......*/

// Map => key - value

// let data= new Map();
// let data = new Map([
//     ["hello",100],
//     ["world",200],
//     ["john", 300],  
//     ["peter",400]
// ]);
// console.log(data);
// console.log(data.size);
// data.set("bansi",500);

// console.log(data);
// console.log(data.get('world'));
// console.log(data.has('ruhi'));
// data.delete('peter');
// console.log(data);
// console. log(data.entries());
// console.log(data);

    // let text = "";
    // data.forEach((val,key)=>{
    //     text += key + "=>" + val + "\n";
    // });
    // console.log(text);

/*............. set method ................*/

// let data = new Set ([1,2,3,4,'hello']);

// data.add(5);
// console.log(data);
// console.log(data.size); 
// console.log(data.values());
// console.log(data.entries());
// console.log(data.has('hello'));
// data.delete('hello');
// data.clear()
// console.log(data);

// let txt = " ";
// data.forEach((val)=>{
//        txt += "=>" + val + "\n";
// });
// console.log(txt);


/****shallo copy*** and ****deep copy ***/ 


/****  shallo copy  ***/

// let data=[11,22,33,44,55];

// let abc=data;
// data.pop();
// console.log(data);
// console.log(abc);


/**** deep copy ***/

let data=[11,22,33,44,55]; //shallo copy    

let abc=[...data]; //deep copy
data.pop()
abc.push(400)
console.log(data);
console.log(abc);
