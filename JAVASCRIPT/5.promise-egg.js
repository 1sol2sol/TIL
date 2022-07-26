function fetchEgg(chicken) { // fetch: 네트워크에서 데이터를 가져올때
  return Promise.resolve(`${chicken} => 🥚`)
}

function fryEgg(egg){
  return Promise.resolve(`${egg} => 🍳`)
}

function getChicken(){
  return Promise.reject(new Error('치킨을 가지고 올 수 없음'))
  // return Promise.resolve(`🪴 => 🐔`)
}


// catch를 맨 뒤 쪽에 두어 마지막에 error 확인을 할 수도 있지만 
// 아래와 같이 어디에 catch를 두느냐에 따라 error가 있다면 어떻게 처리할지 작성 후 
// 마지막까지 코드를 실행시킬 수 있다. 

getChicken()
.catch(error => {
  console.log(error.name);
  return '🐤';
})
.then(chicken => fetchEgg(chicken))
.then(egg => fryEgg(egg))
.then((friedEgg) => console.log(friedEgg))

/**
 * getChicken()
  .catch(() => '🐤')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log)
 */
