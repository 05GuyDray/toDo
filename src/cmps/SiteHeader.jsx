import { Link } from "react-router-dom";

function SiteHeader() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active  ">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link active  ">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default SiteHeader;
