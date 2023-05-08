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
            <strong>Save</strong> Money,
          </h1>
          <h1>without thinking</h1>
          <h1>about it.</h1>
          <p>
            BudgetTrack analyzes your spending and automatically saves the
            perfect amount everyday. so you don't have to think about it
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
            <h3>Best graded machines</h3>
            <span>
              The mechanical lab consists of Fitting Shop, Sheet Metal Shop,
              Foundry Shop, Welding Shop, Carpentry Shop.
            </span>
          </div>
          <div className={styles.fc_card}>
            <h3>Machine Shop</h3>
            <span>
              The Machine shop is the heart and soul of mechanical engineering
              branch. It deals with the various machining operations such as
              turning, milling, shaping.
            </span>
          </div>
          <div className={styles.fc_card}>
            <h3>3D Printer</h3>
            <span>
              There are 3 3D printers prsent in workshop for student usage.
            </span>
          </div>
          <div className={styles.fc_card}>
            <h3>Study area</h3>
            <span>
              Special study/project dicussion area for students where students
              can brainstorm their ideas.
            </span>
          </div>
          <div className={styles.fc_card}>
            <h3>CAD/CAM Lab</h3>
            <span>
              Computer aided design/drafting and computer aided manufacturing
              lab deals with the most modern technology of merging computer in
              production industry
            </span>
          </div>
          <div className={styles.fc_card}>
            <h3>Clubs</h3>
            <span>
              Various clubs are present which are funded by the workshop like
              bramhastra which makes buggy.
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
