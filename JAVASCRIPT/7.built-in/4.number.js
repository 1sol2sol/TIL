// MDN 레퍼런스
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

const num1 = 123;
const num2 = new Number(123);

console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 < Number.MAX_VALUE) {
}
if (Number.isNaN(num1)) {
}

// 지수표기법(매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); //1.02e+2

// 반올림하여 문자열로 변환
const num4 = 1234.12;
// 실수가 정수로 반환되어서 문자열로 출력됨
console.log(num4.toFixed());

console.log(num4.toString());
console.log(num4.toLocaleString("ar-EG"));

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); // 1234.1
console.log(num4.toPrecision(4)); // 1234
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수 표기법으로 반환됨

// 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
console.log(Number.EPSILON);

if (Number.EPSILON > 0 || Number.EPSILON < 1) {
  console.log(Number.EPSILON);
}

// 이 계산식의 결과를 우리는 0.1이라고 예상한다.
// 하지만 결과는 0.10000000000000003 가 나왔다.
// 계산될때 10진수를 2진수로 반환해서 저장하기 때문에 이러한 사소한 오차가 발생하고
// 이러한 사소한 오차를 EPSILON 이라 한다.
const num = 0.1 + 0.2 - 0.2;
console.log(num);

function isEqual(original, expected) {
  return original === expected;
}

console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));

// 따라서 이러한 사소한 차이를 없애고 결과값을 얻고 싶다면
// Math.abs를 사용한 이유는 절대값이 -가 아니게 되기 위해
function isEqual2(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqual2(1, 1));
console.log(isEqual2(0.1, 0.1));
console.log(isEqual2(num, 0.1));
