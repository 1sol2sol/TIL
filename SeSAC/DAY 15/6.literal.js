/* hello(); // 먼저 변수를 읽고 그 다음에 할당된 함수들은 호이스팅이 불가하다. 할당이 된 다음에 함수를 호출해야함*/
const hello = function () {
  console.log("hello");
};

// ES6 (화살표 방식)
const goodbye = () => {
  console.log("goodbye");
};

goodbye();

const hi = function hiFnc() {
  console.log("hi");
};

hi();

function world() {
  console.log("world");
}
world(); // 선언적 함수들만 호이스팅이 가능함
