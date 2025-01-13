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
        src="https://cdn.glitch.global/d45aff89-36ba-46db-8c7c-3da7c8a93931/headshot-2022-square.jpeg?v=1698766406592"
        alt=""
      />
    </header>
  );
}

export default Hero;
