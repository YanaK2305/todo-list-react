import { useState } from "react";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";

function App() {
  // const arr = [
  //   { text: "Выгулять собаку", time: "12:00", complete: false },
  //   { text: "Выкинуть мусор", time: "10:00", complete: true },
  //   { text: "Сходить в магазин", time: "14:00", complete: true },
  // ];
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);
  function addToDo() {
    setArr((prev) => [...prev, { text, time, complete: false }]);
  }
  function delToDo(index) {
    setArr((prev) => prev.filter((item, i) => i !== index));
  }
  function clearToDo() {
    setArr([]);
  }
  function editToDo(newtext, newtime, index) {
    setArr((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            text: newtext,
            time: newtime,
          };
        } else return item;
      })
    );
    setOpen(false);
  }
  function selectToDo(index) {
    setArr((prev) =>
      prev.map((item, i) => {
        if (index === i) {
          return { ...item, complete: !item.complete };
        } else {
          return item;
        }
      })
    );
  }
  return (
    <div className="App">
      <div className="todo">
        <div className="todo__top">
          <div className="todo__list">
            <input
              className="todo__inp"
              type="text"
              placeholder="Введите дело"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <input
              className="todo__time"
              type="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </div>
          <div className="todo__btns">
            <button className="btnedd" onClick={addToDo}>
              Добавить
            </button>
          </div>
        </div>
        <TodoList
          arr={arr}
          delToDo={delToDo}
          setOpen={setOpen}
          selectToDo={selectToDo}
        />
        <div className="todo__bottom">
          <button className="btnclear" onClick={clearToDo}>
            Очистить
          </button>
          <div className="todo__info">
            Количество дел: <span className="todo__count">{arr.length}</span>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} editToDo={editToDo} />
    </div>
  );
}

export default App;
