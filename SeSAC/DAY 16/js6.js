const parent = {
  name: "kim",
  age: 50,
};

// 1. 생성자(constructor) 함수로 만든다.
// 2. Object.create() -> ES5에서 만들어짐

const child = Object.create(parent); // -> 나의 부모 요소에 prototype에 ()을 넣어줘 , 따라서 나(child)는 비어있음

console.log(child); // {}
console.log(child.name); // kim

const item = {
  title: "TEE",
  price: 5000,
};

const itemChild = Object.create(item);
itemChild.price = 7000;
console.log(itemChild.price);
console.log(itemChild);

const itemChildChild = Object.create(itemChild);
console.log(itemChildChild.price); // 7000
