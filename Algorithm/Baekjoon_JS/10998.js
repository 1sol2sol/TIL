// 두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.
// 예제 1 2
// 출력 2

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a*b);