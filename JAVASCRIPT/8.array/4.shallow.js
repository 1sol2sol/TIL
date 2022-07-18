// 배열이라는 상자에 피자와 라면을 담음
// 오브젝트가 새롭게 만들어지는것이 아니라 만들어진 오브젝트 pizza와 ramen의 주소를 가리키는것
// 따라서 오브젝트를 수정한다면(ex: pizza price 4로 변경) 배열에 들어있는 오브젝트는 
// 새롭게 만들어진게 아니라 메모리주소를 가리키기 때문에 변경된 사항이 반영되어짐 
// 오브젝트를 수정했을때 그 수정사항이 반영됨


// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign
const pizza = { name: "🍕", price: 2, owner: { name: "hansol" } };
const ramen = { name: "🍜", price: 3 };
const sushi = { name: "🍣", price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log("store1", store1);
console.log("store2", store2);

store2.push(sushi); 
console.log("store1", store1); 
console.log("store2", store2); // store2에만 sushi가 추가 

pizza.price = 4; 

// pizza의 가격을 변경하니 store1과 2 모두 피자의 가격이 변경되어 출력 됨 
console.log("store1", store1);
console.log("store2", store2);


