const cat = {
  // object = 복합데이터
  name: "oat",
  gender: "male",
  age: 1,
  family: "kShortHair",
  sayHello: function () {
    // 함수 프로퍼티
    console.log("meow! I'm " + this.name);
  },
};

console.log(cat.name);
console.log(cat["family"]);
cat.sayHello();

// 20, 김철수, seoul
const people = {
  age: 20,
  name: "김철수",
  region: "seoul",
};

console.log(people); // { age: 20, name: '김철수', region: 'seoul' }
console.log(people.age);

people.gender = "male"; // people[gender] = 'male';

console.log(people); // { age: 20, name: '김철수', region: 'seoul', gender: 'male' }
