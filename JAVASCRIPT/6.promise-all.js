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
// [ '🍌', '🍎' ] 출력되지만 바나나 가져오는데 1초 그 후 3초뒤 사과를 가져오기 때문에 4초가 걸림 
getBanana()
  .then((banana) => 
    getApple()
      .then(apple => [banana, apple])
  ).then(console.log);
  

  // Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
   Promise.all([getBanana(), getApple()])
    .then(fruits => console.log('all', fruits)) // all [ '🍌', '🍎' ]


    Promise.all([getBanana(), getApple(), getOrange()])
    .then(fruits => console.log('all-error', fruits)) // error로 인해 이 then은 실행되지 않음 
    .catch(console.log) // errror 가 있는 코드는 catch 작성
    
    // Promise.allSettled: 성공하던 실패하던 그 결과를 배열로 묶어서 보내줌
    Promise.allSettled([getBanana(), getApple(), getOrange()])
    .then(fruits => console.log('all-settle', fruits)) 
    .catch(console.log)


    // Promise.race 주어진 Promise중에 제일 빨리 수행된것이 이김!
    Promise.race([getBanana(), getApple()])
      .then(fruit => console.log('race', fruit)) // race 🍌