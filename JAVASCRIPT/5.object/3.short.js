// 키 이름과 참조하고 있는 변수의 이름이 동일할 경우 축약하여 사용할 수 있다.
const x = 0;
const y = 0;
const cordinate = { x, y }; //{ x: x, y: y };
console.log(cordinate);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}
