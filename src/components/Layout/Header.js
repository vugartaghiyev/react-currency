import styles from "./Layout.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const handlerLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className={styles.header}>
      <h2 className={styles.headerLogo}>Məzənnə</h2>

      {!localStorage.getItem("token") ? (
        <Link to="/login" className={styles.headerLogin}>
          Login
        </Link>
      ) : (
        <p className={styles.headerLogin} onClick={handlerLogout}>
          Logout
        </p>
      )}
    </div>
  );
};

export default Header;
