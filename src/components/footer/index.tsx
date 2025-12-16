import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.menuBar}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.menuItem}${isActive ? ` ${styles.active}` : ""}`
            }
          >
            Sobre Nós
          </NavLink>

          <div className={`${styles.menuItem} ${styles.socialGroup}`}>
            <span className={styles.label}>Redes:</span>
            <a
              className={styles.iconLink}
              href="https://wa.me/11999999999"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp" aria-hidden="true" />
            </a>
            <a
              className={styles.iconLink}
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram" aria-hidden="true" />
            </a>
            <a
              className={styles.iconLink}
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook" aria-hidden="true" />
            </a>
          </div>

          <a className={styles.menuItem} href="#termos">
            Termos de Uso <i className="bi bi-file-text" aria-hidden="true" />
          </a>

          <a className={styles.menuItem} href="#faq">
            FAQ <i className="bi bi-question-circle" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
