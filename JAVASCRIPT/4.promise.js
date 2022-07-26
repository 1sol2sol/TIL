// 주어진 second(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(seconds){
  // then을 호출했을때 사용할 resolve
  // 실패한걸 알려주는 reject
  return new Promise((resolve, reject) => {
    if(!seconds || seconds < 0){
      reject(new Error('seconds가 0보다 작음'))
    }
    setTimeout(() => {
      resolve();
    }, seconds*1000);
  });
}

runInDelay(3)
  .then(() => console.log('타이머 완료!'))
  .catch(console.error)
  .finally(()=>console.log('끝!'))
