"ust strict";
document.addEventListener("DOMContentLoaded", () => {
  // 빈 배열을 선언하고, 1~10까지 정수가 채워진 10개의 배열로 만들기
  const array1 = [];
  for (let i = 0; i < 10; i++) {
    array1[i] = i + 1;
  }
  // 선언, 생성되지 않은 변수를 읽으려고 시도
  // console 에 오류를 표현한다
  console.log(array1);

  // array1 을 array2 에 복사하기
  // array1 의 데이터가 복제되는 것이 아니고
  // 데이터가 저장된 기억장소의 주소만 복사된다
  // array1, array2 가 바라보는 기억장소가 동일한 곳이 되어 한곳에서 요소데이터를 변경하면
  // 동시에 데이터가 변경된다
  // => 얕은복사
  const array2 = array1;

  // array1 배열의 데이터를 개별적으로 array3 에 복제하기
  // 데이터가 복제된 array3 는 array1 과 완전히 다른 데이터이다
  // array3 의 요소를 변경해도 array1 에 아무런 영향 없다
  // => 깊은복사
  const array3 = [];
  for (let i = 0; i < array1.length; i++) {
    array3[i] = array1[i];
  }
  array3[0] = 100;
  console.log(array1);
  console.log(array3);

  // ES5 이상에서 사용하는 배열의 깊은복사
  // ...(전개, spread 연산자)
  // array1 배열을 쫙 펼쳐놓고 각각의 요소 값들을 array4 에 추가하라
  const array4 = [...array1];
  console.log(array4);
});
