
// 관계 연산자

let a = 10; // number(숫자형 데이터)
let b = '10'; // string(문자 데이터)

let c = a==b; // 값만 같으면 true
let d = a===b; // 값과 타입 모두 같아야 true

console.log(c); // true
console.log(d); // false

let num1=100;
let num2='100';

let num3 = num1!=num2;
console.log(num3); // false : 타입은 다르지만 값은 다르므로 false를 반환함

let num4 = num1 !== num2;
console.log(num4); // true : 타입과 값이 모두 같지 않으므로 true를 반환함