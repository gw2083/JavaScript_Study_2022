const inputs = document.querySelectorAll("input");
const tbodyScore = document.querySelector("tbody.score");
const btnAdd = document.querySelector("button.add");

/**
 * 국어, 영어, 수학 점수가 0~100 범위를 벗어나면 점수가 잘못입력되었다는 alert 띄우고
 * 다시 점수를 입력받기
 */

/*
const screCheck = () => {
  const inputKor = document.querySelector("input[name='sc_kor");
  const inputMath = document.querySelector("input[name='sc_math");
  const inputEng = document.querySelector("input[name='sc_eng");

  if (!inputKor.value) {
    alert("국어 점수를 입력하세요");
    inputKor.focus();
  } else if (Number(inputKor.value) < 0 || Number(inputKor.value) < 100) {
    alert("국어 점수는 0~100 까지 범위에서 입력하세요");
    inputKor.focus();
  } //영어점수
  else if (!inputEng.value) {
    alert("영어 점수를 입력하세요");
    inputEng.focus();
  } else if (Number(inputEng.value) < 0 || Number(inputEng.value) < 100) {
    alert("영어 점수는 0~100 까지 범위에서 입력하세요");
    inputEng.focus();
  } //수학점수
  else if (!inputMath.value) {
    alert("영어 점수를 입력하세요");
    inputMath.focus();
  } else if (Number(inputMath.value) < 0 || Number(inputMath.value) < 100) {
    alert("영어 점수는 0~100 까지 범위에서 입력하세요");
    inputMath.focus();
  }
};
*/

const scoreInput = () => {
  const tr = document.createElement("TR");
  let sum = 0;

  for (let i = 1; i < inputs.length; i++) {
    if (!inputs[i].value) {
      alert("점수를 입력하세요");
    }

    if (Number(inputs[i].value) > 100 || Number(inputs[i].value) < 0) {
      alert("점수가 잘못 입력되었습니다");
      inputs[i].value = "";
      inputs[i].focus();
      return false;
    }
  }

  inputs.forEach((input) => {
    const td = document.createElement("TD");
    td.textContent = input.value;
    tr.appendChild(td);

    if (input.name !== "sc_num" && input.name !== "sc_name") {
      sum += Number(input.value);
    }
  });

  let td = document.createElement("TD");
  td.textContent = sum;
  tr.appendChild(td);
  tbodyScore.appendChild(tr);
};

btnAdd?.addEventListener("click", scoreInput);
//btnAdd?.addEventListener("click", ()=> {
// scoreCheck 함수를 실행하여 return 값이 true인 경우
// scoreInput 함수를 실행하여 데이터를 추가하라
//if(scoreCheck()){
