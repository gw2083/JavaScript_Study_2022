const arr = []; // length 가 0인 배열
const h1 = document.querySelector("h1");

for (let i = 0; i < 10; i++) {
  let rndNum = Math.floor(Math.random() * 100) + 1;
  arr[i] = rndNum;
}

arr.forEach((e) => {
  console.log(e);
  document.writeln(e);
});

arr.forEach((e) => {
  h1.textContent += ` ${e} `; //h1.textContent = h1.textContent + num
});
