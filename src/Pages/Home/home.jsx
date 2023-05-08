import { Link } from "react-router-dom";
import styles from "./home.module.css";
import Photo from "./Images/budget.jpg";
// import Footer from "../.././components/Footer/footer.jsx";
// import Navbar from "../.././components/Navbar/navbar.jsx";
import Navbar from "../../Components/Navbar/navbar";
import { Footer } from "../../Components/Footer/footer";
import { FcOrganization } from "react-icons/fc";
import { ImUsers } from "react-icons/im";
import { FaRegAddressCard } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.info}>
          <h1>
            <strong>Skip</strong> waiting,
          </h1>
          <h1>Reserve your</h1>
          <h1>Ration slot online</h1>
          <p>
            RationRelief enables customers to book slots for events, while
            allowing the organization to update ration information, schedules,
            and inventory in real-time
          </p>
          <div>
            <Link to={"/consumer/signin"} className={styles.info_signup}>
              Consumer
            </Link>
            <Link to={"/organization/signin"} className={styles.info_signup}>
              Organization
            </Link>
          </div>
        </div>
        <div className={styles.image}>
          <img src={Photo} alt="image"></img>
        </div>
      </div>

      <section className={styles.events}>
        <div className={styles.event_cards}>
          <div className={styles.event_card1}>
            <FcOrganization className={styles.event_icon} />
            <h3>100+ Organizations</h3>
          </div>
          <div className={styles.event_card1}>
            <ImUsers className={styles.event_icon} />
            <h3>500+ Users</h3>
          </div>
          <div className={styles.event_card1}>
            <FaRegAddressCard className={styles.event_icon} />
            <h3>100+ beneficiaries</h3>
          </div>
          <div className={styles.event_card1}>
            <MdEmojiEvents className={styles.event_icon} />
            <h3>200+ Successful Events</h3>
          </div>
        </div>
      </section>

      <section className={styles.facilities}>
        <div className={styles.fc_head}>Our awesome services</div>
        <h1>
          <strong>We give </strong>the best facilities
        </h1>
        <div className={styles.cards}>
          <div className={styles.fc_card}>
            <h3>Innovative Platform</h3>
            <span>
              Developed platform bridges the gap between organizations and
              customers.
            </span>
          </div>
          <div className={styles.fc_card}>
            <h3>User-Friendly Interface</h3>
            <span>
              The unique interface enables organizations to easily add events
              with location and time, while providing customers with seamless
              slot booking experience.
            </span>
          </div>
          <div className={styles.fc_card}>
            <h3>Unique Filtration Option</h3>
            <span>
              This feature allows users to easily search and find events in
              their respective state.
            </span>
          </div>
          <div className={styles.fc_card}>
            <h3>Real-time Inventory Updates</h3>
            <span>
              Real-time inventory updates for efficient stock tracking and
              management.
            </span>
          </div>
          <div className={styles.fc_card}>
            <h3>Targeted marketing emails</h3>
            <span>
              Targeted marketing emails for organizations to expand their reach
              and connect with regional customers.
            </span>
          </div>
          <div className={styles.fc_card}>
            <h3>Transparent system</h3>
            <span>
              Transparent system displaying expiry dates to customers, ensuring
              informed decisions and building trust in the platform.
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
