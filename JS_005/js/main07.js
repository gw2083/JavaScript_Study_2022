/**
 * input box 에 이름, 주소, 전화번호를 입력하면
 * 화면의 span tag 의 해당 위치에 확인값을 출력하기
 */

const inputs = document.querySelectorAll("input");
const btnOk = document.querySelector("button.btn_ok");
const spans = document.querySelectorAll("span");

btnOk?.addEventListener("click", () => {
  for (let i = 0; i < inputs.length; i++) {
    document.writeln(inputs[i].value);
  }
});
