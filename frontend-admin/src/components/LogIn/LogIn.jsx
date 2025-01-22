import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import fetchLogIn from "../../utils/backend/post/fetchLogIn";
import styles from "./LogIn.module.css";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  if (localStorage.getItem("token")) {
    return <Navigate to="/dashboard" />;
  }

  const handleUsernameChange = ({ target }) => setUsername(target.value);
  const handlePasswordChange = ({ target }) => setPassword(target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetchLogIn({ username, password });

    if (response.error) {
      setError(response.error.message);
      setPassword("");
      return;
    }

    localStorage.setItem("token", response.token);
    navigate("/dashboard");
  };

  return (
    <main className={styles.main}>
      <span className={styles.error}>{error ? `❗${error}❗` : ""}</span>
      <h1 className={styles.h1}>Account Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.input}
          />
        </div>
        <button className={styles.button}>Log in</button>
      </form>
    </main>
  );
};

export default LogIn;
