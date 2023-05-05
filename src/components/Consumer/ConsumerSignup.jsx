import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ConsumerSignup.css";

import { conSignup } from "../../actions/auth";

const ConsumerSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rationid, setRationid] = useState(0);
  const [aadhar, setAadhar] = useState(0);
  const [members, setMembers] = useState(0);
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState(0);
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, name, password });
    if (!email && !password) {
      alert("Enter email and password");
    } else {
      dispatch(
        conSignup(
          {
            name,
            rationid,
            aadhar,
            members,
            state,
            district,
            city,
            zipcode,
            age,
            email,
            password,
          },
          navigate
        )
      );
    }
  };

  return (
    <div class="main">
      <h1>User Registration</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div class="leftside">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />

          <label for="Ration Card">Ration Card Id:</label>
          <input
            type="text"
            id="rationCard"
            name="rationCard"
            onChange={(e) => {
              setRationid(e.target.value);
            }}
            required
          />

          <label for="aadhar">Aadhar No:</label>
          <input
            type="text"
            id="aadhar"
            name="aadhar"
            onChange={(e) => {
              setAadhar(e.target.value);
            }}
            required
          />

          <label for="members">Total Family Members:</label>
          <input
            type="number"
            id="members"
            name="members"
            onChange={(e) => {
              setMembers(e.target.value);
            }}
            required
          />

          <label for="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            onChange={(e) => {
              setState(e.target.value);
            }}
            required
          />

          <label for="district">District:</label>
          <input
            type="text"
            id="district"
            name="district"
            onChange={(e) => {
              setDistrict(e.target.value);
            }}
            required
          />
        </div>

        <div class="rightside">
          <label for="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            required
          />
          <label for="zipcode">Zip Code:</label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            onChange={(e) => {
              setZipcode(e.target.value);
            }}
            required
          />
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />

          <label for="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
            required
          />

          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <label for="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />
        </div>

        <div class="submitButton">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default ConsumerSignup;
