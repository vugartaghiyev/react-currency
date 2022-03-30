import Conversion from "../Conversion";
import Currencies from "../Currencies";
import styles from "../../styles/App.module.css";

const Home = () => {
  return (
    <>
      <h1 className={styles.title}>
        Exchange rate<span className={styles.byAzn}>(by AZN)</span>
      </h1>
      <Currencies />
      <Conversion />
    </>
  );
};

export default Home;
