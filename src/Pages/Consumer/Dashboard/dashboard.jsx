import { Link } from "react-router-dom";
import styles from "./dashboard.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ImCancelCircle } from "react-icons/im";

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
import eventIcon from "./Images/icon.png";

const Home = () => {
  const navigate = useNavigate();
  const [consumerDetails, setconsumerDetails] = useState([]);
  const [isEventBookOpen, setIsEventBookOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [visibleEvents, setVisibleEvents] = useState(6);

  const [allEvents, setAllEvents] = useState([]);

  const handleEventBook = () => {
    setIsEventBookOpen(!isEventBookOpen);
  };

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleViewMore = () => {
    setVisibleEvents((prevVisibleEvents) => prevVisibleEvents + 3);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleBookSlot = (starttime,endtime) => {
    // Add your logic for booking the slot
    e.preventDefault();
    setFormLoading(true);

    const formData = {
      startTime : start
    };
    console.log(formData);
    try {
      const url = "http://localhost:8081/organization/addEvent";
      const response = await axios.post(url, formData, {
        withCredentials: true,
      });
      console.log(response);
      navigate(0);
    } catch (error) {
      toast.error(error.response.data.message);
      navigate("/organization/dashboard");
    }
    setFormLoading(false);

    console.log("Slot booked!");
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
  };

  const bookEvent = async (ID) => {
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
  };
  useEffect(() => {
    const getDashboard = async () => {
      try {
        const url1 = "http://localhost:8081/consumer/getEvents";
        const response1 = await axios.get(url1, { withCredentials: true });
        const userEvents = response1.data;

        setAllEvents(userEvents);
        console.log(userEvents);

        const url2 = "http://localhost:8081/consumer/getDetails";
        const response2 = await axios.get(url2, { withCredentials: true });
        const userDetails = response2.data;

        setconsumerDetails(userDetails);
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

      <div className={styles.events}>
        <h1>Events</h1>
        <div className={styles.event_grid}>
          {allEvents.slice(0, visibleEvents).map((event) => (
            <div
              key={event._id}
              className={styles.event_block}
              onClick={() => handleCardClick(event)}
            >
              <img src={eventIcon} alt="Event Icon" />
              {/* <MdEmojiEvents className={styles.event_icon} /> */}
              <h3>{event.eventName}</h3>
              <p>{event.eventDate}</p>
              <p>{event.eventState}</p>
              <p>{event.eventCity}</p>
            </div>
          ))}
          {showModal && selectedEvent && (
            <div className={styles.modal}>
              <div className={styles.modal_content}>
                <div className={styles.cancel_btn_div}>
                  <ImCancelCircle
                    className={styles.cancel_btn}
                    onClick={handleCloseModal}
                  />
                </div>
                <h2>{selectedEvent.eventName}</h2>
                <p>Date: {selectedEvent.eventDate}</p>
                <p>State: {selectedEvent.eventState}</p>
                <p>City: {selectedEvent.eventCity}</p>
                <p>Email: {selectedEvent.organizationEmail}</p>

                <table className={styles.event_table}>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Provider</th>
                      <th>Mfg Date</th>
                      <th>Expiry Date</th>
                      <th>Allocated Per user</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedEvent.rationDetails.map((data) => (
                      <tr key={data._id}>
                        <td>{data.item}</td>
                        <td>{data.quantity}</td>
                        <td>{data.provider}</td>
                        <td>{data.mfgDate}</td>
                        <td>{data.expiryDate}</td>
                        <td>{data.allocatedPerUser}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <table className={styles.event_table}>
                  <thead>
                    <tr>
                      <th>Start Time</th>
                      <th>End Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedEvent.rationSchedule.map((data) => (
                      <tr key={data._id}>
                        <td>{data.startTime}</td>
                        <td>{data.endTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className={styles.book_slot}>
                  <div className={styles.input_container}>
                    <label htmlFor="start-time">Start Time</label>
                    <input
                      type="text"
                      id="start-time"
                      value={startTime}
                      onChange={handleStartTimeChange}
                    />
                  </div>
                  <div className={styles.input_container}>
                    <label htmlFor="end-time">End Time</label>
                    <input
                      type="text"
                      id="end-time"
                      value={endTime}
                      onChange={handleEndTimeChange}
                    />
                  </div>
                  <button
                    className={styles.book_button}
                    onClick={handleBookSlot}
                  >
                    Book the Slot
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {visibleEvents < allEvents.length && (
          <div className={styles.view_more}>
            <button onClick={handleViewMore}>View More Events</button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
