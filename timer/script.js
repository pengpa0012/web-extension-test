const body = document.querySelector("body")
const btn = document.createElement("button")

btn.textContent = "start"
btn.classList = "btn"
body.appendChild(btn)

btn.addEventListener("click", () => {
 setTimeout(() => {
  alert("yeyes")
 }, 3000)
})
console.log(body)