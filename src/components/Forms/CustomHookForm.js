import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
}

function CustomHookForm() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#394ff3");

  const submit = (e) => {
    e.preventDefault();
    console.log(titleProps);
    console.log(colorProps);
    resetTitle();
    resetColor();
  };

  return (
    <div>
      <h1>CustomHook Form</h1>
      <form onSubmit={submit}>
        <input
          {...titleProps}
          type="text"
          placeholder="color title..."
        />
        <input
          {...colorProps}
          type="color"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CustomHookForm;
