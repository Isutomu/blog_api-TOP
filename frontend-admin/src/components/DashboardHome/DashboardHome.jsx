import { Link } from "react-router-dom";
import styles from "./DashboardHome.module.css";

const DashboardHome = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Welcome!{}</h1>
      <p>Would you like to...</p>
      <div className={styles.buttonsContainer}>
        <Link to="/dashboard/createPost">
          <button className={styles.button}>Create a new post</button>
        </Link>
        <Link to="/dashboard/updatePost">
          <button className={styles.button}>Update a post</button>
        </Link>
      </div>
    </main>
  );
};

export default DashboardHome;
