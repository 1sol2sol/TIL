const fruits = ["🍌", "🍎", "🍇", "🍑"];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 추가,삭제 - 좋지 않은 방식!
// const fruits = ["🍌", "🍎", "🍇", "🍑"];
fruits[6] = "🍓";
console.log(fruits);

delete fruits[1];
// [ '🍌', <1 empty item>, '🍇', '🍑', <2 empty items>, '🍓' ] 삭제된 공간이 empty로 남아있음
console.log(fruits);
