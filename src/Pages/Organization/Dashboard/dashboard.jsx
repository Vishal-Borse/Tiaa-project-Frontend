import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import { useNavigate } from "react-router-dom";

// import Photo from "./Images/budget.png";
// import Footer from "../.././components/Footer/footer.jsx";
// import Navbar from "../.././components/Navbar/navbar.jsx";
import Navbar from "../../../Components/organizationNavbar/organiserNavbar";
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

  useEffect(() => {
    const getDashboard = async () => {
      try {
        const url1 = "http://localhost:8081/organization/allEvents";
        const response1 = await axios.get(url1, { withCredentials: true });
        const userEvents = response1.data;

        setAllEvents(userEvents);
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
            {eventsData.slice(0, visibleEvents).map((event) => (
              <div
                key={event.id}
                className={styles.event_block}
                onClick={() => handleCardClick(event)}
              >
                <img src={event.icon} alt="Event Icon" />
                <h3>{event.name}</h3>
                <p>{event.date}</p>
              </div>
            ))}
            {visibleEvents < eventsData.length && (
              <div className={styles.view_more}>
                <button onClick={handleViewMore}>View More Events</button>
              </div>
            )}
            {showModal && selectedEvent && (
              <div className={styles.modal}>
                <div className={styles.modal_content}>
                  <span className={styles.close} onClick={handleCloseModal}>
                    &times;
                  </span>
                  <h2>{selectedEvent.name}</h2>
                  <p>Date: {selectedEvent.date}</p>
                  <p>Description: {selectedEvent.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrganizationDashboard;
