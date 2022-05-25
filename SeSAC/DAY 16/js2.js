// 생성자 함수 Constructor : 똑같은 object를 여러개 찍어줌
// 20, 김철수, seoul

function People(name, age) {
  this.name = name;
  this.age = age;
  this.address = "seoul";
}

const people1 = new People("다니엘", 32);
const people2 = new People("셉", 37);

console.log(people1);
console.log(people2);

function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return this.radius * 2;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1);
console.log(circle2.getDiameter());
console.clear();

// 이름,국,영,수, 평균 리턴

function Grade(name, kor, eng, math) {
  this.name = name;
  this.kor = kor;
  this.eng = eng;
  this.math = math;
}
console.log(Grade.prototype); // {} -> Object
Grade.prototype.getAv = function () {
  return (this.kor + this.eng + this.math) / 3;
};
const student1 = new Grade("Max", 10, 20, 30);
const student2 = new Grade("Daniel", 100, 90, 95);
const student3 = new Grade("Seb", 95, 90, 85);
console.log(student1.getAv());
console.log(student2.getAv());
console.log(student3.getAv());

console.log(student2);
console.log(student2.getAv());
console.log(Grade.prototype);
