import styles from "./styles/App.module.css";
import Layout from "./components/Layout";
import Routing from "./components/Routing";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Layout>
        <div className={styles.container}>
          <Routing />
        </div>
      </Layout>
    </Router>
  );
};

export default App;
