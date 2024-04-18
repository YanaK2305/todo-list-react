import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ arr, delToDo, setOpen, selectToDo }) {
  return (
    <div className="todo__body">
      {arr.map((item, index) => {
        return (
          <TodoItem
            item={item}
            key={index}
            delToDo={delToDo}
            index={index}
            setOpen={setOpen}
            selectToDo={selectToDo}
          />
        );
      })}
    </div>
  );
}
