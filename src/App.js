import "./App.css";
import React, { useState } from "react";

function App() {
  const [ToDo, setToDo] = useState([]);
  const [Text, setText] = useState("おはよう");

  const handleChange = (e) => {
    setText(e.target.value.toString());
  };
  const handleClick = () => {
    setToDo([...ToDo, { text: Text, id: Date.now() }]);
  };

  return (
    <>
      <input type="text" value={Text} onChange={handleChange} />
      <button onClick={handleClick}>Click Me</button>
      {ToDo.map((todo, i) => (
        <React.Fragment key={todo.id}>
          <br />
          <input type="radio" id={todo.id} value={todo.text} key={todo.id} />
          {todo.text}
        </React.Fragment>

        /* 
            このJSXだとエラーが出る: Each child in an array or iterator should have a unique “key” prop. Check the render method of `ComponentName`
            理由は、mapで返される親要素は<>だから。keyがつかなければいけないのは、<>
            ただし、< key={todo.id}> とはかけないので、 <React.Fragment key={todo.id}>とする。
        <>
          <br />
          <input type="radio" id={todo.id} value={todo.text} key={todo.id} />
          {todo.text}
        </>
        */
      ))}
    </>
  );
}

export default App;
