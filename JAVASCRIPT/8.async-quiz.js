function getFetchEgg(chicken) { // fetch: 네트워크에서 데이터를 가져올때
  return Promise.resolve(`${chicken} => 🥚`)
}

function getFryEgg(egg){
  return Promise.resolve(`${egg} => 🍳`)
}

function getChicken(){
  // return Promise.reject(new Error('치킨을 가지고 올 수 없음'))
  return Promise.resolve(`🪴 => 🐔`)
}


// getChicken()
// .catch(error => {
//   console.log(error.name);
//   return '🐤';
// })
// .then(chicken => fetchEgg(chicken))
// .then(egg => fryEgg(egg))
// .then((friedEgg) => console.log(friedEgg))

// function makeFriedEgg() {
//   return  getChicken()
//     .catch(() => '🐤')
//     .then(getFetchEgg)
//     .then(getFryEgg);
// }

// makeFriedEgg().then(console.log)


async function makeFriedEgg(){
  let chicken;
  try{
    chicken = await getChicken();
  } catch {
    chicken = '🐤';
  }
  const egg = await getFetchEgg(chicken);
  return getFryEgg(egg);
}

makeFriedEgg.then(console.log(egg))

  // async function fetchChicken(){
  //   const chicken = await getChicken();
  //   const fetchEgg = await getFetchEgg(chicken);
  //   const fryEgg = await getFryEgg(fetchEgg);
  //   return fryEgg;
  // }

  // fetchChicken().then(friedeggs => console.log(friedeggs))