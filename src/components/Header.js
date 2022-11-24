import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <button>
        <a href="/">Home</a>
      </button>
      <nav>
        <Link to="/hooks">Hooks</Link>
        <Link to="/forms">Forms</Link>
        <Link to="/async">Async</Link>
      </nav>
    </div>
  );
}

export default Header;
