// Set (중복이 절대 안된다!)
const set = new Set([1,2,3]);
console.log(set); // Set(3) { 1, 2, 3 }

console.log(set.size); // 3

// 존재하는지 확인
console.log(set.has(2)); // true
console.log(set.has(6)); // false

// 순회
set.forEach((item) => console.log(item)); // 1 2 3
for(const value of set.values()){
  console.log(value); // 1 2 3
}

// 추가
set.add(6)
console.log(set); //Set(4) { 1, 2, 3, 6 }
set.add(6) // 이미 있는것을 또 추가하려고 하면 무시됨
console.log(set);

// 삭제
set.delete(6)
console.log(set); // Set(3) { 1, 2, 3 }

// 전부 삭제
set.clear();
console.log(set); // Set(0) {}

// 오브젝트 세트
const obj1 = {name: '🍎', prcice: 8};
const obj2 = {name: '🍌', prcice: 5};
const objs = new Set([obj1, obj2]);
console.log(objs); // Set(2) { { name: '🍎', prcice: 8 }, { name: '🍌', prcice: 5 } }


// 퀴즈
obj1.prcice = 10;
objs.add(obj1); 
console.log(objs); // Set(2) { { name: '🍎', prcice: 10 }, { name: '🍌', prcice: 5 } }

// 퀴즈
const obj3 = {name: '🍌', prcice: 5} // object literal을 이용해서 만들었으므로 새로운 주소에 저장되는것
objs.add(obj3)

/**
 * Set(3) {
  { name: '🍎', prcice: 10 },
  { name: '🍌', prcice: 5 },
  { name: '🍌', prcice: 5 }
}
 */
console.log(objs);
obj3.prcice = 8;

console.log(objs);
/**
 * Set(3) {
  { name: '🍎', prcice: 10 },
  { name: '🍌', prcice: 5 },
  { name: '🍌', prcice: 8 } => obj.3만 가격이 8로 업데이트 되었음
}
 */