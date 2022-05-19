// 참조형 데이터와 원시형 데이터의 차이 

let a=1;
let b=2;
let c={
    name:'lee',
    age:30,
    address:'busan',
    tel:'01012345678',

}

let d = a;
console.log(d);

let e=c;
console.log(c);

a=10;
console.log(a);
console.log(d);

let f = c;
console.log(f);

c.age = 50;
console.log(f);
console.log(c);