import { Link, Outlet } from "react-router-dom";

function Forms() {
  return (
    <div>
      <h1>Forms Page</h1>
      <nav>
        <Link to="1">Uncontrolled Form</Link>
        <Link to="2">Controlled Form</Link>
        <Link to="3">CustomHook Form</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Forms;
