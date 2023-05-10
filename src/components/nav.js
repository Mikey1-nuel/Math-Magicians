import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => (
  <nav className="nav">
    <h1>Math Magician</h1>
    <ul className="menu">
      <Link to="/">
        <li className="navlink" title="home">
          Home
        </li>
      </Link>
      <Link to="/calculator">
        <li className="navlink" title="calculator">
          Calculator
        </li>
      </Link>
      <Link to="/quotes">
        <li className="navlink" title="quotes">
          Quotes
        </li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
