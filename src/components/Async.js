import { Link, Outlet } from "react-router-dom";

function Async() {
  return (
    <div>
      <h1>Forms Page</h1>
      <nav>
        <Link to="1">Fetch With Hooks</Link>
        <Link to="2">GraphQL</Link>
        <Link to="3">Render Props</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Async;