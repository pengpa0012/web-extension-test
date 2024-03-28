const body = document.querySelector("body")
const div = document.createElement("div")

let timer

div.classList = "ui"
div.innerHTML = `
  <p class="timer-display hidden">0</p>
  <input type="time" placeholder="Timer" class="timer-input">
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
const timerInput = document.querySelector(".timer-input")
const start = document.querySelector(".start-btn")
const reset = document.querySelector(".reset-btn")

closeBtn.addEventListener("click", () => ui.classList.toggle("active"))
start.addEventListener("click", () => {
  start.classList.add("hidden")
  reset.classList.remove("hidden")
  timerDisplay.classList.remove("hidden")
  timerInput.classList.add("hidden")
  timer = setInterval(() => {
    const date = new Date()
    timerDisplay.textContent = `${((date.getHours() < 10 ? '0' : '') + date.getHours())}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}:${(date.getSeconds() < 10 ? '0' : '') + date.getSeconds()}`
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


// insert clock time
// close input if already selected
// hide start if running
// hide reset if not running

