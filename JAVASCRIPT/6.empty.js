// null, undefined
let variable;
console.log(variable); // undefined (있는지 없는지 정해지지 않은 상태)

variable = null; // 명시적으로 비어있다고 할당함
console.log(variable); // null

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태
activeItem = null; // 활성화된 아이템이 없는 상태

console.clear();
console.log(typeof null); // object
console.log(typeof undefined); // undefined