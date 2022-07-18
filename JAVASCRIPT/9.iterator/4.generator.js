// const multiple = {
//     [Symbol.iterator]() {
//       const max = 10;
//       let num = 0;
//       return {
//         next() {
//           return { value: num++ * 2, done: num > max };
//         },
//       };
//     },
//   };

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2; // yield : 사용자가 원할때까지 기다렸다가 하나하나씩 리턴해줌
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return(); => 다음값이 있어도 반복을 끝냄
multiple.throw("Error!");

next = multiple.next();
console.log(next.value, next.done);
