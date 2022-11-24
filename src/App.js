import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import UncontrolledForm from "./components/Forms/UncontrolledForm";
import ControlledForm from "./components/Forms/ControlledForm";
import CustomHookForm from "./components/Forms/CustomHookForm";
import FetchWithHooks from "./components/Async/FetchWithHooks";
import RenderProps from "./components/Async/RenderProps";
import GraphQL from "./components/Async/GraphQL";
import Hooks from "./components/Hooks";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import History from "./components/History";
import Forms from "./components/Forms";
import Async from "./components/Async";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/hooks" element={<Hooks />}>
            <Route path="history" element={<History />} />
          </Route>
          <Route path="/forms" element={<Forms />}>
            <Route path="1" element={<UncontrolledForm />} />
            <Route path="2" element={<ControlledForm />} />
            <Route path="3" element={<CustomHookForm />} />
          </Route>

          <Route path="/async" element={<Async />}>
            <Route path="1" element={<FetchWithHooks />} />
            <Route path="2" element={<GraphQL />} />
            <Route path="3" element={<RenderProps />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
