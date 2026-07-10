import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <FaShoppingCart />
        <span>SmartBilling</span>
      </div>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="login">
        Login
      </button>

    </nav>
  );
}

export default Navbar;