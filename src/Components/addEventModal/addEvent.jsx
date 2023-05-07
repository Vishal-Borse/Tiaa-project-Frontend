import styles from "./addEvent.module.css";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";
// import { ImCancelCircle } from "react-icons/im";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import BASE_URL from "../../pages/Utilis/helper";

const AddEvent = ({ closeCallback }) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const [purpose, setPurpose] = useState();
  const [amount, setAmount] = useState();
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
              type="text"
              className={styles.input}
              placeholder="Item"
              required={true}
            />
            <input
              type="number"
              className={styles.input}
              placeholder="Quantity"
              required={true}
            />
            <input
              type="date"
              className={styles.input}
              placeholder="MFG Date"
              required={true}
            />
            <input
              type="date"
              className={styles.input}
              required={true}
              placeholder="Expiry Date"
            />
            <input
              type="text"
              className={styles.input}
              required={true}
              placeholder="Provider"
            />
            <input
              type="number"
              className={styles.input}
              required={true}
              placeholder="Allocted Per User"
            />
          </div>
          <button>Add Details</button>
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
                <tr>
                  <td>Wheat</td>
                  <td>5kg</td>
                  <td>23/03/2023</td>
                  <td>23/08/2024</td>
                  <td>Vishal Traders</td>
                </tr>
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
