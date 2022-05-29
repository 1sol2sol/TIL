// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("eat!!");
//   }
//   sleep() {
//     console.log("sleep!!");
//   }
// }

// class Cat {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("eat!!");
//   }
//   sleep() {
//     console.log("sleep!!");
//   }
//   play() {
//     console.log("play!!");
//   }
// }

// 공통의 양식을 만들어줌
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("eat!!");
  }
  sleep() {
    console.log("sleep!!");
  }
}

class Tiger extends Animal {}
const tiger = new Tiger("노랑이");
console.log(tiger);
tiger.sleep();
tiger.eat();

class Cat extends Animal {
  constructor(color, ownerName) {
    super(color); // super: 상속하고 있는 부모를 가리킴
    this.ownerName = ownerName;
  }
  play() {
    console.log("play!!");
  }

  // 오버랑이딩 overriding
  // 자식 클래스에서 부모클래스에 있는 함수를 덮어 씌운다
  eat() {
    super.eat(); // 부모에 있는 eat이라는 함수를 구현한 다음 내가 원하는 함수 쓰기 가능
    console.log("eating cat!!");
  }
}

const cat = new Cat("치즈", "한솔");
console.log(cat);
cat.sleep();
cat.eat();
cat.play();
