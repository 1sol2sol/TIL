let hello = "안녕하세요"; // 전역변수
console.log(hello);

if (true) {
  let hello = "hello"; // 지역변수
  console.log(hello);
}

console.log(hello); // 안녕하세요

// let hello = "반갑습니다."; -> 불가능

hello = "반갑습니다";
console.log(hello);
