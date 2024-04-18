import React, { useState } from "react";
import icon from "../img/icons8-.svg";

export default function TodoItem({
  item,
  delToDo,
  index,
  setOpen,
  selectToDo,
}) {
  return (
    <div className={item.complete ? "todo__item complete" : "todo__item"}>
      <div>
        <div className="text">{item.text}</div>
        <div className="time">{item.time}</div>
      </div>
      <div className="todo__row">
        <input
          className="checkbox"
          type="checkbox"
          checked={item.complete}
          onChange={() => selectToDo(index)}
        />
        <button className="edit" onClick={() => setOpen({ ...item, index })}>
          <img src={icon} alt="" />
        </button>
        <button className="delete" onClick={() => delToDo(index)}>
          x
        </button>
      </div>
    </div>
  );
}
