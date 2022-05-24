/**
 * 선언적 함수같은 경우는 자동으로 세미콜론이 찍히기 때문에 상관없지만
 * 즉시 실행함수나 변수에 참조 되어있는 함수들은 꼭 세미클론을 마지막에 찍어줘야한다.
 */

function world() {
  console.log("world");
}

const goodbye = () => {
  console.log("goodbye");
};

const hello = function () {
  console.log("hello");
};

// 범위때문에 라이브러리 사용할때 즉시 실행 함수를 많이 이용함
(function () {
  console.log("즉시 실행");
})(); // function 자체를 괄호로 한번 묶고 그 뒤에 함수를 호출하기 위에 ();를 붙임

(function num() {
  console.log(100);
})();
