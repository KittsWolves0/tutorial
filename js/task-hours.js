const globalMinutes = 121;
const hours = Math.floor(globalMinutes / 60);
const minutes = globalMinutes % 60;
const newHours = hours < 10 ? `0${hours}` : hours;
const newMinutes = minutes < 10 ? `0${minutes}` : minutes;
const time = newHours + ":" + newMinutes;

//    ----ANOTHER METHOD----
//
// const otherTime = String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0");

  console.log(time);
