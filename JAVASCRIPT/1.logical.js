// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation

const obj1 = {name: 'dog'} // 값이 있으므로 boolean 값은 true가 됨 
const obj2 = {name: 'cat', owner: 'hansol'}


// 조건문안에서 쓰면 각각의 표현식들이 boolean 값으로 평가됨
// || 연산자이면 앞의 값이 true이면 조건문은 true이고 앞의 조건이 false라면 뒤의 조건이 true인지를 확인함 
if(obj1 && obj2){
  console.log('둘다 true!');
}


// 조건문 밖에서 쓸때는 평가를 단축함 
// obj1이 true고 나머지 하나 남은 조건은 true나 false로 평가하지 않고 단축함
// 평가 대신에 뒤의 obj2는 result에 할당하게 됨 
let result = obj1 && obj2;
console.log(result); // { name: 'cat', owner: 'hansol' }

// obj1이 true면 뒤의 조건은 확인을 거치지 않아도 됨 
// 따라서 result에 바로 obj1을 할당함 
result = obj1 || obj2;
console.log(result); // { name: 'dog' }

// 활용예
// 조건이 truthy일때 && 무언가를 해야할 경우
// 조건이 false일때 || 무언가를 해야 할 경우
function changeOwner(animal){
  if(!animal.owner){
    throw new Error('주인이 없으므로 새로운 주인을 선택해야합니다')
  }
  animal.owner = '바뀐주인'
}

function makeNewOwner(animal){
  if(animal.owner){
    throw new Error('주인이 있으므로 새로운 주인이 될 수 없음')
  }
  animal.owner = '새로운주인'
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할때
let item; // = {price: 1}
// item이 undefined로 boolean값 false이므로 item이 price에 할당되어서 undefined가 출력됨
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter (message = "hi") 와의 차이점은 전달하지 않거나, undefined인 경우에만 설정됨
// 따라서 전달값이 null이 되거나 0이 될 경우에는 default값이 설정되지 않음
// || 연산자는 값이 falsy한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message){
  const text = message || 'Hello'
  console.log(text);
}

print(); // Hello
print(''); // Hello
print(null); // Hello