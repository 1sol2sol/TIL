function hello() {
  console.log("hello world");
} // 선언부

hello(); // 호출부

function num(a, b) {
  // parameter(매개변수)
  return a + b; // 30
}

const result = num(10, 20);
console.log(result);

function userInfo(name, age) {
  return `이름은 ${name} 나이는 ${age}`;
}

const profile = userInfo("한솔", "29");
console.log(profile);

function mul(num1, num2) {
  return num1 * num2;
}
const mulResult1 = mul(2, 30);
console.log(mulResult1); // 60

const mulResult2 = mul;
console.log(mulResult2); // function
console.log(mulResult2(3, 30)); // 90
