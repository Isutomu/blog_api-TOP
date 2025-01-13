import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <>
      <Header />
      <main className={styles.pageMessage}>
        <h1 className={styles.mainMessage}>Page not found!</h1>
        <div className={styles.subMessage}>
          <p>I think you got lost. Who never?</p>
          <p>
            Going back to the{" "}
            <Link to="/" className={styles.homepageLink}>
              homepage
            </Link>{" "}
            helps!
          </p>
        </div>
      </main>
    </>
  );
}

export default PageNotFound;
