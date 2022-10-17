const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const btn = document.querySelector("#btn");
const spanSum = document.querySelector("#sum");
const spanMinus = document.querySelector("#minus");
const spanMulti = document.querySelector("#multi");
const spanDiv = document.querySelector("#div");

btn.addEventListener("click", () => {
  const intNum1 = Number(inputNum1.value);
  const intNum2 = Number(inputNum2.value);

  const intSum = intNum1 + intNum2;
  const intMinus = intNum1 - intNum2;
  const intMulti = intNum1 * intNum2;
  const intDiv = intNum1 / intNum2;

  spanSum.innerText = intNum1 + " + " + intNum2 + " = " + intSum;
  spanMinus.innerText = intNum1 + " - " + intNum2 + " = " + intMinus;
  spanMulti.innerText = intNum1 + " x " + intNum2 + " = " + intMulti;
  spanDiv.innerText = intNum1 + " ÷ " + intNum2 + " = " + intDiv;
});
