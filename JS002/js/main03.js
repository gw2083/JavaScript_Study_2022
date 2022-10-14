const inputNum = document.querySelector("#num");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const txtNum = inputNum.value;

  //input box 에 입력된 숫자가 0이면 0보다 큰 수를 입력하세요 라고
  //alert 보이기

  if (Number(txtNum) === 0) {
    alert("0 보다 큰 수를 입력하세요");
  }
});
