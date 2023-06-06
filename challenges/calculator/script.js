const display = document.getElementById("display");

const operatori = document.querySelectorAll(".button_operator");
const numere = document.querySelectorAll(".button_number");
const butoane = document.getElementById("butoane");

const listaNumere = [];

let displayValue = 0;
let numar = "";

function addNumber(oriceParamentru) {
  const type = oriceParamentru.target.id;

  if (type == "numar") {
    numar += oriceParamentru.target.innerText;
    console.log(numar);
  }
  if (type == "operator") {
    if (numar.length) {
      listaNumere.push(numar);
      listaNumere.push(oriceParamentru.target.innerText);
      numar = "";
      console.log(listaNumere);
    }
    return;
  }
}

butoane.addEventListener("click", addNumber);

// function addHistory(value)
// {

// }

// function addOperator(oriceParamentru) {
//   console.log(oriceParamentru.target.innerText);
// }

// // console.log(numere);

// numere.forEach((numar) => {
//   // executa codul ...

//   numar.addEventListener("click", addNumber);
// });
// operatori.forEach((operator) => {
//   operator.addEventListener("click", addOperator);
// });
