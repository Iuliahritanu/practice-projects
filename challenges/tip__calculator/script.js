const quantity = document.querySelector("#quantity");
const percentage = document.querySelector("#percentage");
const calculateBtn = document.querySelector("#btn");
const total = document.querySelector("#total__value");

const calculateTip = () => {
  let tip = 0;
  tip = (percentage.value / 100) * +quantity.value;
  const totalValue = tip + Number(quantity.value);

  total.innerText = `${totalValue.toFixed(2)}$`;
};

calculateBtn.addEventListener("click", calculateTip);
