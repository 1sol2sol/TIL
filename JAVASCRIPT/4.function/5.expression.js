// 함수 선언문 function name() { }
// 함수 표현식 const name = function () {}

// 표현식으로 사용되는 함수는 이름을 작성할 순 있지만 외부에서 접근할 수 없고
// 이름을 생략해서 작성함 -> 변수에 할당한 이름을 작성해서 호출해야함
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expressions)
// 바로 즉각적으로 사용하고 싶을떄 (많이 사용하지는 않음)
(function run() {
  console.log("😍");
})();
