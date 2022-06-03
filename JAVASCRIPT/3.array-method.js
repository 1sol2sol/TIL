// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ["🍌", "🍎", "🍋"];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf("🍎")); // 1

// 배열안에 특정한 아이템이 있는지
console.log(fruits.includes("🍎")); // true

// 추가 - 제일 뒤
let length = fruits.push("🍑"); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 추가 = 제일 앞
length = fruits.unshift("🍓"); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem); // 제거 된 아이템을 반환해줌

// 제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem); // 제거 된 아이템을 반환해줌

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(deleted);
fruits.splice(1, 1, "🍎", "🍓");
console.log(fruits);

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2); // [0],[1]을 슬라이스
console.log(newArr); // 잘라진 새로운 배열을 리턴
console.log(fruits); // 기존의 배열은 유지

newArr = fruits.slice(-1);
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

// 중첩된 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];

console.log(arr);
console.log(arr.flat(3)); // flat(): 기존의 배열을 수정하지 않고 새로운 배열을 리턴함
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
arr.fill(0);
console.log(arr);

arr.fill("s", 1, 3);
console.log(arr);

arr.fill("a", 1);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text); //0,a,a,a,a,a,a,a

text = arr.join("|");
console.log(text);
