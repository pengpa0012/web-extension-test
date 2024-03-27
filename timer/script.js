const body = document.querySelector("body")
const div = document.createElement("div")

div.classList = "ui"
div.innerHTML = `
  <p class="timer-display">23</p>
  <input type="number" placeholder="Timer" class="timer-input">
  <div class="btn-flex">
  <button class="start-btn">start</button>
  <button class="pause-btn">pause</button>
  <button class="reset-btn">reset</button>
  </div>
`
body.appendChild(div)
const btn = document.querySelector(".start-btn")

btn.addEventListener("click", () => {
  setTimeout(() => {
  alert("yeyes")
  }, 3000)
})

