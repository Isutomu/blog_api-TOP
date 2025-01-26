import heroParagraphs from "../../assets/heroParagraphs";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>Hi, I&apos;m Isutomu</h1>
        <p className={styles.heroParagraph}>{heroParagraphs.paragraph1.text}</p>
        <p className={styles.heroParagraph}>{heroParagraphs.paragraph2.text}</p>
      </div>
      <img
        className={styles.heroImage}
        src="https://ae01.alicdn.com/kf/S8e3683907b9949beb418b9ae97302ce0e.jpg_640x640q90.jpg"
        alt=""
      />
    </header>
  );
}

export default Hero;
