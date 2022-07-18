// Iterable 하다는건! 순회가 가능하다느나것!
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는것은
// 순회 가능한 객체이다 라는걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? for...of, spread 연산자에서 사용 가능 
// 이것이 가능한 기본적인 자료 구조는 Array, String, Map, Set등이 있음. 


/**
 * 자바스크립트에서 이터레이션 프로토콜을 따르기 위해서는 총 두가지 프로토콜을 따라야한다.
 * 1. 이터러브블 프로토콜을 따라야한다.
 * 2. 이터러블 프로토콜을 따른다는 말은 [Symbol.iterator]() 호출시 
 * 3. Iterator 프로토콜을 따르는 {} 객체를 return 해야함
 * 4. 이 Iterator 프로토콜은 next()라는 함수가 있어서 다음값을 계속 리턴하도록 만들면 된다는것.
 * 
 * {
 *  [Symbol.iterator]():Iterator 프로토콜
 *                      {
 *                         next(): 다음값
 *                      }
 * }
 */

const array = [1, 2, 3];
for (const item of array.values()) {
  console.log(item); // 1,2,3 
}

const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  // for...in : key를 출력
  console.log(item); // 0 1
}

const iterator = array.values();
// for (const item of iterator) {
//   console.log(item); // 1 2 3
// }

// iterator.next()는 값을 리턴하는것이 아니라 결과 객체 리턴함
//console.log(iterator.next()); // { value: 1, done: false } done: 제일 마지막 아이템인지 아닌지를 나타냄

// 만약 값만 출력하고 싶다면
// console.log(iterator.next().value); // 1
// console.log(iterator.next().value); // 2
// console.log(iterator.next().value); // 3
// console.log(iterator.next().done); // true : 반복이 끝남

while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
