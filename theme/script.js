const body = document.querySelector("body")
const div = document.createElement("div")

div.classList = "ui"
div.innerHTML = `
  <h1>Color Picker</h1>
  <input type="color" class="color-input"/>
  <input type="text" placeholder="Enter image URL" class="img-input"/>
  <button class="toggle-btn"></button>
`
body.appendChild(div)
const ui = document.querySelector(".ui")
const toggleBtn = document.querySelector(".toggle-btn")


toggleBtn.addEventListener("click", () => ui.classList.toggle("active"))
