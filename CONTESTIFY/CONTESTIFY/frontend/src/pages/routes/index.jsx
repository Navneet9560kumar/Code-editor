// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import Code from "../Home/Code";
import Contest from "../Home/CategoryPage/Contest";
import Profile from "../Home/Profile";
import Register from "../Home/Register";
import Result from "../Home/Result";
import Sheet from "../Home/Sheet";

const RouteManager = () => {
  return (
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/code" element={<Code />} />
          <Route path="/contest/:id" element={<Contest />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/result" element={<Result />} />
          <Route path="/sheet" element={<Sheet />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </App>
    </Router>
  );
};

export default RouteManager;
