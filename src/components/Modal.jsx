import React, { useState } from "react";

export default function Modal({ open, setOpen, editToDo }) {
  const [text, setText] = useState(open.text);
  const [time, setTime] = useState(open.time);
  console.log(open);
  return (
    <div className={open ? "modal__wrapper" : "hidden"}>
      <div className="modal">
        <button className="close" onClick={() => setOpen(false)}>
          x
        </button>
        <h2 className="modal__title">Редактирование</h2>
        <div className="modal__column">
          <div className="modal__inp">
            <p className="modal__text">Изменить дело</p>
            <input
              type="text"
              className="todo__inp new__text"
              placeholder="Введите дело"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </div>

          <div className="modal__inp">
            <p className="modal__text">Изменить время</p>
            <input
              type="time"
              className="todo__time new__time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </div>
        </div>
        <button
          className="save"
          onClick={() => editToDo(text, time, open.index)}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
}
