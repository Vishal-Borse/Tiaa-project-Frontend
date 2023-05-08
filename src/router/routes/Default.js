import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../Pages/Home/home";
import ConsumerSignin from "../../Pages/Consumer/Signin/signin";
import ConsumerSignup from "../../Pages/Consumer/Signup/signup";
import OrganizationSignup from "../../Pages/Organization/Signup/signup";
import OrganizationSignin from "../../Pages/Organization/Signin/signin";
import AboutUs from "../../Pages/AboutUs/aboutus";
import ContactUs from "../../Pages/ContactUs/contactus";
// import Dummy from "../../Pages/Dummy/dummy";
import ConsumerDashboard from "../../Pages/Consumer/Dashboard/dashboard";
import OrganizationDashboard from "../../Pages/Organization/Dashboard/dashboard";

const Default = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="/organization/dashboard"
        element={<OrganizationDashboard />}
      />
      <Route path="/consumer/dashboard" element={<ConsumerDashboard />} />
      <Route path="/consumer/signin" element={<ConsumerSignin />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/consumer/signup" element={<ConsumerSignup />} />
      <Route path="/organization/signin" element={<OrganizationSignin />} />
      <Route path="/organization/signup" element={<OrganizationSignup />} />
    </Routes>
  );
};

export default Default;
