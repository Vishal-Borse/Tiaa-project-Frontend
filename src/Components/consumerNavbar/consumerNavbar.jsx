import styles from "./consumerNavbar.module.css";
// import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1>
          <strong>Ration</strong>Relief
        </h1>
      </div>
      <div className={styles.buttons}>
        <Link to={"/"} className={styles.friends}>
          Home
        </Link>
        <Link to={"/dashboard/logout"} className={styles.logout}>
          Booked Slot
        </Link>
        <Link to={"/dashboard/logout"} className={styles.logout}>
          Logout
        </Link>
      </div>
      
    </div>
  );
};

export default Navbar;
