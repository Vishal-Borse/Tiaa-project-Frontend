import { Link } from "react-router-dom";
import styles from "./dashboard.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// import Photo from "./Images/budget.png";
// import Footer from "../.././components/Footer/footer.jsx";
// import Navbar from "../.././components/Navbar/navbar.jsx";
import Navbar from "../../../Components/consumerNavbar/consumerNavbar";
import { Footer } from "../../../Components/Footer/footer";
import { FcOrganization } from "react-icons/fc";
import { ImUsers } from "react-icons/im";
import { FaRegAddressCard } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
// import Map from "../../../map.jpg";
import profileImage from "../../../profile.png";
import { useEffect, useState } from "react";
import BookEvent from "../../../Components/eventBookModal/eventBook";

const Home = () => {
  const navigate = useNavigate();
  const [consumerEvents, setconsumerEvents] = useState([]);
  const [consumerDetails, setconsumerDetails] = useState([]);
  const [isEventBookOpen, setIsEventBookOpen] = useState(false);

  const handleEventBook = () => {
    setIsEventBookOpen(!isEventBookOpen);
  };

  const bookEvent = async(ID)=>{

    const formData = {
      eventId: ID,
    };
    try {
      const url = "http://localhost:8081/consumer/eventDetails";
      const response = await axios.post(url, formData, {
        withCredentials: true,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    // setIsEventBookOpen(!isEventBookOpen);




  }
  useEffect(() => {
    const getDashboard = async () => {
      try {
        const url1 = "http://localhost:8081/consumer/getEvents";
        const response1 = await axios.get(url1, { withCredentials: true });
        const userEvents = response1.data;

        const url2 = "http://localhost:8081/consumer/getDetails";
        const response2 = await axios.get(url2, { withCredentials: true });
        const userDetails = response2.data;

        setconsumerEvents(userEvents);
        setconsumerDetails(userDetails);
        console.log(userEvents);
        console.log(userDetails);
      } catch (error) {
        console.log(error);
        navigate("/consumer/signin");
      }
    };
    getDashboard();
  }, [navigate]);

  if (!consumerDetails) {
    return <h1>Loading..!!</h1>;
  }
  return (
    <div className={styles.Home}>
      <Navbar />

      <section className={styles.profile}>
        <div className={styles.profile_img}>
          <img src={profileImage} />
          <h1>
            {consumerDetails[0]?.firstName} {consumerDetails[0]?.lastName}
          </h1>
        </div>
        <div className={styles.details}>
          <p>
            Name : {consumerDetails[0]?.firstName}{" "}
            {consumerDetails[0]?.lastName}
          </p>
          <p>Email : {consumerDetails[0]?.email}</p>
          <p>Phone : {consumerDetails[0]?.phone}</p>
          <p>Aadhar No : {consumerDetails[0]?.aadharNo}</p>
          <p>State : {consumerDetails[0]?.state}</p>
          <p>City : {consumerDetails[0]?.city}</p>
          <p>Age : {consumerDetails[0]?.age}</p>
        </div>
      </section>

      <div className={styles.facilities}>
        <div className={styles.fc_head}>Your created events</div>
      </div>

      <div className={styles.cards}>
        {consumerEvents?.map((Event) => {
          return (
            <div className={styles.fc_card}>
              <MdEmojiEvents className={styles.event_icon} />
              <h2>{Event.eventName}</h2>
              <p>{Event.eventState}</p>
              <h3>{Event.eventDate}</h3>
              <button onClick={handleEventBook}>Book Slot</button>
              {isEventBookOpen ? (
                <BookEvent closeCallback={handleEventBook} />
              ) : null}
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
