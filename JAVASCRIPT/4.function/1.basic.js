// 사용예제 1
function add(num1, num2) {
  // const를 사용한 이유는 결과를 한번 할당한 다음에 그뒤로 바꿀 이유가 없어서
  // const result = num1 + num2;
  return num1 + num2;
}
const result = add(1, 2); // 함수 호출 ,()를 사용해서 인자를 전달함
console.log(result); // 3

// 사용예제 2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName} 🌺`;
}

let lastName = "김";
let firstName = "지수";
console.log(fullName(firstName, lastName));

let lastName2 = "박";
let firstName2 = "철수";
console.log(fullName(firstName2, lastName2));
