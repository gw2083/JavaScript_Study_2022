/**
 * Selector
 * CSS 나 JS 코드에서 참조할 수 있는 tag 요소들
 * tagName(div, p) : 여러개 있을 수 있다
 * id(#username, #password) : 한 화면에 1개만 있어야 한다
 * class(div.div1, button.btn) : 여러개 있을 수 있다
 */
const username = document.querySelector("#username");
const password = document.querySelector("#password");
/**
 * HTML 에서 id 나 class 이름을 지을 때 snake case 로 많이 작성한다
 * 이 이름을 JS 코드에서 변수로 선언할 때는 가급적 Camel case 로 작성하는 것이 좋다
 */
const rePassword = document.querySelector("#re_password");
const btnSubmit = document.querySelector("button.btn_submit");

btnSubmit?.addEventListener("click", () => {
  const txtRePassword = rePassword.value;
  // if(username.value === "") : 보편적인 언어
  // JS 고유의 코드
  if (!username.value) {
    alert("아이디를 입력하세요");
    username.focus();
    return false;
  }
  if (!password.value) {
    alert("비밀번호를 입력하세요");
    password.focus();
    return false;
  }
  if (!txtRePassword) {
    alert("비밀번호 확인을 입력하세요");
    rePassword.focus();
    return false;
  }
  // 비밀번호와 비밀번호 확인 값(데이터)가 다르면
  if (password.value !== txtRePassword) {
    alert("비밀번호와 확인 값이 다릅니다 \n다시 확인해주세요");
    password.value = "";
    rePassword.value = "";
    password.focus();
    return false;
  }
  // 서버로 데이터 전송하기
});
