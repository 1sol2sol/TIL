// 동등 비교 관계 연산자(Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름

console.log(2 == 2); // ture
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false

console.log(2 == "2"); // true -> 문자열 2가 숫자로 자동변환되서 계산됨
console.log(2 === "2"); // false -> 가지고 있는 값은 같아도 타입은 다름
console.log(true == 1); // true(타입은 다르지만 1을 boolean으로 변환하면 true)
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false
console.clear();

const obj1 = {
  name: "js",
};
const obj2 = {
  name: "js",
};

console.log(obj1 == obj2); // false(obj1과 obj2에는 다른 메모리 주소가 들어있기 때문에 메모리공간에 서로 다른 개별적인 오브젝트로 할당되어져있음)
console.log(obj1 === obj2); // false (값자체가 다르므로 )

console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2; // obj2 변수가 가리키고 있는 주소를 참조값 복사해서 obj3에 할당함

console.log(obj3 == obj2); // 동일한 메모리 주소 값과 타입 모두 같음
console.log(obj3 === obj2); // 동일한 메모리 주소 값과 타입 모두 같음
