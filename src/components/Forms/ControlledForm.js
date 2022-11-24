import { useState } from "react";

function ControlledForm() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#f50f0f");

  const submit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(color);
    setTitle("");
    setColor("#f50f0f");
  };

  return (
    <div>
      <h1>Controlled Form</h1>
      <form onSubmit={submit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="color title..."
        />
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="color"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ControlledForm;
