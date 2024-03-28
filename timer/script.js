const body = document.querySelector("body")
const div = document.createElement("div")

let timer

div.classList = "ui"
div.innerHTML = `
  <p class="timer-display hidden">0</p>
  <div class="timer-input">
    <input type="number" placeholder="Hour" class="hour-input">
    <input type="number" placeholder="Minutes" class="minute-input">
  </div>
  <div class="btn-flex">
  <button class="start-btn">start</button>
  <button class="reset-btn hidden">reset</button>
  </div>
  <button class="close-btn"></button>
`
body.appendChild(div)
const ui = document.querySelector(".ui")
const closeBtn = document.querySelector(".close-btn")
const timerDisplay = document.querySelector(".timer-display")
const hourInput = document.querySelector(".hour-input")
const minuteInput = document.querySelector(".minute-input")
const timerInput = document.querySelector(".timer-input")
const start = document.querySelector(".start-btn")
const reset = document.querySelector(".reset-btn")

closeBtn.addEventListener("click", () => ui.classList.toggle("active"))
start.addEventListener("click", () => {
  start.classList.add("hidden")
  reset.classList.remove("hidden")
  timerDisplay.classList.remove("hidden")
  timerInput.classList.add("hidden")
  let totalTime = parseInt(hourInput.value * 60) + parseInt(minuteInput.value * 60)
  timer = setInterval(() => {
    const hours = Math.floor(totalTime / 60);
    const minutes = totalTime % 60;

    timerDisplay.innerHTML = hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0');

    if (totalTime <= 0) {
      clearInterval(timer);
      timerDisplay.innerHTML = "Countdown Finished!";
    } else {
      totalTime--;
    }
  }, 1000)
})

reset.addEventListener("click", () => {
  start.classList.remove("hidden")
  reset.classList.add("hidden")
  timerDisplay.classList.add("hidden")
  timerInput.classList.remove("hidden")
  timerDisplay.textContent = 0
  clearInterval(timer)
})

// change to hr and min
// minus the time per tick
// countdown

