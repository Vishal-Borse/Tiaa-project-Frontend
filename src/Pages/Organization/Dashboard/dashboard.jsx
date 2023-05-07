import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import { useNavigate } from "react-router-dom";

// import Photo from "./Images/budget.png";
// import Footer from "../.././components/Footer/footer.jsx";
// import Navbar from "../.././components/Navbar/navbar.jsx";
import Navbar from "../../../Components/organizationNavbar/organiserNavbar";
// import myModal from "../../../Components/Modal/showModal";
import { Footer } from "../../../Components/Footer/footer";
import { FcOrganization } from "react-icons/fc";
import { ImUsers } from "react-icons/im";
import { FaRegAddressCard } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import profilePicture from "./images/profile_picture.webp";
import eventIcon from "./images/icon.png";
import axios from "axios";

const OrganizationDashboard = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [visibleEvents, setVisibleEvents] = useState(6);

  const [allEvents, setAllEvents] = useState([]);

  const eventsData = [
    {
      id: 1,
      name: "Event 1",
      date: "May 10, 2023",
      description: "Description for Event 1",
      icon: eventIcon,
    },
    {
      id: 2,
      name: "Event 2",
      date: "May 15, 2023",
      description: "Description for Event 2",
      icon: eventIcon,
    },
    {
      id: 3,
      name: "Event 3",
      date: "May 15, 2023",
      description: "Description for Event 3",
      icon: eventIcon,
    },
    {
      id: 4,
      name: "Event 4",
      date: "May 20, 2023",
      description: "Description for Event 3",
      icon: eventIcon,
    },
    {
      id: 5,
      name: "Event 5",
      date: "May 20, 2023",
      description: "Description for Event 3",
      icon: eventIcon,
    },
    {
      id: 6,
      name: "Event 6",
      date: "May 20, 2023",
      description: "Description for Event 3",
      icon: eventIcon,
    },
    {
      id: 7,
      name: "Event 6",
      date: "May 20, 2023",
      description: "Description for Event 3",
      icon: eventIcon,
    },
    {
      id: 8,
      name: "Event 6",
      date: "May 20, 2023",
      description: "Description for Event 3",
      icon: eventIcon,
    },
    {
      id: 9,
      name: "Event 6",
      date: "May 20, 2023",
      description: "Description for Event 3",
      icon: eventIcon,
    },
    {
      id: 10,
      name: "Event 6",
      date: "May 20, 2023",
      description: "Description for Event 3",
      icon: eventIcon,
    },
    {
      id: 11,
      name: "Event 6",
      date: "May 20, 2023",
      description: "Description for Event 3",
      icon: eventIcon,
    },
    {
      id: 12,
      name: "Event 6",
      date: "May 20, 2023",
      description: "Description for Event 3",
      icon: eventIcon,
    },
  ];

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

  const handleBookSlot = () => {
    // Add your logic for booking the slot
    console.log("Slot booked!");
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
  };

  useEffect(() => {
    const getDashboard = async () => {
      try {
        const url1 = "http://localhost:8081/organization/allEvents";
        const response1 = await axios.get(url1, { withCredentials: true });
        const userEvents = response1.data;

        setAllEvents(userEvents);
        console.log(userEvents);

        // setconsumerEvents(userEvents);
        // setconsumerDetails(userDetails);
        // console.log(userEvents);
        // console.log(userDetails);
      } catch (error) {
        console.log(error);
        navigate("/organization/signin");
      }
    };
    getDashboard();
  }, [navigate]);
  return (
    <>
      <Navbar />
      <div className={styles.App}>
        <div className={styles.profile}>
          <div className={styles.profilePhoto}>
            <div className={styles.container}>
              <img src={profilePicture} alt="Profile" />
              <h2>Organization Name</h2>
            </div>
          </div>
          <div className={styles.card_container}>
            <h2>Organization Name</h2>
            <p>
              <strong>Active Since:</strong> 30/5/2002
            </p>
            <p>
              <strong>Founder:</strong> Founder name
            </p>
            <p>
              <strong>CEO:</strong> CEO name
            </p>
          </div>
        </div>
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
                <h3>{event.eventName}</h3>
                <p>{event.eventDate}</p>
                <p>{event.eventState}</p>
                <p>{event.eventCity}</p>
              </div>
            ))}
            {/* {visibleEvents < eventsData.length && (
              <div className={styles.view_more}>
                <button onClick={handleViewMore}>View More Events</button>
              </div>
            )} */}
            {showModal && selectedEvent && (
              <div className={styles.modal}>
                <div className={styles.modal_content}>
                  <span className={styles.close} onClick={handleCloseModal}>
                    &times;
                  </span>
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
                    <div className= {styles.input_container}>
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
                    <button className={styles.book_button} onClick={handleBookSlot}>
                      Book the Slot
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {visibleEvents < eventsData.length && (
            <div className={styles.view_more}>
              <button onClick={handleViewMore}>View More Events</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrganizationDashboard;
