const btnSave = document.querySelector("button#save");
const inputName = document.querySelector("#name");
const inputTel = document.querySelector("#tel");

const SaveClickHandler = () => {
  const txtName = inputName.value;
  const txtTel = inputTel.value;

  const alertText = "이름 : " + txtName + "\n" + "전화번호 : " + txtTel;
  alert(alertText);
};

// save button 을 클릭했을 때 할 일 지정
btnSave.addEventListener("click", SaveClickHandler);
