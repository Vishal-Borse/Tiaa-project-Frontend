import styles from "./eventBook.module.css";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";
// import { ImCancelCircle } from "react-icons/im";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import BASE_URL from "../../pages/Utilis/helper";

const PersonalTransaction = ({ closeCallback }) => {
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
          <h1>Niggas Event</h1>
        </div>
        <div className={styles.location}>
          <h2>Pune, Maharashtra</h2>
          <p>23rd May, 2023</p>
        </div>
        <div className={styles.stock}>
          <h3>Available Stock</h3>
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
        <div>
          <h2>Available Slots</h2>
          <p>10am to 4pm</p>
          <p>7pm to 6pm</p>
        </div>
        <div>
          <h3>Your time Slot</h3>
          <div className={styles.inputField}>
            <label>Start Time</label>
            <input type="number" className={styles.input} required={true} />
          </div>
          <div className={styles.inputField}>
            <label>End Time</label>
            <input type="number" className={styles.input} required={true} />
          </div>
        </div>

        <div className={styles.inputs_btn}>
          <button disabled={formLoading}>Add</button>
        </div>
      </form>
    </div>
  );
};
// onClick={addTransaction}
export default PersonalTransaction;
