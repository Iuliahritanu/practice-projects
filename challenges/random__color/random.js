const colorBoxContainer = document.getElementById("container");
const button = document.getElementById("button");
const string = "0123456789abcdef";
// let randomColor = "#";

function getRandomColor() {
  let randomColor = "#";
  for (let i = 1; i <= 6; i++) {
    const randomNumber = Math.floor(Math.random() * string.length);
    randomColor =
      randomColor + string.substring(randomNumber, randomNumber + 1);
  }
  return randomColor;
}

function generateDivElement() {
  const color = getRandomColor();
  const div = document.createElement("div");
  div.style.backgroundColor = color;
  div.innerText = color;
  colorBoxContainer.appendChild(div);
}

function generateContent() {
  colorBoxContainer.innerHTML = "";
  for (let i = 1; i <= 20; i++) {
    generateDivElement();
  }
}

generateContent();

button.addEventListener("click", generateContent);
