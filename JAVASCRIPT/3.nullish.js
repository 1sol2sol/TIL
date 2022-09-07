// NUllish Coalescing Operator
// ES11(ECMAScript 2020)
// ?? => null과 undefined인 경우만 체크해서 사용하고 싶을때
// || falshy한 경우 설정(할당)

let num = 0;
// num의 값이 숫자 0일경우 boolean값이 false이므로 -1이 출력됨
console.log(num || '-1');

// num의 값이 없을때만 -1을 설정하고 싶다면?
console.log(num ?? '-1'); // 0
