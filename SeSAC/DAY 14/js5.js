let luckyNum=20;
//스위치문에서 변수가 숫자형 타입이기에 case에서 문자열로 넣으면 임의로 형변환이 일어나지 않음

// switch (luckyNum) {
//     case '10': console.log('당첨!냉장고');
//         break; // 조건을 만족했을때 구문을 만족하고 탈출하기 위해서 
//     case '20': console.log('당첨!TV');
//         break;
//     case '30': console.log('당첨!에어프라이어');
//         break;
//     default: console.log('꽝 다음기회에');
// }

switch (luckyNum) { // 10과 20에 같은 조건을 걸고 싶을때 case10의 조건과 break 생략 가능하다
    case 10: 
    case 20: console.log('당첨!TV');
        break;
    case 30: console.log('당첨!에어프라이어');
        break;
    default: console.log('꽝 다음기회에');
}