// for (let i = 1; i<5 ; i++){실행문}
// for (초기값; 최종조건식 ; 증감식){실행문}
// for(let i =1; i<5; i++){
//     console.log(i);
// }

// for(let i=1; i<10; i++){
//     console.log(i*2);
// }

// for(let i=1; i<10; i++){
//     console.log(`${i}x2=${i*2}`);
// }


// 2~4단 한번에 출력하기 
for(let dan=2; dan<5; dan++){
    console.log(`${dan}단 출력`);
    for(let num=1; num<10; num++){
        console.log(`\t${num}x${dan}=${num*dan}`);
    }
}

// 점프문(break)
for(let i=1; i<10; i++){
    if(i==5){
        break;
    }
 console.log(`2x${i}=${i*2}`);
}

// 점프문(continue)
for(let i =1; i<10; i++){
    if(i%2==0){
        continue;
    }
    console.log(`2x${i}=${i*2}`);
}