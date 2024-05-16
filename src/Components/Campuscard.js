import React from "react";
import img1 from "./Images/Academics.jpg";
import img2 from "./Images/Cultural_Activities.jpg";
import img3 from "./Images/Infrastructure.jpg";
import img4 from "./Images/Sports.jpg";

export default function Campuscard() {
  return (
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp "
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <h6 className=" display-6 text-primary text-uppercase mb-2 mt-4 ">
          COLLEGE CAMPUS
        </h6>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card team-item position-relative p-4 shadow">
            <img className="card-img-top img-fluid" src={img1} alt="" />
            <div className="card-body bg-light text-center p-4">
              <h5 className="card-title mt-2">Academics</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card team-item position-relative p-4 shadow">
            <img className="card-img-top img-fluid" src={img2} alt="" />
            <div className="card-body bg-light text-center p-4">
              <h5 className="card-title mt-2">Cultural Activities</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card team-item position-relative p-4 shadow">
            <img className="card-img-top img-fluid" src={img3} alt="" />
            <div className="card-body bg-light text-center p-4">
              <h5 className="card-title mt-2">Infrastructure</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card team-item position-relative p-4 shadow">
            <img className="card-img-top img-fluid" src={img4} alt="" />
            <div className="card-body bg-light text-center p-4">
              <h5 className="card-title mt-2">Sports</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
