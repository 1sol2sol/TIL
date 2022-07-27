function getBanana(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  })
}

function getApple(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  })
}

function getOrange(){
  return Promise.reject(new Error('no orange'))
}

// 바나나와 사과를 같이 가지고 오기 
// async : Promise를 리턴 
async function fetchFruits(){
  // 바나나를 받아올때까지 기다렸다가 받아온 값을 banana변수에 할당함 
  const banana = await getBanana(); 
  const apple = await getApple();
  return [banana,apple];
  }

  /**
   * getBanana(), getApple()은 Promise를 리턴함
   * async를 사용해서 비동기적인 코드를 동기적으로 절차적으로 사용할 수 있게 함 
   * 단, Promise를 리턴하는 함수 호출을 할때는 await라는 키워드를 써서 기다림
   * Promise값이 resolve되면 그 값을 변수에 할당 
   */


  fetchFruits()
  .then(fruits => console.log(fruits))
