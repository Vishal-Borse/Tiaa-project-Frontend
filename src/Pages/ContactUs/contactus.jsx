import { useState } from "react";
import "./contactus.css";
// import { FaAd, FaAddressBook } from "react-icons/fa";
import { AiTwotoneMail, AiTwotonePhone } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
      </div>
      <div className="container">
        <div className="contactinfo">
          <div className="box">
            <div className="icon">
              <FaRegAddressBook />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>14, ABC street,Near Gateway of India, India.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <AiTwotonePhone />
            </div>
            <div className="text">
              <h3>Phone no</h3>
              <p>1234-5678-9</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <AiTwotoneMail />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>ration@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactform">
          <form onSubmit={handleSubmit}>
            <h2>Send message</h2>
            <div className="inputBox">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <span>Full name</span>
            </div>
            <div className="inputBox">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <span>Type your message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
