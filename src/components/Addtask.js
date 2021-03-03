import React from "react";
import { useState } from "react";

const Addtask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [remainder, setRemainder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
    return
    }
    onAdd({text,day,remainder})
    setText('')
    setDay('')
    setRemainder(false)
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Remainder</label>
        <input
          type="checkbox"
          placeholder="Save Task"
          value={remainder}
          checked={remainder}
          onChange={(e) => setRemainder(e.target.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block"></input>
    </form>
  );
};

export default Addtask;
