const nums = [];
const spans = document.querySelectorAll("span");
const btn = document.querySelector("button.btn");

const newNum = () => {
  for (let i = 0; i < 10; i++) {
    let rndNum = Math.floor(Math.random() * 100) + 1;
    nums[i] = rndNum;
  }
  for (let i = 0; i < spans.length; i++) {
    spans[i].textContent = nums[i];
  }
};
newNum();

btn?.addEventListener("click", newNum);
