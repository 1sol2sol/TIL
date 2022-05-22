// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = "hello";
// text = "hi"; 이렇게 불가능하다.

// 1. 상수(항상 대문자, 단어와 단어 사이는 _로 표현)
const MAX_FRUITS = 5; // 한번 정해지면 값이 절대 바뀌지 못함

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: "apple",
  color: "red",
  display: "🍎",
};
// apple = {}; 다른 object로 할당이 불가능함
console.log(apple);

// apple 이라는 변수 자체에 다른 object로 할당이 되진 않지만
// apple에는 메모리 주소가 할당되어져 있음
// apple에 다른 메모리 주소를 담을 순 없지만 object를 가리키는 곳 heap의 영역은 변경이 가능하다.
apple.name = "orange";
apple.display = "🍊";
console.log(apple);
