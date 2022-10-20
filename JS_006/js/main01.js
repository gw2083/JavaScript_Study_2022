// 다른 scope 에서 선언할 수 없음
const inputs = document.querySelectorAll("input");
const tbodyScore = document.querySelector("tbody.score");
const btnAdd = document.querySelector("button.add");

// JS 의 전통적인 함수 선언 방법
// function func1() {}

// ES5 이상에서 사용하는 함수 선언 방법
// 화살표 함수(Arrow function)
const scoreInput = () => {
  const tr = document.createElement("TR");
  let sum = 0;

  for (let i = 0; i < inputs.length; i++) {
    const td = document.createElement("TD");
    // textContent : innerText 와 같은 속성
    td.textContent = inputs[i].value;
    tr.appendChild(td);
    // 과목별 총점 구하기 : input box 에 입력된 데이터를 숫자로 바꾸어 sum 변수에 누적하기
    // 문자열을 Number()를 사용하여 변환(wrapping) 하면 NaN(Not a Number)값이 된다
    // NaN 을 변수에 덧셈하면 최종결과도 NaN
    // 미리 값을 Number()로 변환해 보고 결과가 true 인 경우에만 sum 변수에 누적

    // 학번과 이름을 제외한 데이터만 덧셈하기
    if (i > 1) {
      sum += Number(inputs[i].value);
    }
  }

  let td = document.createElement("TD");
  td.textContent = sum;
  tr.appendChild(td);

  td = document.createElement("TD");
  // Math : 수학 관련된 함수를 제공하는 도구(클래스)
  // Math.round() : 소수점 첫째 자리에서 반올림하여 정수로
  // Math.floor(값)) : 소수점 부분 버리기
  //           값보다 크거나 같은 정수 중 가장 큰 정수
  // Math.ceil(값) : 소수점 첫째 자리 무조건 올림
  //           값보다 크거나 같은 정수 중 가장 작은 정수
  td.textContent = Math.round(sum / 3);
  tr.appendChild(td);

  tbodyScore.append(tr);
};

// click event 가 발생하면 미리 선언해둔 scoreInput 함수를 실행해라
btnAdd?.addEventListener("click", scoreInput);
