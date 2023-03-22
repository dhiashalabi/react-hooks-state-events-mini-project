import React from "react";

function Task(props) {
  const { text, category, onDeleteTask } = props;
  function handleClick() {
    onDeleteTask(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button
        onClick={handleClick}
        className="delete"
      >
        ❌
      </button>
    </div>
  );
}

export default Task;
