import { Link } from "react-router-dom";
import logo from "../assets/image/Logo.png";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container">

        <a className="navbar-brand " href="/">
          <img src={logo} alt="fact" />
        </a>

        <button 
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="menu">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
           <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/sobre">Sobre</Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link" to="/service">
                Serviços
              </Link>
            </li>


            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contacto
              </a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Nav;