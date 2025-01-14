import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import PostsCardsWrapper from "../../components/PostsCardsWrapper/PostsCardsWrapper";
import Footer from "../../components/Footer/Footer";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <h2 className={styles.recentTitle}>Recent posts</h2>
        <PostsCardsWrapper />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
