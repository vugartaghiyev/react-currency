import styles from "./Auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// db
import { loginUser } from "../../utils/Auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    loginUser({ username, password }).then((data) => {
      if (data.status) {
        localStorage.setItem("token", data.accessToken);
        navigate("/");
      } else {
        setError(data.message);
      }
    });
  };

  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={(e) => submitHandler(e)}>
        <h1 className={styles.title}>Login</h1>
        <input
          type="text"
          placeholder="İstifadəçi adı"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifrə"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className={styles.error}>{error}</p>}
        <button className={styles.button}>Login</button>
        <Link to="/register" className={styles.link}>
          Qeydiyyat
        </Link>
      </form>
    </div>
  );
};

export default Login;
