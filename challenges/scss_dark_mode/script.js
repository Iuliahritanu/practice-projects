const toggleThemeBtn = document.getElementById("toggle__theme__btn");
const themeHandler = document.querySelector("[data-theme]");

const body = document.querySelector('body');

// toggleThemeBtn.addEventListener("click", () => {
//   if (themeHandler.getAttribute("data-theme") === "light") {
//     themeHandler.setAttribute("data-theme", "dark");
//     toggleThemeBtn.innerText = "Light theme";
//   } else {
//     themeHandler.setAttribute("data-theme", "light");
//     toggleThemeBtn.innerText = "Dark theme";
//   }
// });


toggleThemeBtn.addEventListener("click", () => {
  if (body.classList.contains("theme__light")) {
    body.classList.add('theme__dark')
    body.classList.remove('theme__light')
    toggleThemeBtn.innerText = "Light theme";
  } else {
    body.classList.remove('theme__dark')
    body.classList.add('theme__light')
    toggleThemeBtn.innerText = "Dark theme";
  }
});