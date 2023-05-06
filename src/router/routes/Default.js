import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../Pages/Home/home"
import ConsumerSignin from "../../Pages/Consumer/Signin/signin";
import ConsumerSignup from "../../Pages/Consumer/Signup/signup";
import OrganizationSignup from "../../Pages/Organization/Signup/signup";
import OrganizationSignin from "../../Pages/Organization/Signin/signin";


const Default = () => {
  return (
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/consumer/signin" element={<ConsumerSignin/>} />
      <Route path="/consumer/signup" element={<ConsumerSignup/>} />
      <Route path="/organization/signin" element={<OrganizationSignin/>} />
      <Route path="/organization/signup" element={<OrganizationSignup/>} />

    </Routes>
  );
};

export default Default;
