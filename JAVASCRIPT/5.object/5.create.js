// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}: 🍎`);
//   },
// };

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name}: 🍊`);
//   },
// };

// 생성자 함수(현업에서 많이 사용하지 않음)
function Fruit(name, emoji) {
  this.name = name; // this: 객체 자기 자신을 가리킴
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  return this; // 생략 가능
}

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
