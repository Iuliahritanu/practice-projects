const months = document.getElementById("months");

function Calculate() {
  const amount = parseFloat(document.getElementById("amount").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const months = parseInt(document.getElementById("months").value);

  const interest = (amount * (rate * 0.01)) / months;

  const total = (amount / months + interest).toFixed(2);

  document.querySelector("#monthly__payment").innerHTML =
    "Monthly payment:" + total;
}

months.addEventListener("input", () => {
  if (months.value) {
    Calculate();
  }
});
//first line is true and the second one is false
//=> when we write something in the last input it's calculated the price
