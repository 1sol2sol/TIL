// 구조 분해 할당 Desturcturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.
const fruits = ["🍏", "🥝", "🍓", "🍌"];
const [first, second, ...others] = fruits;

console.log(first);
console.log(second);
console.log(others); // [ '🍓', '🍌' ]

const point = [1, 2];
const [x, y, z = 0] = point; // point안에 z값이 없는데 넣고 싶은 경우 초기값 설정이 가능하다.
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ["apple", "🍎"];
}
const [title, emoji] = createEmoji();
console.log(title); // apple
console.log(emoji); // 🍎

const hansol = { name: "hansol", age: 20, job: "s/w engineer" };
function display({ name, age, job }) {
  console.log("이름", name);
  console.log("나이", age);
  console.log("직업", job);
}

display(hansol);

const { name, age, job: occupation, pet = "고양이" } = hansol;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);

// Quiz
const prop = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);
