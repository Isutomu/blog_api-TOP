import styles from "./DashboardHome.module.css";

const DashboardHome = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Welcome!{}</h1>
      <p>Would you like to...</p>
      <div className={styles.buttonsContainer}>
        <button className={styles.button}>Update a post</button>
        <button className={styles.button}>Create a new post</button>
      </div>
    </main>
  );
};

export default DashboardHome;
