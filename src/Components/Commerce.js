import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bca from "./Bca.js";

import Sliderbar from "./Sliderbar.js";
import Footer from "./Footer";
import "../App.css";

export default function Commerce() {
  return (
    <>
      <Sliderbar />
      <Routes>
        <Route path="/bca" element={<Bca />} />
        <Route path="/bba" element={<Bca />} />
        <Route path="/bcom" element={<Bca />} />
        <Route path="/mcom" element={<Bca />} />
      </Routes>

      {/* <Footer/> */}
    </>
  );
}
