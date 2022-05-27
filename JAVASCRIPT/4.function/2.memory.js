function add(a, b) {
  return a + b;
}

// 함수를 가리키고 있는 메모리주소를 복사해서 할당하는것과 동일
const sum = add;

console.log(sum(1, 2)); // 3
console.log(add(1, 2)); // 3
