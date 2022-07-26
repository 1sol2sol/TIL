// Map [키, 값]
// key는 중복이 되어서는 안됨
// key만 다르다면 value 값은 중복 가능
// Map은 key를 사용행서 접근해야함(고유한 아이디)

const map = new Map([
  ['key1', '사과'],
  ['key2', '바나나'],
])
console.log(map); // Map(2) { 'key1' => '사과', 'key2' => '바나나' }

// 사이즈 확인
console.log(map.size); // 2

// 존재하는지 확인(map은 key값으로 확인해야함!)
console.log(map.has('key1')); // true
console.log(map.has('key6')); // false

// 순회
map.forEach((value, key) => console.log(key, value)); // key1 사과 key2 바나나
console.log(map.keys()); // [Map Iterator] { 'key1', 'key2' }
console.log(map.values()); // [Map Iterator] { '사과', '바나나' }
console.log(map.entries()); // [Map Entries] { [ 'key1', '사과' ], [ 'key2', '바나나' ] }

// 찾기
console.log(map.get('key1')); // 사과
console.log(map.get('key2')); // 바나나
console.log(map.get('key3')); // undefined

// 추가
map.set('key3', '키위');
console.log(map); // Map(3) { 'key1' => '사과', 'key2' => '바나나', 'key3' => '키위' }

// 삭제
map.delete('key3')
console.log(map); // Map(2) { 'key1' => '사과', 'key2' => '바나나' }

// 전부삭제
map.clear();
console.log(map); // Map(0) {}

// 오브젝트와의 큰 차이점?? 
// 사용할수 있는 함수, interface가 다르다.
const key = {name: 'milk', price: 10};
const milk = {name: 'milk', price: 10, description: '맛있는 우유'};
const obj = {
  [key]: milk,
};
console.log(obj);
// {'[object Object]': { name: 'milk', price: 10, description: '맛있는 우유' }}

const map2 = new Map([[key, milk]])
console.log(map2);
// Map(1) {{ name: 'milk', price: 10 } => { name: 'milk', price: 10, description: '맛있는 우유' }}

console.log(obj[key]); // { name: 'milk', price: 10, description: '맛있는 우유' }
console.log(map2[key]); // undefined
console.log(map2.get(key)); // { name: 'milk', price: 10, description: '맛있는 우유' }
