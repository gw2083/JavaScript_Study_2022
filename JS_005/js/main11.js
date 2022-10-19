/**
 * 1. 이름, 주소, 전화번호를 입력한 후 추가버튼을 클릭하면
 * 입력된 이름, 주소, 전화번호를 table 에 추가
 * 2. 화면의 UI 를 각자 디자인
 */

const btn = document.querySelector("button.btn");
const inputs = document.querySelectorAll("input");
const tableAddr = document.querySelector("table.addr");

btn?.addEventListener("click", () => {
  const tr = document.createElement("TR");

  let td = document.createElement("TD");
  td.innerText = inputs[0].value;
  tr.appendChild(td);

  td = document.createElement("TD");
  td.innerText = inputs[1].value;
  tr.appendChild(td);

  td = document.createElement("TD");
  td.innerText = inputs[2].value;
  tr.appendChild(td);

  tableAddr.appendChild(tr);

  inputs[0].value=""
  inputs[1].value=""
  inputs[2].value=""
  inputs[0].focus()
});
