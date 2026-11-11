import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/" className="logo">Qirtas</Link>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/order">Order</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
