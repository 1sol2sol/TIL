// 숫자 입력 받아서 +10 출력
const num = {
  get outputNum() {
    return `출력값은 ${this._num + 10}`;
  },
  set inputNum(value) {
    this._num = value;
  },
};

num.inputNum = 20;
console.log(num.outputNum);
