// Iterable 하다는건! 순회가 가능하다느나것!
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는것은
// 순회 가능한 객체이다 라는걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? for...of, spread

const array = [1, 2, 3];
for (const item of array.values()) {
  console.log(item);
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

// iterator.next()는 값을 리턴하는것이 아니라 결과를 리턴함
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
