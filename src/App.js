import "./App.css";
import UncontrolledForm from "./components/Forms/UncontrolledForm";
import ControlledForm from "./components/Forms/ControlledForm";
import CustomHookForm from "./components/Forms/CustomHookForm";

import Hooks from "./components/Hooks";

function App() {
  return (
    <div className="App">
      <Hooks />
      <UncontrolledForm />
      <ControlledForm />
      <CustomHookForm />
    </div>
  );
}

export default App;
