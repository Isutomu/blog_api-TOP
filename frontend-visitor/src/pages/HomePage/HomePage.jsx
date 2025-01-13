import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import PostsSection from "../../components/PostsSection/PostsSection";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <h2 className={styles.recentTitle}>Recent posts</h2>
        <PostsSection />
      </main>
    </>
  );
}

export default HomePage;
