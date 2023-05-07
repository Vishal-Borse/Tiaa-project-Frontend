import styles from "./organiserNav.module.css";
// import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AddEvent from "../addEventModal/addEvent";

const OrganiserNavbar = () => {
  const [isaddEventOpen, setIsaddEventOpen] = useState(false);

  const handleAddEvent = () => {
    setIsaddEventOpen(!isaddEventOpen);
  };
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
        <Link to={"/signup"} className={styles.signin}>
          Contact Us
        </Link>
        <button onClick={handleAddEvent} className={styles.signup}>
          Add Event
        </button>
        {isaddEventOpen ? <AddEvent closeCallback={handleAddEvent} /> : null}
      </div>
    </div>
  );
};

export default OrganiserNavbar;
