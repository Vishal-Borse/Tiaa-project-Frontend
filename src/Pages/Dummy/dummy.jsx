import styles from "./dummy.module.css";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/navbar";
import { Footer } from "../../Components/Footer/footer";

const dummy = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default dummy;
