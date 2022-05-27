// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a=1, b=1
// undefined인 경우에만 기본값을 사용하고 기본값이 주어졌어도
// 외부에서 값을 전달해준다면 외부값을 사용함

function add(a, b) {
  //add(a=1, b=1) 처럼 기본값 설정도 가능함
  console.log(a);
  console.log(b);
  console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
  console.log(arguments[1]);
  return a + b;
}
add(1, 2);

// Rest 매개변수 Rest Parameters
// : 몇개의 인자를 받을지 모를때 사용할 수 있음
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
