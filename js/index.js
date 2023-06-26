
let hour_needle = document.querySelector(".H"),
   minute_needle = document.querySelector(".M"),
   second_needle = document.querySelector(".S");




function Update_Time() {
   let date = new Date(),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();
   document.querySelector(".H").style.transform = `rotate(${30 * hours}deg)`
   minute_needle.style.transform = `rotate(${6 * minutes}deg)`
   second_needle.style.transform = `rotate(${6 * seconds}deg)`
}

setInterval(() => {
   Update_Time()
}, 1000);
Update_Time()