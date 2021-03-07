import "./App.css";
import React, { useState } from "react";
import classNames from "classnames";

function Input({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAdd(text);
      setText("");
    }
  };
  return (
    <div className="panel-block">
      <input
        type="text"
        placeholder="Enter to add"
        value={text}
        className="input"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

function TodoItem({ item, onCheck }) {
  const handleChange = () => {
    console.log(item);
    onCheck(item);
  };
  return (
    <label className="panel-block">
      <input type="checkbox" checked={item.done} onChange={handleChange} />
      <span
        className={classNames({
          "has-text-grey-light": item.done,
        })}
      >
        {item.text}
      </span>
    </label>
  );
}

function Filter({ value, onChange }) {
  const handleClick = (key, e) => {
    e.preventDefault();
    onChange(key);
  };

  return (
    <div className="panel-tabs">
      <a
        href="#"
        onClick={handleClick.bind(null, "ALL")}
        className={classNames({ "is-active": value === "ALL" })}
      >
        All
      </a>
      <a
        href="#"
        onClick={handleClick.bind(null, "TODO")}
        className={classNames({ "is-active": value === "TODO" })}
      >
        ToDo
      </a>
      <a
        href="#"
        onClick={handleClick.bind(null, "DONE")}
        className={classNames({ "is-active": value === "DONE" })}
      >
        Done
      </a>
    </div>
  );
}

function TodoList(items, filter, handleCheck) {
  const displayItems = items.filter((item) => {
    if (filter === "ALL") return true;
    else if (filter === "TODO") return !item.done;
    else if (filter === "DONE") return item.done;
  });

  const listContent = displayItems.map((item) => (
    <TodoItem key={item.key} item={item} onCheck={handleCheck} />
  ));
  return (
    <>
      <listContent />
      <div className="panel-block">{displayItems.length} items</div>
    </>
  );
}

function Todo() {
  // id
  const getKey = () => Math.random().toString(32).substring(2);
  // TODOリスト
  const [items, setItems] = useState([
    { key: getKey(), text: "Learn JavaScript", done: false },
    { key: getKey(), text: "Learn React", done: false },
    { key: getKey(), text: "Get some good sleep", done: false },
  ]);

  const [filter, setFilter] = useState("All");
  const handleFilterChange = (value) => setFilter(value);

  const handleCheck = (checked) => {
    const newItems = items.map((item) => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };

  //   const displayItems = items.filter((item) => {
  //     if (filter === "ALL") return true;
  //     else if (filter === "TODO") return !item.done;
  //     else if (filter === "DONE") return item.done;
  //     else return true;
  //   });

  const handleAdd = (text) => {
    setItems([...items, { key: getKey(), text, done: false }]);
  };

  return (
    <div className="panel">
      <div className="panel-heading">⚛️ React ToDo</div>
      <Filter value={filter} onChange={handleFilterChange} />
      <Input onAdd={handleAdd} />
      <TodoList items={items} filter={filter} handleCheck={handleCheck} />

      <div className="panel-block">{displayItems.length} items</div>
    </div>
  );
}

function App() {
  return <Todo />;
}

export default App;
