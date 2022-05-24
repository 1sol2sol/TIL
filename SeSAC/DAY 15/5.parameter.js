/* function numAdd(a, b, c) {
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return a + b + c;
}

console.log(numAdd(10, 20, 30)); // 60
console.log(numAdd(10, 20)); //마지막 인수를 전달받지 못해서, NaN

 */

/* function numAdd(a = 0, b = 0, c = 0) {
  // 파라미터에 초기값 설정 가능, 초기값은 arguments라는 객체에 포함되지 않음 

  console.log(arguments); //[Arguments] { '0': 10 }, 전달된 인수받을 저장하는 객체 
  return a + b + c; // 10+0+0
}

console.log(numAdd(10)); */

function numAdd(...num) {
  // ...을 붙이게 되면
  console.log(num[0]); // [ 10, 20, 30, 40 ] 한번에 모든 파라미터를 받을수있음
  return;
}

console.log(numAdd(10, 20, 30, 40));

// for문을 이용해서 전달 받은 매개변수의 총합을 구하세요
console.clear();
function numSum(...num) {
  // rest 파라미터 ES6
  let sum = 0;
  /* 초기값 설정을 안했을때 undefined가 나오기 때문에 초기값 설정을 해야함 
 초기값 설정 없이 let sum; 은 undefined이고 여기에 매개변수를 더하게 되면 NaN이 나오게 됨 */
  for (let i = 0, j = num.length; i < j; i++) {
    sum += num[i];
  }
  return sum;
}

console.log(numSum(10, 20, 30, 40, 50));
