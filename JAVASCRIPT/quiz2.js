// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }

  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  // 그냥 숫자를 적는것 보다 상수변수를 만들어서 전달해주는것이 가독성이 좋음
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}
class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
}

const hansol = new FullTimeEmployee("한솔", "s/w", 100);
const daniel = new PartTimeEmployee("다니엘", "s/w", 20);

console.log(hansol.calculatePay());
console.log(daniel.calculatePay());

// 나의 풀이
// class Employee {
//   constructor(name, department, workHour) {
//     this.name = name;
//     this.department = department;
//     this.workHour = workHour;
//   }
//   getSalary(price) {
//     console.log(`${this.workHour * price * 30}`);
//   }
// }

// class Parttime extends Employee {}
// const parttime = new Parttime("알론소", "세컨드라이버", 5);
// parttime.getSalary(8000);

// class Fulltime extends Employee {}
// const fulltime = new Fulltime("daniel", "드라이버", 9);
// fulltime.getSalary(10000);
