import { useEffect, useReducer, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Hooks() {
  const [mood, setMood] = useState("neutral");
  const [secondary, setSecondary] = useState("tired");
  const [checked, setChecked] = useState(false);
  const [check, setCheck] = useReducer((check) => !check, false);

  useEffect(() => {
    console.log(`It's ${mood} right now`);
  }, [mood]);

  useEffect(() => {
    console.log(`It's ${secondary} today`);
  }, [secondary]);

  return (
    <div>
      <h1>Mood: {mood}</h1>
      <button onClick={() => setMood("sad")}>Sad</button>
      <button onClick={() => setMood("good")}>Good</button>

      <h1>Secondary Mood: {secondary}</h1>
      <button onClick={() => setSecondary("grateful")}>Grateful</button>
      <button onClick={() => setSecondary("excited")}>Excited</button>

      <div>
        <h1>useState</h1>
        <input
          type="checkbox"
          value={checked}
          onChange={() => setChecked((checked) => !checked)}
        />
        <label>{checked ? "Checked" : "Not checked"}</label>
      </div>

      <div>
        <h1>useReducer</h1>
        <input type="checkbox" value={check} onChange={setCheck} />
        <label>{check ? "Checked" : "Not checked"}</label>
      </div>

      <div>
        <nav>
          <Link to="history">Show History page</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Hooks;
