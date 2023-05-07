import styles from "./addEvent.module.css";
import { ImCancelCircle } from "react-icons/im";
import { useEffect, useState } from "react";
// import { ImCancelCircle } from "react-icons/im";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import BASE_URL from "../../pages/Utilis/helper";

const AddEvent = ({ closeCallback }) => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState("");
  const [eventState, setEventState] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventCity, setEventCity] = useState("");
  const [rationDetail, setRationDetail] = useState({
    item: "",
    quantity: 0,
    mfgDate: "",
    expiryDate: "",
    provider: "",
    allocatedPerUser: 0,
  });
  const [rationDetails, setRationDetails] = useState([]);

  const [rationSchedule, setRationSchedule] = useState({
    startTime: "",
    endTime: "",
  });
  const [rationSchedules, setRationSchedules] = useState([]);

  const [formLoading, setFormLoading] = useState(false);

  const createEvent = async (e) => {
    e.preventDefault();

    if (!eventName) {
      toast.error("Enter Event Name");
      return;
    }
    if (!eventState) {
      toast.error("Enter Event State");
      return;
    }
    if (!eventDate) {
      toast.error("Enter Event Date");
      return;
    }
    if (!eventCity) {
      toast.error("Enter Event city");
      return;
    }
    setFormLoading(true);

    const formData = {
      eventName: eventName,
      eventState: eventState,
      eventDate: eventDate,
      eventCity: eventCity,
      rationDetails: rationDetails,
      scheduleDetails: rationSchedules,
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
  };

  const handleSubmitration = (e) => {
    e.preventDefault();

    setRationDetails([...rationDetails, rationDetail]);
    setRationDetail({
      item: "",
      quantity: 0,
      mfgDate: "",
      expiryDate: "",
      provider: "",
      allocatedPerUser: 0,
    });
  };

  const handleScheules = (e) => {
    e.preventDefault();
    setRationSchedules([...rationSchedules, rationSchedule]);
    setRationSchedule({
      startTime: "",
      endTime: "",
    });
  };

  return (
    <div className={styles.background_container}>
      <form className={styles.card}>
        <div className={styles.cancel_btn_div}>
          <ImCancelCircle
            className={styles.cancel_btn}
            onClick={closeCallback}
          />
        </div>
        <div className={styles.heading}>
          <h1>Create New Event</h1>
        </div>
        <div className={styles.inputs}>
          <div className={styles.inputField}>
            <label>Event Name</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className={styles.input}
              required={true}
            />
          </div>
          <div className={styles.inputField}>
            <label>Event Date</label>
            <input
              type="date"
              value={eventDate}
              className={styles.input}
              onChange={(e) => setEventDate(e.target.value)}
              required={true}
            />
          </div>
          <div className={styles.inputField}>
            <label>Event State</label>
            <input
              type="text"
              value={eventState}
              onChange={(e) => setEventState(e.target.value)}
              className={styles.input}
              required={true}
            />
          </div>
          <div className={styles.inputField}>
            <label>Event City</label>
            <input
              type="text"
              value={eventCity}
              onChange={(e) => setEventCity(e.target.value)}
              className={styles.input}
              required={true}
            />
          </div>
        </div>
        <div className={styles.rationDetails}>
          <h2>Ration Details</h2>
          <div>
            <input
              value={rationDetail.item}
              onChange={(e) =>
                setRationDetail({ ...rationDetail, item: e.target.value })
              }
              type="text"
              className={styles.input}
              placeholder="Item"
            />
            <input
              value={rationDetail.quantity}
              onChange={(e) => {
                console.log(e.target.value);
                setRationDetail({ ...rationDetail, quantity: e.target.value });
              }}
              type="number"
              className={styles.input}
              placeholder="Quantity"
            />
            <input
              value={rationDetail.mfgDate}
              onChange={(e) => {
                console.log(e.target.value);
                setRationDetail({ ...rationDetail, mfgDate: e.target.value });
              }}
              type="date"
              className={styles.input}
              placeholder="MFG Date"
            />
            <input
              value={rationDetail.expiryDate}
              onChange={(e) =>
                setRationDetail({ ...rationDetail, expiryDate: e.target.value })
              }
              type="date"
              className={styles.input}
              placeholder="Expiry Date"
            />
            <input
              value={rationDetail.provider}
              onChange={(e) =>
                setRationDetail({ ...rationDetail, provider: e.target.value })
              }
              type="text"
              className={styles.input}
              placeholder="Provider"
            />
            <input
              value={rationDetail.allocatedPerUser}
              onChange={(e) =>
                setRationDetail({
                  ...rationDetail,
                  allocatedPerUser: e.target.value,
                })
              }
              type="number"
              className={styles.input}
              placeholder="Allocted Per User"
            />
          </div>
          <button onClick={handleSubmitration}>Add Details</button>
          <div>
            <table>
              <thead>
                <tr>
                  <td>Item</td>
                  <td>Quantity per User</td>
                  <td>MFG Date</td>
                  <td>Exp Date</td>
                  <td>Provider</td>
                  <td>Allocated Per User</td>
                </tr>
              </thead>
              <tbody>
                {rationDetails.map((detail) => (
                  <tr key={detail.item}>
                    <td>{detail.item}</td>
                    <td>{`${detail.quantity}kg`}</td>
                    <td>{detail.mfgDate}</td>
                    <td>{detail.expirtyDate}4</td>
                    <td>{detail.provider}</td>
                    <td>{detail.allocatedPerUser}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2>Ration Schedule</h2>
          <div>
            <input
              value={rationSchedule.startTime}
              onChange={(e) =>
                setRationSchedule({
                  ...rationSchedule,
                  startTime: e.target.value,
                })
              }
              type="text"
              className={styles.input}
              placeholder="Start Time"
            />
            <input
              value={rationSchedule.endTime}
              onChange={(e) =>
                setRationSchedule({
                  ...rationSchedule,
                  endTime: e.target.value,
                })
              }
              type="text"
              className={styles.input}
              placeholder="End Time"
            />
            <button onClick={handleScheules} className={styles.inputs_btn}>
              Add Slot
            </button>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <td>Start Time</td>
                <td>End Time</td>
              </tr>
            </thead>
            <tbody>
              {rationSchedules.map((schedule) => (
                <tr key={`${schedule.startTime}-${schedule.endTime}`}>
                  <td>{schedule.startTime}</td>
                  <td>{schedule.endTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.inputs_btn}>
          <button onClick={createEvent} disabled={formLoading}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
// onClick={addTransaction}
export default AddEvent;
