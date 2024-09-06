// let hrs= document.getElementById("hrs");
// let mins= document.getElementById("mins");
// let sec= document.getElementById("sec");

// let curretTime =new Date();
// console.log(curretTime.getMinutes());


// setInterval(()=>{
//   let curretTime= new Date();

//   hrs.innerHTMl = curretTime.getHours();
//   mins.innerHTMl = curretTime.getMinutes();
//   sec.innerHTMl = curretTime.getSeconds();
// },1000);


function showtime(){
    let dateTime=new Date();
    let time = dateTime.toLocaleTimeString();
    document.getElementById('show').innerHTML = time;
}setInterval(showtime,2000);
