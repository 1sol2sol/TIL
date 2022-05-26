// while(조건){}
// 조건이 false가 될때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

// while문 안에서도 continue와 break를 사용할 수 있음
let isActive = false;
let i = 0;
while (isActive) {
  console.log("아직 살아있따.");
  if (i === 1000) {
    break;
  }
  i++;
}

// do-while : 꼭 한번은 무조건 실행해야할때 사용함
do {
  console.log("do-while 아직 살아있따.");
} while (isActive);
