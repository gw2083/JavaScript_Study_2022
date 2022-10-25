const nums = [];

const mainSection = document.querySelector("section.main");
const evenSection = document.querySelector("section.even");
const oddSection = document.querySelector("section.odd");
const btn = document.querySelector("button.btn");

const makeNums = () => {
  for (let i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.random() * 100) + 1;
  }
};

const viewNums = () => {
  mainSection.textContent = "";
  evenSection.textContent = "";
  oddSection.textContent = "";

  nums.forEach((num) => {
    let divs = document.createElement("DIV");
    divs.textContent = num;
    mainSection.appendChild(divs);
  });

  nums.forEach((num) => {
    if (num % 2 === 0) {
      const even = document.createElement("DIV");
      even.textContent = 짝수;
      let divs = document.createElement("DIV");
      divs.textContent = num;

      evenSection.appendChild(divs);
    }
  });

  nums.forEach((num) => {
    if (num % 2 != 0) {
      let divs = document.createElement("DIV");
      divs.textContent = num;
      oddSection.appendChild(divs);
    }
  });
};

makeNums();
viewNums();

btn?.addEventListener("click", () => {
  makeNums();
  viewNums();
});
