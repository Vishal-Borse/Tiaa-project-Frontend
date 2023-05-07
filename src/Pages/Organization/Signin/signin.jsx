import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
// import Footer from "../.././components/Footer/footer";
// import Navbar from "../.././components/Navbar/navbar";
import styles from "./signin.module.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import axios from "axios";
// import BASE_URL from "../.././pages/Utilis/helper"
import { isValidEmail } from "../../../Utilis/isValidEmail";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [cookie, setCookie] = useCookies(["access_token"]);

  const loginOrganization = async () => {
    console.log("Entered");

    if (!isValidEmail(email)) {
      toast.error("Enter Valid Email");
      return;
    }
    if (!password) {
      toast.error("Enter Password");
      return;
    }

    setFormLoading(true);

    const formData = {
      organizationEmail: email,
      organizationPassword: password,
    };

    try {
      const url = "http://localhost:8081/organization/signin";
      const response = await axios.post(url, formData);

      if (response.status === 201) {
        setCookie("access_token_org", response.data.jwttoken);
        navigate("/organization/dashboard");
        return;
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        toast.success("Organization already registered");
        navigate("/organization/dashboard");
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
          <h2 className={styles.title}>Organization Login</h2>

          <form className={styles.form}>
            <div className={styles.inputField}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                required={true}
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
            <p>
              {" "}
              Don't have account!{" "}
              <Link to={"/organization/signup"}>Signup</Link> Now
            </p>
            <div className={styles.inputField}>
              <input
                type="submit"
                value="Login"
                className={styles.btn}
                onClick={loginOrganization}
                disabled={formLoading}
              />
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Signin;
