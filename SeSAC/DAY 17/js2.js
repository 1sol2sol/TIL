const user = {
  get nameOut() {
    // get은 꼭 리턴값이 있어야하고 set은 꼭 매개변수값이 있어야함
    return this._name;
  },
  set nameIn(value) {
    // 입렵받아서 조건을 걸어서 사용할 수 있음
    if (value.length < 5) {
      console.log("글자수를 확인해주세요.");
      return;
    }
    this._name = value;
  },
};

user.nameIn = "ben"; // set함수의 value값으로 들어가서 조건문을 만족하면 입력값을 출력
console.log(user.nameOut);
