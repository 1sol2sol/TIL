// 주석 

/**
 * 주석이됨
 * 다음줄로 자동으로 넘어감
 */

 /**변수 규칙!
  * 라틴문자(0-9, a-z, A-Z), _
  * 대소문자를 구분함
  * 추천 : camelCase(likeThis)
  * 한국어X
  * 예약어 사용 불가
  * 숫자로 시작 불가
  * 특수문자 불가(_, $ 두가지는 예외)
  * 이모지 사용 불가
  * 여러개의 변수를 1,2,3 숫자로 구분X -> 최대한 의미있는 구체적인 이름으로 작성!
  */

  let apple;
  let redApple;

  // 나쁜예제
  let num = 20; // 아무런 의미가 없음 
  let audio1;
  let audio2;

  // 좋은예제
  let myAge = 20;
  let backgroundAudio;
  let windAudio;

  // 꿀팁: 뭔지를 먼저 나타내고 구체적인걸 뒤에 적음(검색하기편함)
  let audioBackground;
  let audioWind;