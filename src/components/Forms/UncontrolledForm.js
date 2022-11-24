import { useRef } from "react";

function UncontrolledForm() {
  const textTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = textTitle.current.value;
    const color = hexColor.current.value;
    console.log(title);
    console.log(color);
    textTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
    <div>
      <h1>UncontrolledForm</h1>
      <form onSubmit={submit}>
        <input ref={textTitle} type="text" placeholder="color title..." />
        <input ref={hexColor} type="color" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
