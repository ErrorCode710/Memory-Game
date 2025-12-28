import styles from "../styles/header.module.css";
import logo from "../assets/img/logo.png";

function Header({ highScore, currentScore }) {
  return (
    <header className={styles["logo-container"]}>
      <img src={logo} alt="demon slayer logo" className={styles["logo"]} />
      <div className={styles["score-container"]}>
        <p>{`Score: ${currentScore}`}</p>
        <p>{`High Score: ${highScore}`}</p>
      </div>
    </header>
  );
}

export default Header;
