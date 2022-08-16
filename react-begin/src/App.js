import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // state가 변할때마다 이 APP 컴포넌트의 모든것은 다시 실행되고, 그 안의 코드들도 다시 실행된다.
  console.log("I run all the time");

  // useEffect: 우리 코드가 딱 한번만 실행될 수 있도록 보호해줌
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
      console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
      console.log("I run when 'counter' changes");
  }, [counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
