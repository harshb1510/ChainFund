import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import CreateCampaign from "./Pages/CreateCampaign";
import ShowCampaigns from "./Pages/ShowCampaigns";
import About from "./Pages/About";
import Campaign from "./Pages/Campaign";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/create-campaign"
        element={<CreateCampaign />}
      />
      <Route
        path="/show-campaigns"
        element={<ShowCampaigns />}/>
        <Route
        path="/about"
        element={<About />} 
      />
      <Route
      path="/campaign/:id"
      element={<Campaign />}
      />
    </Routes>
  );
};

export default AllRoutes;
