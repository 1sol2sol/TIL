
let userTelNumber;
let userAddress;

let num=50; /* 숫자형 데이터 */ 
let str='자바스크립트';
let num1='2022'; /*문자형 데이터*/ 
let value1=2022+'2023'; /* +는 연결 연산자 이므로 value1의 타입은 string */
let value2=2022/'2023'; 
/* 숫자와 문자를 나눌수 없기 때문에 nan(not a number)인데 nan은 number의 속성이므로 type이 number가 나온다.  */

console.log(typeof value1);
console.log(typeof value2);

let str1 = 2030;
let str2 = '안녕'+'\n'+str1+'년'; 

/* 템플릿 리터럴 벡틱` */
let str3 = `안녕하세요 올해는 
${str1}년입니다.`

console.log(str3);
console.log(str2);

/*boolean */
let isOn=true;
let isOff=false;

console.log(isOn);
console.log(typeof isOff);

let js1; /*값이 할당되지 않은 undefined 상태 */
console.log(typeof js1);