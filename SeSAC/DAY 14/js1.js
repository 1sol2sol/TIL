// 0, '', null, undefined -> false라고 인식함 따라서  if 문안에 조건을 실행못하고 else 조건을 실행함
// 값이 있는것은 true로 인식함
let a=null;

if(a){
    console.log('출력')
} else{
    console.log('출력안됨');
}

let b=''