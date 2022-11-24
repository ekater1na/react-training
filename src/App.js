import "./App.css";
import UncontrolledForm from "./components/Forms/UncontrolledForm";
import ControlledForm from "./components/Forms/ControlledForm";
import CustomHookForm from "./components/Forms/CustomHookForm";
import FetchWithHooks from "./components/Async/FetchWithHooks";
import GraphQL from "./components/Async/GraphQL";

import Hooks from "./components/Hooks";

function App() {
  return (
    <div className="App">
      <Hooks />
      <UncontrolledForm />
      <ControlledForm />
      <CustomHookForm />
      <FetchWithHooks />
      <GraphQL />
    </div>
  );
}

export default App;
