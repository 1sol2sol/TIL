const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// padStart()
// "1".padStart(2, "0"); => "01"
// string의 길이 2가 아니라면 string 앞에 0을 추가하세요 


// padEnd()
// "1".padEnd(2, "0"); => "10"
// string의 길이 2가 안된다면 string 뒤쪽에 0을 추가하세요.