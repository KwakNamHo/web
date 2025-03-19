document.getElementById("time").innerHTML = new Date().toLocaleString()

function Pink() {
  document.body.style.backgroundColor = "Pink"
}
function LightBlue() {
  document.body.style.backgroundColor = "LightBlue"
}
LightBlue
function Yellow() {
  document.body.style.backgroundColor = "Yellow"
}
function Reset() {
  document.body.style.backgroundColor = "linen"
}

function showHTML5() {
  document.getElementById("fig").src = "img/HTML.png"
  document.getElementById("desc").innerHTML = "웹 언어"
}
function showCSS() {
  document.getElementById("fig").src = "img/CSS.png"
  document.getElementById("desc").innerHTML = "웹 언어"
}
function showJS() {
  document.getElementById("fig").src = "img/JS.png"
  document.getElementById("desc").innerHTML = "웹 언어"
}
function hide() {
  document.getElementById("fig").src = ""
  document.getElementById("desc").innerHTML = ""
}
