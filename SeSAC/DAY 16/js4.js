function Items(item, price) {
  this.item = item;
  this.price = price;
}
Items.prototype.getTax = function () {
  return this.price * 0.1;
};

let product1 = new Items("book", 15000);
let product2 = new Items("game", 25000);
let product3 = new Items("cd", 2000);

console.log(product1.getTax().toString());
console.log(product2.getTax().toString());
console.log(product3.getTax().toString());

// 인스턴스 오브젝트가 값을 직접 소유하게 만들고 싶으면 constructor에 만든다.
// prototype만 가지고 있고 참조해서 사용하고 싶으면 prototype에 만들어서 상속시킨다.

// 인스턴스에서 부모의 prototype을 확인하는 속성
// 생성자 함수에 의해 생성된 인스턴스 객체가 부모요소에 가지고 있는 프로토 타입을 확인할 수 있는 속성
console.log(product3.__proto__);
console.log(Items.prototype);
