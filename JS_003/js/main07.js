const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// nums 배열에 담긴 각각 요소의 값들을 콘솔에 출력
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

let index = 0;
console.log("1 : ", nums[index++]);
console.log("2 : ", nums[index++]);
console.log("3 : ", nums[index++]);
console.log("4 : ", nums[index++]);
console.log("5 : ", nums[index++]);

// 배열의 개수에 관계없이 전체 요소 출력
for (let i = 0; i < nums.length; i++) {
  console.log(i + 1, " : ", nums[i]);
}

// nums 배열에 담긴 숫자들의 합을 구하여 출력
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log("합 : ", sum);
