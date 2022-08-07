const hour =document.getElementById("hour");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function updateTime(){
    let getHours= new Date().getHours();
    let getMinutes = new Date().getMinutes();
    let getSeconds = new Date().getSeconds();
    let ampm = "AM"

    if(getHours>12){
        getHours= getHours-12
        ampm = "PM"
    }
    getHours= getHours<10? "0"+getHours: getHours;
    getMinutes= getMinutes<10? "0"+getMinutes: getMinutes;
    getSeconds= getSeconds<10? "0"+getSeconds: getSeconds;

    hour.innerText=getHours;
    minute.innerText = getMinutes;
    second.innerText = getSeconds;
    setTimeout(()=>{
        updateTime()

    },1000)
}
updateTime()
