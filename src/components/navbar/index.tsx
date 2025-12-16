import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const baseLink = (isActive: boolean) =>
  `nav-link ${styles.link}${isActive ? ` ${styles.activeLink}` : ""}`;

export default function Navbar() {
  return (
    <header className={styles.wrapper}>
      <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
        <div className="container">
          <NavLink to="/" end className={`navbar-brand ${styles.brand}`}>
            SOS Urbano
          </NavLink>

          <button
            className={`navbar-toggler ${styles.toggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Alternar navegacao"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`collapse navbar-collapse ${styles.menu}`} id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <NavLink to="/" end className={({ isActive }) => baseLink(isActive)}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/incident"
                  className={({ isActive }) => baseLink(isActive)}
                >
                  Denuncias
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={({ isActive }) => baseLink(isActive)}
                >
                  Entrar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  className={`btn btn-sm ${styles.ctaButton}`}
                >
                  Cadastrar-se
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
