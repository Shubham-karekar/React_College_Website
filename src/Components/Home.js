import React from "react";
import Carousal from "./Carousal.js";
import Footer from "./Footer";
import Review from "./Review.js";
import Campuscard from "./Campuscard.js";

export default function Home() {
  return (
    <div>
      <Carousal />
      <Campuscard />
      <Review />
      <Footer />
    </div>
  );
}
