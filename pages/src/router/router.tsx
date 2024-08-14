import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./route-layout";
import LayoutWrapper from "../components/layout-wrapper";
import React from "react";

// Pages
// import AdminPageWrapper from "../pages/admin-page/admin-page-wrapper";
// import HomePage from "../pages/home-page/home-page";
// import PageNotFoundComp from "../components/common/page-not-found-comp";

const Router = () => {
  const navigate = useNavigate();
  return (
    <LayoutWrapper>
      <Routes>
        <Route
          index
          element={
            <div className="p-24">
              <button onClick={() => navigate("/admin")}>
                Go To Admin Page
              </button>
            </div>
          }
        />
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/admin" element={<div>You in the Admin Route</div>} />
        {/* <Route index element={<HomePage />} />
          <Route path="/admin" element={<AdminPageWrapper />} />
          <Route path="*" element={<PageNotFoundComp />} /> */}
        {/* </Route> */}
      </Routes>
    </LayoutWrapper>
  );
};

export default Router;
