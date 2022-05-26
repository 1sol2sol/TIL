// 조건문 Conditional Statement
// switch
// if else if else if else if ... else
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
let day = 10; // 0: 월요일, 1: 화요일.... 6: 일요일
let dayName;
if (day === 0) {
  dayName = "월요일";
} else if (day === 1) {
  dayName = "화요일";
} else if (day === 2) {
  dayName = "수요일";
} else if (day === 3) {
  dayName = "목요일";
} else if (day === 4) {
  dayName = "금요일";
} else if (day === 5) {
  dayName = "토요일";
} else if (day === 6) {
  dayName = "일요일";
}

// break를 사용하는것이 중요
// break를 사용하지 않으면 모든 케이스를 확인함
switch (day) {
  case 0:
    dayNmame = "월요일";
    break;
  case 1:
    dayName = "화요일";
    break;
  case 2:
    dayName = "수요일";
    break;
  case 3:
    dayName = "목요일";
    break;
  case 4:
    dayName = "금요일";
    break;
  case 5:
    dayName = "토요일";
    break;
  case 6:
    dayName = "일요일";
    break;
  default:
    console.log("해당하는 요일이 없음!");
}

console.log(dayName);

// break를 사용하지 않아야하는 경우도 있음
// 하나 이상의 여러가지 케이스가 동일한 코드를 수행해야할때
// 케이스별로 제어를 하기 위해 break가 도입된것!

let condition = "good"; // okay, good -> 좋음, bad -> 나쁨!
let text;
switch (condition) {
  case "okay":
  case "good":
    text = "좋음!";
    break;
  case "bad":
    text = "나쁨!";
    break;
}
console.log(text);
