import Currencies from "./components/Currencies";
import styles from "./styles/App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Valyuta məzənnələri</h1>
      <hr />
      <Currencies />
    </div>
  );
};

export default App;
