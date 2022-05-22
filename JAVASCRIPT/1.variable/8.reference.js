// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; //1
b = 2;
console.log(a); //1
console.log(b); //2

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
  // apple의 주소가 0x1234 일때
  name: "사과",
};
let orange = apple; // orange의 주소도 0x1234 이다.
orange.name = "오렌지";
console.log(apple); //오렌지
console.log(orange); //오렌지
