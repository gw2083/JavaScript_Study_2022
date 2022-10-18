/**
 * 1. 회원가입 버튼을 클릭하면 아이디, 비번, 비번확인 을 입력했는지 확인하고
 *      입력하지 않았으면 입력하도록 focus() 지정
 * 2. 비밀번호와 비밀번호 확인 데이터가 다르면
 *      비밀번호 부터 다시 입력받도록 하기
 */

const btnJoin = document.querySelector("button.btn_submit");
const inputName = document.querySelector("#username");
const inputPw = document.querySelector("#password");
const inputRe = document.querySelector("#re_password");

btnJoin?.addEventListener("click", () => {
  const txtName = inputName.value;
  const txtPw = inputPw.value;
  const txtRe = inputRe.value;

  if (!txtName) {
    alert("아이디 입력");
    inputName.focus();
    return false;
  } else if (!txtPw) {
    alert("비밀번호 입력");
    inputPw.focus();
    return false;
  } else if (!txtRe) {
    alert("비밀번호 확인");
    inputRe.focus();
    return false;
  } else if (txtPw !== txtRe) {
    alert("비밀번호 다시 입력");
    inputPw.focus();
  }
});
