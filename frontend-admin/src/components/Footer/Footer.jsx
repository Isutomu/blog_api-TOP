import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>Technically a footer but kinda not.</p>
        <p>
          I was not particular trilled doing this one so I&apos;m spicing up
          this &quot;respectable copy&quot;.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
