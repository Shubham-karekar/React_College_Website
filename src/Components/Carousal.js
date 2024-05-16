import React, { useEffect, useRef } from "react";
import img1 from "./Images/Slider1.png";
import img2 from "./Images/Slider2.png";
import img3 from "./Images/Slider3.png";
import img4 from "./Images/Slider4.png";
import img5 from "./Images/Slider5.png";
import img6 from "./Images/Slider6.png";
import img7 from "./Images/Slider7.png";
import img8 from "./Images/Slider8.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Carousal() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextButton = carouselRef.current.querySelector(
          '[data-bs-slide="next"]'
        );
        if (nextButton) {
          nextButton.click();
        }
      }
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      ref={carouselRef}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img5} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img6} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img7} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img8} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev "
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <IoIosArrowBack style={{ Color: "#2f3a51" }} size={40} />

        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <IoIosArrowForward size={40} />

        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
