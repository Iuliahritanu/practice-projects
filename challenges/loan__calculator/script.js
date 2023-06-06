// const amount = document.getElementById("amount");
// const rate = document.getElementById("rate");
// const months = document.getElementById("months");
// const total = document.getElementById("monthly__payment");

function Calculate() {
  const amount = parseFloat(document.getElementById("amount").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const months = parseInt(document.getElementById("months").value);

  const interest = (amount * (rate * 0.01)) / months;

  const total = (amount / months + interest).toFixed(2);

  document.querySelector("#monthly__payment").innerHTML =
    "Monthly payment:" + total;
}
console.log(Calculate);
// amount.addEventListener("input", Calculate);
// rate.addEventListener("input", Calculate);
// months.addEventListener("input", Calculate);

// total.addEventListener("keypress", Calculate);
