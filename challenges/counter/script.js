const counter = document.querySelector("#zero");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");
const plus = document.querySelector("#plus");
let counterNumber = 0;
const boolean = true;

reset.addEventListener("click", () => {
  counterNumber = 0;
  counter.innerText = counterNumber;
});

minus.addEventListener("click", () => {
  if (counterNumber > 0) {
    counterNumber--;
    counter.innerText = counterNumber;
  }
});

plus.addEventListener("click", () => {
  counterNumber++;
  counter.innerText = counterNumber;
});
