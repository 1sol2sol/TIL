// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인경우 : 거짓인경우

let fruit = "orange";
if (fruit === "apple") {
  console.log("🍎");
} else if (fruit === "orange") {
  console.log("🍊");
} else {
  console.log("!!");
}

fruit === "apple" ? console.log("🍎") : console.log("!!");

// 변수에 상항 조건 연산자를 이용하여 할당함
let emoji = fruit === "apple" ? "🍎" : "!!";
console.log(emoji);
