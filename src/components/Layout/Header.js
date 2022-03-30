import styles from "./Layout.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.headerLogo}>Currency</h2>
    </div>
  );
};

export default Header;
