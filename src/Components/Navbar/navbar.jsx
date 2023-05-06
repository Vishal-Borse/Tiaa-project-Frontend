import styles from "./navbar.module.css";
// import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1>
          <strong>Ration</strong>Relief
        </h1>
      </div>
      <div className={styles.buttons}>
      <Link to={"/"} className={styles.signin}>
          Home
        </Link>
        <Link to={"/signin"} className={styles.signin}>
          About Us
        </Link>
        <Link to={"/signup"} className={styles.signup}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
