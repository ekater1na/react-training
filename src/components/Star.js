import { useReducer } from "react";

export function Star() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);

  return (
    <>
      <h1>Bright Star</h1>
      <label htmlFor="checked">{checked ? "checked" : "not checked"}</label>
      <input
        type="checkbox"
        id="checked"
        value={checked}
        onChange={setChecked}
      ></input>
    </>
  );
}
