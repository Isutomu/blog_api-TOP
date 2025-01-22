import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Clock from "../Clock/Clock";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.siteTitle}>
        <Link to="/dashboard">Dashboard</Link>
      </h1>
      <Clock />
    </header>
  );
}

export default Header;
