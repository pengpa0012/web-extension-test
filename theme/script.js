const body = document.querySelector("body")
const div = document.createElement("div")

div.classList = "ui"
div.innerHTML = `
  <h2>Color Picker</h2>
  <input type="color" class="color-input"/>
  <input type="text" placeholder="Enter image URL" class="img-input"/>
  <button class="toggle-btn"></button>
`
body.appendChild(div)
const ui = document.querySelector(".ui")
const toggleBtn = document.querySelector(".toggle-btn")
const colorInput = document.querySelector(".color-input")
const imgInput = document.querySelector(".img-input")



changeBG(localStorage.getItem("img-color"), localStorage.getItem("img-url"))

colorInput.addEventListener("input", e => {
  localStorage.setItem("img-color", e.target.value)
  changeBG(e.target.value, localStorage.getItem("img-url"))
})

imgInput.addEventListener("keydown", e => {
  if(e.code == "Enter") {
    localStorage.setItem("img-url", e.target.value)
    changeBG(localStorage.getItem("img-color"), e.target.value)
  }
})

toggleBtn.addEventListener("click", () => ui.classList.toggle("active"))

function changeBG(color, image) {
  body.style.background = `url(${image}), ${color}`
}