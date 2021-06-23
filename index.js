var theButton = document.getElementById("butt");

var bg = document.querySelector("body");
var heading = document.querySelector("h1");

function buttFunction(){
    console.log("button works! Yay :)")

    if(bg.className=="darkmode"){
        bg.className="lightmode"
    } else {bg.className="darkmode"}
}


theButton.addEventListener('click', buttFunction);

