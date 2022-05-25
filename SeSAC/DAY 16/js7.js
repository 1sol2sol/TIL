//생성자 함수를 사용해서 여러개의 오브젝트를 만들어서 사용
//prototype을 이용해서 상속 받아 값을 참조
// => ES6 클래스 Class : 생성자와 프로토 타입을 같이 작성할 수 있음

class User {
  // 생성자 함수를 클래스안에 만들어줌
  constructor(name, age) {
    this.name = name;
    this.age = age;
    /*  this.hi = function () {
      console.log(`이름은 ${this.name} 나이는 ${this.age}`);}; */
  }
  hi() {
    // prototype 으로 등록함
    console.log(`이름은 ${this.name} 나이는 ${this.age}`);
  }
}

const user1 = new User("다니엘", 32);
const user2 = new User("믹", 23);

console.log(User.prototype);

// people1{name:''}

class People {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`${this.name}님 반갑습니다.`);
    // return 값이 없으면 log 뒤에 undefined 같이 찍힘
  }
  welcome() {
    console.log(`${this.name}님 방문해주셔서 감사합니다.`);
  }
}

const people1 = new People("새싹");
console.log(people1.hello());
console.log(people1.welcome());
console.log(people1); // people1__proto__ => Object.getPrototypeOF(people1)

console.log(Object.getPrototypeOf(people1));
