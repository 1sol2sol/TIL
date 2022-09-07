// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.
// null 또는 undefined를 확인할때


// let item = {price: 1};
// const price = item && item.price;
// console.log(item);

// 위의 코드에서 item && item.price; item이 중복되는것을 확인할 수 있다.
let item = {price: 1};
const price = item?.price;
console.log(price);

let obj = {name: 'dog', owner: {name: 'hansol'}};
// const owenrName = obj && obj.owner && obj.owner.name;
const ownerName = obj?.owner?.name;
console.log(ownerName);