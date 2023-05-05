import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../src/components/Home/Home";
import ConsumerHome from "../src/components/Consumer/ConsumerHome";
import ConsumerLogin from "../src/components/Consumer/ConsumerLogin";
import ConsumerSignup from "../src/components/Consumer/ConsumerSignup";
import OrganisationHome from "../src/components/Organisation/OrganisationHome";
import OrganisationLogin from "../src/components/Organisation/OrganisationLogin";
import OrganisationSignup from "../src/components/Organisation/OrganisationSignup";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/consumer/home" element={<ConsumerHome />} />
        <Route path="/consumer/login" element={<ConsumerLogin />} />
        <Route path="/consumer/signup" element={<ConsumerSignup />} />
        <Route path="/organisation/home" element={<OrganisationHome />} />
        <Route path="/organisation/login" element={<OrganisationLogin />} />
        <Route path="/organisation/signup" element={<OrganisationSignup />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
