var a = 0;
var a = 10;
console.log(a);

var num = 1; // 전역변수

if (true) {
  var num = 100; // 전역변수(if문은 함수문이 아님)
}

console.log(num); // 100
