// 접근자 프로퍼티(Accessor Property)

// 호출하는 시점에 데이터를 만들어서 리턴함
// 함수를 호출한다는것은 특정한일을 수행하기 위해서(뭔가를 계산하거나 등)\
// 하지만 지금은 일이라기 보다는 특정한 두가지의 속성을 조합해서 보여주는것
// 속성의 한부분이라고 간주되는 이런것들을 함수로 만들어야할때
// get이라는 키워드를 붙여주면 함수 호출하는것처럼 호출하지 않고
// 속성에 접근하듯이 만들 수 있다.
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    // 접근할때 출력됨
    return `${this.lastName} ${this.firstName}`;
  }

  //할당할때 이 함수가 호출될것임 (값도 받아올 수 있음)
  set fullName(value) {
    console.log("set", value);
  }
}

const student = new Student("수지", "김");
student.firstName = "안나";
console.log(student.firstName);
console.log(student.fullName);

student.fullName = "김철수"; // 값을 할당해서 set의 함수가 호출됨
