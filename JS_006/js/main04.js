const btnAdd = document.querySelector("button.add");
const inputs = document.querySelectorAll("input");
const tbodyList = document.querySelector("tbody.list");

const listCheck = () => {
  for (let i = 0; i < inputs.length; i++) {
    const holderText = inputs[i].placeholder;
    if (!inputs[i].value) {
      alert(`${holderText} 입력하세요`);
    } else {
      continue;
    }
    inputs[i].value = "";
    inputs[i].focus();
    return false;
  }
  return true;
};

const listInput = () => {
  const tr = document.createElement("TR");

  inputs.forEach((input) => {
    const td = document.createElement("TD");
    td.textContent = input.value;
    tr.appendChild(td);
  });

  tbodyList.appendChild(tr);
};

btnAdd?.addEventListener("click", () => {
  if (listCheck()) {
    listInput();
    inputs[0].focus();
  }
});
