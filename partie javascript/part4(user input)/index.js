// 1.ez way = window promt
//2.pro way= HTML textbox

// let username;
// username =window.prompt("what's your username");

// console.log(username);
let username;
document.getElementById("mySubmit").onclick = function(){
    username= document.getElementById("myText").value; 
    document.getElementById("myh1").textContent= `Hello ${username}`

}
