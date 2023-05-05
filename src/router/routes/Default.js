import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "../../pages/Home/home";
// import Dashboard from "../../pages/Dashboard/dashboard";
import Signup from "../../Pages/Signup/signup";
import Dummy from "../../Pages/Dummy/dummy";
// import Signin from "../../pages/SignIn/signin";
// import FriendsList from "../../components/FriendsList/friendsList";
// import Logout from "../../pages/Logout/logout";
// import Loading from "../../components/Loading/loading";

const Default = () => {
  return (
    <Routes>
      <Route index element={<Signup />} />
      {/* <Route index element={<Loading/>} /> */}
      {/* <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/logout" element={<Logout />} /> */}
      <Route path="/dummy" element={<Dummy />} />
    </Routes>
  );
};

export default Default;
