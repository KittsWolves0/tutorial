//   html для таймера
    
// <div class="timer">
//       <p class="clockface"></p>

//       <div class="actions">
//         <button class="timer-btn" data-action-start>Start</button>
//         <button class="timer-btn" data-action-stop>Stop</button>
//       </div>
// </div>





const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockFace = document.querySelector(".clockface");

class Timer {
  constructor () {
    this.isActive = false;
    this.intervalId = null;
    this.init();
}
start() {
  if (this.isActive) {
      return
    }

    const startTime = Date.now();
    this.intervalId = setInterval(
    () => {
      const currentTime = Date.now();
      const delta = currentTime - startTime;
      const time = this.setTimer(delta);
      this.drawClock(time)
    },
    1000);
  
  this.isActive = true;
    
  }

  setTimer(timeData) {
    const hours = this.pad(Math.floor((timeData % 86400000) / (1000 * 60 * 60)));
    const min = this.pad(Math.floor((timeData % 3600000) / (1000 * 60)));
    const sec = this.pad(Math.floor((timeData % 60000) / 1000));
    return {hours, min, sec}
  }

  drawClock({hours, min, sec}) {
    clockFace.textContent = `${hours}:${min}:${sec}`
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
  
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const zeroTime = this.setTimer(0);
    this.drawClock(zeroTime)
  }

  init() {
    const zeroTime = this.setTimer(0);
    this.drawClock(zeroTime)
  }

}


const timer = new Timer();

startBtn.addEventListener("click", timer.start.bind(timer));
stopBtn.addEventListener("click", timer.stop.bind(timer));