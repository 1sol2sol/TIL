// 접근제어자-캡슐화: 한번 만들어진 다음 외부에서 변경이 불가능하게 만들고 싶을때
// private(#), public(기본), protected
class Fruit {
  #name;
  #emoji;
  #type = "과일";
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
// apple.#name = "오렌지"; // #field는 외부에서 접근이 불가능하다.
console.log(apple);
