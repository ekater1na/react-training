import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <button>
        <a href="/">Home</a>
      </button>
      <nav>
        <Link to="/hooks">Hooks</Link>
        <Link to="/forms">Forms</Link>
        <Link to="/async">Async</Link>
      </nav>
    </header>
  );
}

export default Header;
