import Conversion from "../Conversion";
import Currencies from "../Currencies";
import styles from "../../styles/App.module.css";

const Home = () => {
  return (
    <>
      <h1 className={styles.title}>Valyuta məzənnələri</h1>
      <Currencies />
      <Conversion />
    </>
  );
};

export default Home;
