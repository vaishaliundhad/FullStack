// function asyncFunc() {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          console.log("data1");
//          resolve("success");
//       }, 4000)
//    });
// }

// console.log("fetching data......");
// let p1=asyncFunc();
// p1.then((res)=>{
//    console.log(res);
   
// })


// const getPromise = () => {
//    return new Promise((resolve, reject) => {
//       console.log("i am a promises");
//       resolve("success");
      // reject("network error")
//    });


// }

// let promise = getPromise();
// promise.then((res) => {
//    console.log("primse fullfield", res);

// })

// promise.catch((err) => {
//    console.log("rejectred", err);

// })

// function getData(dataid, getNextData) {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          console.log("data", dataid);
//          resolve("success");

//          if (getNextData) {
//             getNextData();
//          }

//       }, 2000);

//    });
// }


// promise to chain

// console.log("getting data.......");
// getData(1)
// .then((res)=>{
//    console.log("getting data2....");
//    return getData(2);
// })
// .then((res)=>{
//    console.log("gettig data3...");
//    return getData(3);
// })
// .then((res)=>{

//    return  getData(res);
// })


//async await

async function getallData() {
   console.log("getting data1......");
   await getData(1);
   console.log("getting data2......");
   await getData(2);
   console.log("getting data3......");
   await getData(3);
   console.log("getting data4......");
   await getData(4);
   console.log("getting data5......");
   await getData(5);
   
}