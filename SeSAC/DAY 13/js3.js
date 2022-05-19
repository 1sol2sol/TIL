
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

console.clear()

let v1=10 , v2=20, v3=30, v4=40, result; // result는 값이 할당안되고 변수 선언만 된 상태(undefined)
result = !(v1>v2); // a가 b보다 크지않다.
console.log(result); // true

result = !!(v1>v2); 
console.log(result); // false (true값의 부정)


// 논리 연산자
result = v1>v2 && v2<=v3;
console.log(result); //false

result = v1<v2 && v2<=v3;
console.log(result); // true

result = v1>v2 || v2<=v3 || v3<=v4;
console.log(result); // true

//삼항연산자, 조건부연산자
result = v1>v2 ? 'A' : 'B'; // v1이 v2보다 크면 A를 출력, 작으면 B를 출력함
console.log(result); // B