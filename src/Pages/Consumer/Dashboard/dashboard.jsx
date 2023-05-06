import { Link } from "react-router-dom";
import styles from "./home.module.css";
import Photo from "./Images/budget.png";
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
      
      <Footer />
    </div>
  );
};

export default Home;
