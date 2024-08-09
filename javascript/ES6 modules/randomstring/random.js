var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let len = string.length;
document.getElementById("demo").innerHTML = string.charAt(Math.floor(Math.random()*len));