const content = document.querySelector("#content");
const btnBox = document.querySelector("div.btn_box");

btnBox?.addEventListener("click", (tag) => {
  // 최초로 클릭된 tag 의 정보 보관
  const target = tag.target;
  // 최초로 클릭된 tag 가 버튼이면
  if (target.tagName === "BUTTON") {
    const text = target.innerText;
    if (text === "Red") {
      content.style.backgroundColor = "red";
    }
    if (text === "Blue") {
      content.style.backgroundColor = "blue";
    }
    if (text === "Yellow") {
      content.style.backgroundColor = "yellow";
    }
  }
});
