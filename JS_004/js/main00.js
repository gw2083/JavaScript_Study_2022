const btnRed = document.querySelector("#btnRed");
const btnBlue = document.querySelector("#btnBlue");
const btnYellow = document.querySelector("#btnYellow");
const content = document.querySelector("#content");

btnRed?.addEventListener("click", () => {
  content.style.backgroundColor = "red";
  content.style.color = "white";
});

btnBlue?.addEventListener("click", () => {
  content.style.backgroundColor = "blue";
  content.style.color = "white";
});

btnYellow?.addEventListener("click", () => {
  content.style.backgroundColor = "yellow";
  content.style.color = "black";
});
