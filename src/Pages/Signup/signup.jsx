import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import Footer from "../.././components/Footer/footer";
// import Navbar from "../.././components/Navbar/navbar";
// import Dummy from "../Dummy/dummy";
import styles from "./signup.module.css";
import { isValidEmail } from "../../Utilis/isValidEmail";
import axios from "axios";
// import BASE_URL from "../.././pages/Utilis/helper";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  const submissionHandler = async () => {
    console.log("Entered");
    if (!firstName) {
      toast.error("Enter First Name");
      return;
    }
    if (!lastName) {
      toast.error("Enter Last Name");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Enter Valid Email");
      return;
    }
    if (!password) {
      toast.error("Enter Password");
      return;
    }
    if (!phone) {
      toast.error("Enter Phone");
      return;
    }
    if (!aadharNo) {
      toast.error("Enter Aadhar No");
      return;
    }
    if (!state) {
      toast.error("Enter State");
      return;
    }
    if (!city) {
      toast.error("Enter City");
      return;
    }
    if (!age) {
      toast.error("Enter Age");
      return;
    }
    setFormLoading(true);

    const formData = {
      consumerFirstName: firstName,
      consumerLastName: lastName,
      consumerEmail: email,
      consumerPassword: password,
      consumerPhone: phone,
      consumerAadharNo: aadharNo,
      consumerState: state,
      consumerCity: city,
      consumerAge: age,
    };

    try {
      const url = "http://localhost:8080/consumer/signup";
      const response = await axios.post(url, formData);

      if (response.status === 201) {
        navigate("/dummy");
        return;
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        toast.success("user already registered");
        navigate("/dummy");
      }
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    }

    setFormLoading(false);
  };
  return (
    <div>
      <div className={styles.UserRegistration}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Consumer Registration</h2>

          <form className={styles.form}>
            <div className={styles.inputField}>
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className={styles.input}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className={styles.input}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <label>Password</label>
              <input
                type="Password"
                placeholder="Password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <label>Phone No</label>
              <input
                type="number"
                placeholder="Phone No"
                className={styles.input}
                required={true}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <label>Aadhar No</label>
              <input
                type="number"
                placeholder="Aadhar No"
                className={styles.input}
                value={aadharNo}
                onChange={(e) => setAadharNo(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <label>State</label>
              <input
                type="text"
                placeholder="State"
                className={styles.input}
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <label>City</label>
              <input
                type="text"
                placeholder="city"
                className={styles.input}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <label>Age</label>
              <input
                type="number"
                placeholder="Age"
                className={styles.input}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <input
                type="submit"
                value="Register"
                className={styles.btn}
                onClick={submissionHandler}
                disabled={formLoading}
                // onClick={notify}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

//first name
// last name
//email
//password
// aadhar no
//no of family numbers
// city
// state
// zip code
// date of birth
