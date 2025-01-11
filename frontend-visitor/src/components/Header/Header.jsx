import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.siteTitle}>
        <Link to="/">Isutomu Naruto</Link>
      </h1>
      <nav>
        <ul className={styles.navigation}>
          <li className={styles.navigationLinks}>
            <a href="https://github.com/Isutomu" rel="noreferrer">
              github
            </a>
          </li>
          <li className={styles.navigationLinks}>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
