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
        <button className={styles.friends}>Home</button>
        <Link to={"/dashboard/logout"} className={styles.logout}>
          Past Events
        </Link>
        <Link to={"/dashboard/logout"} className={styles.logout}>
          Booked Events
        </Link>
      </div>
      <div className={styles.profile}>
        <CgProfile className={styles.profile_img} />
        <p>Hii Vishal!</p>
      </div>
    </div>
  );
};

export default Navbar;
