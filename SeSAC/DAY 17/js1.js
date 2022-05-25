class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hi() {
    console.log(`이름은 ${this.name}이고 나이는 ${this.age}입니다.`);
  }
}

const user1 = new User("홍길동", 10);
const user2 = new User("홍길동", 20);
console.log(user1);
console.log(user2);
user2.hi();

// extends

class AddUserLocation extends User {
  // 새로만들 클래스 extends 받아올 클래스
  constructor(name, age, location) {
    super(name, age); // -> super: User 클래스를 뜻함
    this.location = location;
  }
  hi() {
    console.log(`안녕하세요 user의 위치는 ${this.location}입니다.`); // 오버라이딩(덮어쓰기 되는것)
  }
}

const user3 = new AddUserLocation("춘향", 20, "seoul");
console.log(user3);
user3.hi();

class AddUser extends User {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }
  hi() {
    super.hi();
    console.log(`현재 ${this.name}의 위치는 ${this.location}입니다.`);
  }
}

const user4 = new AddUser("daniel", 32, "monaco");
console.log(user4);
user4.hi();

// Dog
class Dog {
  constructor(color, weight, gender) {
    this.color = color;
    this.weight = weight;
    this.gender = gender;
  }
}
const jeppi = new Dog("white", 3, "male");
console.log(jeppi);

class Cat extends Dog {
  constructor(color, weight, gender, name) {
    super(color, weight, gender);
    this.name = name;
  }
}

const oat = new Cat("yellow", 4, "male", "oat");
console.log(oat);

/**
 * Class App extends Componet{
 *  render(){
 *    const name = '리액트';
 *    return <div>{name}</div>
 *   }
 * }
 */
