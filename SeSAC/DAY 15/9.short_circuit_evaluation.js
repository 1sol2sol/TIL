// 논리합or || 논리곱and &&  연산자를 이용한 단축평가
// 좌항에서 우항으로 평가된다. 2개의 피연산자 중 어느 하나의 값으로 평가된다.
// 평가된 값은 형변환 하지 않고 현재 값을 반환한다.

// 논리합 ||
console.log(true || true); // true
console.log(60 || 50); // 60 -> 단축 평가이기 때문에 좌항에서 먼저 평가가 끝나서 60이 나옴
console.log(true || false); // true
console.log(10 || 0); // 10
console.log(false || true); // true -> 우항까지 계산하여 true 가 있기 때문에 결과값 ture
console.log("" || 100); // 100 -> 빈문자열, 0, undefined는 false임
console.log(false || false); // false
console.log(0 || ""); // ""
console.log(0 || null); // null
console.log(0 || undefined); // undefined
console.log(undefined || 0); // 0

// 논리곱 &&
console.log(true && true); // true
console.log(300 && 500); // 500 -> &&는 둘다 참이어야하기떄문에 우항까지 가서 확인해야하고 마지막것을 리턴함
console.log(false && ture); // fasle (&&이기 때문에 false가 출력됨)
console.log(0 && 500); // 0 -> 0이 false이기 때문에 좌항만 확인함
console.log(true && false); // false
console.log(1 && null); // null
console.log(false && null); // false
console.log(0 && undefined); // 0

// 부정연산
console.log(!10); //false
console.log(!!10); //true
console.log(!"hello"); //false
console.log(!!"hello"); //true
