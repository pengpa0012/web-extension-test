const body = document.querySelector("body")
const div = document.createElement("div")
const overlay = document.createElement("div")

let timer

div.classList = "ui"
div.innerHTML = `
  <p class="timer-display hidden"></p>
  <div class="timer-input">
    <input type="number" placeholder="Minute" class="minute-input" max="60">
    <input type="number" placeholder="Second" class="second-input" max="60">
  </div>
  <div class="btn-flex">
  <button class="start-btn">start</button>
  <button class="reset-btn hidden">reset</button>
  </div>
  <button class="close-btn"></button>
`
overlay.classList = "overlay hidden"
overlay.innerHTML = `
  <div class="overlay-content">
    <h1>Time's Up!</h1>
    <button class="close-overlay">close</button>
  <div>
`

body.appendChild(div)
body.appendChild(overlay)
const ui = document.querySelector(".ui")
const closeBtn = document.querySelector(".close-btn")
const timerDisplay = document.querySelector(".timer-display")
const minuteInput = document.querySelector(".minute-input")
const secondInput = document.querySelector(".second-input")
const timerInput = document.querySelector(".timer-input")
const start = document.querySelector(".start-btn")
const reset = document.querySelector(".reset-btn")
const closeOverlay = document.querySelector(".close-overlay")

closeBtn.addEventListener("click", () => ui.classList.toggle("active"))
start.addEventListener("click", () => {
  if(!minuteInput.value && !secondInput.value) return
  start.classList.add("hidden")
  reset.classList.remove("hidden")
  timerDisplay.classList.remove("hidden")
  timerInput.classList.add("hidden")
  let totalTime = parseInt(minuteInput.value * 60) + parseInt(secondInput.value)
  timer = setInterval(() => {
    const minutes = Math.floor(totalTime / 60)
    const seconds = totalTime % 60

    timerDisplay.innerHTML = minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0')

    if (totalTime <= 0) {
      clearInterval(timer)
      overlay.classList.remove("hidden")
    } else {
      totalTime--
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

closeOverlay.addEventListener("click", () => overlay.classList.add("hidden"))