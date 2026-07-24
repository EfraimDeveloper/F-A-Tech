import React from "react";
import logo from "../assets/image/Logo.png";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container">

        <a className="navbar-brand " href="#">
          <img src={logo} alt="" />
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
              <a className="nav-link" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre
              </a>
            </li>


            <li className="nav-item">
              <a className="nav-link" href="#">
                Serviços
              </a>
            </li>


            <li className="nav-item">
              <a className="nav-link" href="#">
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