import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
// import Footer from "../.././components/Footer/footer";
// import Navbar from "../.././components/Navbar/navbar";
import styles from "./signup.module.css";
// import { isValidEmail } from "../Utilis/isValidEmail";
import { isValidEmail } from "../../../Utilis/isValidEmail";
import axios from "axios";
// import BASE_URL from "../.././pages/Utilis/helper";

const SignUp = () => {
  const navigate = useNavigate();
  const [Organizationname, setOrganizationname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [licenseid, setlicenseid] = useState("");
  const [state, setstate] = useState("");
  const [city, setCity] = useState("");

  const registerOrganization = async () => {
    if (!Organizationname) {
      toast.error("Enter First Name");
      return;
    }
    if (!email) {
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
    if (!licenseid) {
      toast.error("Enter Phone");
      return;
    }
    if (!state) {
      toast.error("Enter State");
      return;
    }
    if (!city) {
      toast.error("Enter city");
      return;
    }
    setFormLoading(true);

    const formData = {
      organizationName: Organizationname,
      organizationEmail: email,
      organizationPassword: password,
      orgLicenseId: licenseid,
      organizationState: state,
    };

    try {
      const url = "http://localhost:8081/organization/signup";
      const response = await axios.post(url, formData);

      if (response.status === 201) {
        navigate("/organization/signin");
        return;
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        toast.success("Organization already registered");
        navigate("/organization/signin");
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
          <h2 className={styles.title}>Organization Registration</h2>

          <form className={styles.form}>
            <div className={styles.inputField}>
              <label>Organization Name </label>
              <input
                type="text"
                placeholder="Organization Name"
                className={styles.input}
                value={Organizationname}
                onChange={(e) => setOrganizationname(e.target.value)}
              />
            </div>

            <div className={styles.inputField}>
              <label>License ID</label>
              <input
                type="text"
                placeholder="License Id"
                className={styles.input}
                value={licenseid}
                onChange={(e) => setlicenseid(e.target.value)}
              />
            </div>

            <div className={styles.inputField}>
              <label>State</label>
              <input
                type="text"
                placeholder="State"
                className={styles.input}
                value={state}
                onChange={(e) => setstate(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <label>City</label>
              <input
                type="text"
                placeholder="City"
                className={styles.input}
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
              <input
                type="submit"
                value="Register"
                className={styles.btn}
                onClick={registerOrganization}
                disabled={formLoading}
                // onClick={notify}
              />
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
