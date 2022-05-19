/* 연산자 */

// 증감연산자

// 선행
let num3 = 10;
console.log(++num3); //11
console.log(++num3); //12
console.log(--num3); //11

// 후행
console.log(num3++); //11 -> 12
console.log(num3++); //12 -> 13
console.log(num3); //13 

let a= 1;
let b= a++; // b=2 , a=2
let c= a++ + 2; // c=4, a=3

console.log(a);
console.log(c);
console.clear() // 콘솔 삭제

// 대입 연산자
let value1 = 1;
value1 += 10;
console.log(value1); // 11

let value2 = 1;
value2 *= 10 // 10
console.log(value2);
value2 *= 10;
console.log(value2); // 100

value2 %= 10;
console.log(value2); // 0 : 나머지가 0이기 때문에 




