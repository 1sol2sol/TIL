// 퀴즈
let num = 2;
// num의 숫자가 짝수이면 👍, 홀수라면 👎

// 1. if문 이용
if (num % 2 === 0) {
  console.log("👍");
} else {
  console.log("👎");
}

// 2. 삼항연산자(tenary) 사용
num % 2 === 0 ? console.log("👍") : console.log("👎");

// 삼항연산자는 조금 더 코드를 간결하게 쓸 수 있다는 장점이 있는데 위 코드를 보면
// console.log 가 반복되는것을 알수있다. 따라서 아래와 같이 코드를 변경한다.

let emoji = num % 2 === 0 ? "👍" : "👎";
console.log(emoji);
