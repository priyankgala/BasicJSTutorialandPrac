const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// let hourPosition = 0;
// let minPosition = 0;
// let secPosition = 0;

function time(){
    var date = new Date();
    // console.log(date);
    let hr = date.getHours()*360/12;
    let min = date.getMinutes()*360/60;
    let sec = date.getSeconds()*360/60;
    
    // console.log("Hour: "+hourPosition +"\nMin: "+minPosition);
    
    
    HOURHAND.style.transform = "rotate("+hr+"deg)";
    MINUTEHAND.style.transform = "rotate("+min+"deg)";
    SECONDHAND.style.transform = "rotate("+sec+"deg)";
    
}

var interval = setInterval(time, 1000);