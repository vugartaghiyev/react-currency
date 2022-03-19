import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { registerUser } from "../../utils/Auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (username.includes([".", "#", "$", "[", "]"])) {
      console.lot("wrong");
      return;
    }
    if (password !== rePassword) {
      setError(["Şifrələr eyni deyil"]);
      return;
    } else {
      registerUser({ username, password }).then((data) => {
        if (data.status) {
          setSuccess(data.message);
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        } else {
          setError([data.message]);
        }
      });
    }
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      setError([]);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

  return (
    <div className={styles.register}>
      <form className={styles.form} onSubmit={(e) => submitHandler(e)}>
        <h1 className={styles.title}>Qeydiyyat</h1>
        <p>İstifadə edə bilməzsiniz: ".", "#", "$", "[", "]"</p>
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
        <input
          type="password"
          placeholder="Şifrəni təkrar edin"
          className={styles.input}
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        {error.length > 0 &&
          error.map((err, i) => (
            <p key={i} className={styles.error}>
              {err}
            </p>
          ))}

        {success && <p className={styles.success}>{success}</p>}
        <button className={styles.button}>Qeydiyyat</button>

        <Link to="/login" className={styles.link}>
          Daxil ol
        </Link>
      </form>
    </div>
  );
};

export default Register;
