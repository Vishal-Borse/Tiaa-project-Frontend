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
  const [eventName, setEventName] = useState();
  const [eventState, setEventState] = useState();
  const [eventDate, setEventDate] = useState();
  const [eventCity, setEventCity] = useState();
  const [rationDetail, setRationDetail] = useState({
    item: "",
    quantity: 0,
    mfgDate: "",
    expiryDate: "",
    provider: "",
    allocatedPerUser: 0,
  });
  const [rationDetails, setRationDetails] = useState([]);

  const [formLoading, setFormLoading] = useState(false);

  //   const addTransaction = async () => {
  //     if (!category) {
  //       toast.error("Select Category");
  //       return;
  //     }
  //     if (!purpose) {
  //       toast.error("Enter Purpose");
  //       return;
  //     }
  //     if (!amount) {
  //       toast.error("Enter Amount");
  //       return;
  //     }
  //     setFormLoading(true);

  //     const formData = {
  //       transactionPurpose: purpose,
  //       transactionAmount: amount,
  //       transactionCategory: category,
  //     };

  //     try {
  //       const url = `${BASE_URL}/dashboard/personaltransaction`;
  //       const response = await axios.post(url, formData, {
  //         withCredentials: true,
  //       });
  //       navigate(0);
  //     } catch (error) {
  //       toast.error(error.response.data.message);
  //       navigate("/dashboard");
  //     }
  //     setFormLoading(false);
  //   };

  //   const addRationDetails = async()=>{
  //      const details  ={
  //         item:
  //      }
  //   }

  const handleSubmit = (e) => {
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
            <input type="text" className={styles.input} required={true} />
          </div>
          <div className={styles.inputField}>
            <label>Event Date</label>
            <input type="date" className={styles.input} required={true} />
          </div>
          <div className={styles.inputField}>
            <label>Event State</label>
            <input type="text" className={styles.input} required={true} />
          </div>
          <div className={styles.inputField}>
            <label>Event City</label>
            <input type="text" className={styles.input} required={true} />
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
              required={true}
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
              required={true}
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
              required={true}
            />
            <input
              value={rationDetail.expiryDate}
              onChange={(e) =>
                setRationDetail({ ...rationDetail, expiryDate: e.target.value })
              }
              type="date"
              className={styles.input}
              required={true}
              placeholder="Expiry Date"
            />
            <input
              value={rationDetail.provider}
              onChange={(e) =>
                setRationDetail({ ...rationDetail, provider: e.target.value })
              }
              type="text"
              className={styles.input}
              required={true}
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
              required={true}
              placeholder="Allocted Per User"
            />
          </div>
          <button onClick={handleSubmit}>Add Details</button>
          <div>
            <table>
              <thead>
                <tr>
                  <td>Item</td>
                  <td>Quantity per User</td>
                  <td>MFG Date</td>
                  <td>Exp Date</td>
                  <td>Provider</td>
                </tr>
              </thead>
              <tbody>
                {rationDetails.map((detail) => (
                  <tr>
                    <td>{detail.item}</td>
                    <td>{`${detail.quantity}kg`}</td>
                    <td>{detail.mfgDate}</td>
                    <td>{detail.expirtyDate}4</td>
                    <td>{detail.provider}</td>
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
              type="text"
              className={styles.input}
              required={true}
              placeholder="Start Time"
            />
            <input
              type="text"
              className={styles.input}
              required={true}
              placeholder="End Time"
            />
            <button className={styles.inputs_btn}>Add Slot</button>
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
              <tr>
                <td>10.00PM</td>
                <td>2.00PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.inputs_btn}>
          <button disabled={formLoading}>Create</button>
        </div>
      </form>
    </div>
  );
};
// onClick={addTransaction}
export default AddEvent;
