// 불리언타입
let 참 = true;
let 거짓 = false;

console.log(참);
console.log(거짓);

// 활용예:
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);

console.clear();
// Falshy 거짓인 값
// !! 두개를 붙이면 값을 true나 false로 변환할 수 있다.
console.log(!!0); // false
console.log(!!-0); // false
console.log(!!''); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false

// Truthy 참인 값
console.log(!!1); // true
console.log(!!-1); // true
console.log(!!'text'); // true
console.log(!!{}); // true
console.log(!!Infinity); // true