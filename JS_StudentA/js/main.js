// JS 문법을 좀 더 엄격하게 관리 해달라
// 선언되지 않은 변수를 사용하려고 할 때 경고 or 오류를 보여준다
"use strict";

// script tag 를 어디에 두어도 상관없도록 하기 위한 조치
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input");
  const btnAdd = document.querySelector("div.input button");
  const tbodystInfo = document.querySelector("tbody.st_info");
  let studentList = [];

  // 추가 버튼을 클릭했을 때 배열에 데이터 추가
  // input tag 에 입력한 데이터를 객체로 만들고 객체를 배열에 추가하기
  const addStudent = () => {
    // 학생정보를 객체로 만들기
    const 학생 = {
      학번: inputs[0]?.value,
      이름: inputs[1]?.value,
      학과: inputs[2]?.value,
      학년: inputs[3]?.value,
      전화번호: inputs[4]?.value,
      주소: inputs[5]?.value,
    };
    // studentList.push(학생);
    // 3명의 학생정보가 studentList 에 저장되어있다고 가정하면,
    // studentList.length 는 3의 값을 가지고 있다 (studentList 끝에 새로운 요소를 추가하는 효과)
    studentList[studentList.length] = 학생;
  };

  // 배열에 저장된 데이터를 table 에 보여주기
  const printStudent = () => {
    // 계속해서 데이터가 무작정 추가되는 것 방지
    tbodystInfo.textContent = "";
    studentList.forEach((학생) => {
      // 학생 객체의 요소들의 데이터만 추출하여 학생 객체 변수에 복사하기
      // 학생 객체는 학생정보 요소(속성)들의 데이터를 담고있는 배열이 된다
      const 학생객체 = Object.values(학생);

      const tr = document.createElement("TR");
      학생객체.forEach((속성) => {
        const td = document.createElement("TD");
        td.textContent = 속성;
        tr.appendChild(td);
      }); // 한 라인에 표시할 학생 정보 완료
      tbodystInfo.appendChild(tr);
    });
  };

  // 배열에 저장된 데이터를 localStorage 에 저장하기
  const saveStudent = () => {
    if (studentList) {
      localStorage.setItem("studentInfo", JSON.stringify(studentList));
    }
  };

  // localStorage 에 저장된 데이터를 불러와서 배열에 다시 저장하기
  const loadStudent = () => {
    const stString = localStorage.getItem("studentInfo");
    if (stString) {
      studentList = JSON.parse(stString);
    }
    if (!stString) {
      studentList = [];
    }
  };

  // 화면이 시작할때(refresh) 한번만 실행되는 함수
  // 여기에서 데이터를 loading 하고 화면에 보여주기
  (() => {
    loadStudent();
    printStudent();
  })();

  btnAdd?.addEventListener("click", () => {
    addStudent();
    printStudent();
    saveStudent();
  });
});
