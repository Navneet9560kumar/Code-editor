// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Code from "./pages/Home/Code";
import Contest from "./pages/Home/CategoryPage/Contest";
import Profile from "./pages/Home/Profile";
import Register from "./pages/Home/Register";
import Result from "./pages/Home/Result";
import Sheet from "./pages/Home/Sheet";
import ReactChallenge from "./pages/Home/CategoryPage/ReactChallenge";
import FrontendDevelopment from "./pages/Home/CategoryPage/FrontendDevelopment";
import BackendDevelopment from "./pages/Home/CategoryPage/BackendDevloment";
import CSSChallenge from "./pages/Home/CategoryPage/CSSChallenge";
import DSAChallenge from "./pages/Home/CategoryPage/DSAChallenge";
import FullstackDevelopment from "./pages/Home/CategoryPage/FullstackDevelopment";
import MobileDevelopment from "./pages/Home/CategoryPage/MobileDevelopment ";
import AppDevelopment from "./pages/Home/CategoryPage/AppDevelopment ";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code" element={<Code />} />
        <Route path="/contest/:id" element={<Contest />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/result" element={<Result />} />
        <Route path="/sheet" element={<Sheet />} />
      </Routes>
      <ReactChallenge/>
      <FrontendDevelopment/>
      <BackendDevelopment/>
      <CSSChallenge/>
      <DSAChallenge/>
      <FullstackDevelopment/>
      <MobileDevelopment/>
      <AppDevelopment/>
    </div>
  );
};
export default App;
