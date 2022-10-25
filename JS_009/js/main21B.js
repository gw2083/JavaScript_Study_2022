const divs = document.querySelectorAll("section.main div");
const btnRefresh = document.querySelector("button");
const nums = [];

for (let i = 0; i < 10; i++) {
  const rndNum = Math.floor(Math.random() * 100) + 1;
  nums[i] = rndNum;
}

nums.forEach((num, index) => {
  divs[index].textContent = num;
});

btnRefresh?.addEventListener("click", () => {
  // 키보드에서 F5 키 누른 것처럼 정말로 화면을 새로고침 하는 것
  // 무식한 방법임
  document.location.reload();
});
