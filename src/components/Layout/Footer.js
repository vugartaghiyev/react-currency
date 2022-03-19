import styles from "./Layout.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      Made By
      <a
        href="https://vugartaghiyev.netlify.app/"
        target="_blank"
        className={styles.footerLink}
        rel="noreferrer"
      >
        Vugar Taghiyev
      </a>
    </div>
  );
};

export default Footer;
