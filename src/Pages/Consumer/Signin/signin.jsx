import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import Footer from "../.././components/Footer/footer";
// import Navbar from "../.././components/Navbar/navbar";
// import Dummy from "../Dummy/dummy";
import styles from "./signin.module.css";
import { isValidEmail } from "../../../Utilis/isValidEmail";
import axios from "axios";
import { Link } from "react-router-dom";
// import BASE_URL from "../.././pages/Utilis/helper";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  const submissionHandler = async () => {
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
      consumerEmail: email,
      consumerPassword: password,
    };

    try {
      const url = "http://localhost:8081/consumer/signin";
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
          <h2 className={styles.title}>Consumer Login</h2>

          <form className={styles.form}>
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
            <p>
              {" "}
              Don't have account! <Link to={"/consumer/signup"}>
                Signup
              </Link>{" "}
              Now
            </p>

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
