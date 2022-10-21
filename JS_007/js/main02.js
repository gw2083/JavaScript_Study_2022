document.addEventListener("DOMContentLoaded", () => {
  const btnAdd = document.querySelector("button.add");
  const inputs = document.querySelectorAll("input");
  const tbodyAddr = document.querySelector("tbody.addr");
  let addrList = [];

  const strAddr = localStorage.getItem("myaddr");
  addrList = JSON.parse(strAddr);

  if (!addrList) {
    addrList = [];
    return false;
  }

  for (i = 0; i < addrList.length; i++) {
    const tr = document.createElement("TR");
    let td = document.createElement("TD");
    td.textContent = addrList[i].number;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = addrList[i].name;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = addrList[i].kor;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = addrList[i].eng;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = addrList[i].math;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = addrList[i].total;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = addrList[i].avg;
    tr.appendChild(td);

    tbodyAddr.appendChild(tr);
  }

  const addrCheck = () => {
    for (i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (!input.value) {
        alert("입력");
        return false;
      }
    }
    return true;
  };

  const addrInput = () => {
    let total =
      Number(inputs[2].value) +
      Number(inputs[3].value) +
      Number(inputs[4].value);
    let avg = Math.round(total / 3);

    const addr = {
      number: inputs[0].value,
      name: inputs[1].value,
      kor: inputs[2].value,
      eng: inputs[3].value,
      math: inputs[4].value,
      total: total,
      avg: avg,
    };

    addrList.push(addr);

    localStorage.setItem("myaddr", JSON.stringify(addrList));

    const tr = document.createElement("TR");

    for (let i = 0; i < inputs.length; i++) {
      const td = document.createElement("TD");
      td.textContent = inputs[i].value;
      tr.appendChild(td);
    }

    let td = document.createElement("TD");
    td.textContent = total;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = avg;
    tr.appendChild(td);

    tbodyAddr.appendChild(tr);
  };

  btnAdd?.addEventListener("click", () => {
    if (addrCheck()) {
      addrInput();
    }
  });
});
