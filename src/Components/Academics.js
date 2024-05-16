import React from "react";
import { MdOutlineScience } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";
import { FaArtstation } from "react-icons/fa";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

export default function Academics() {
  return (
    <>
      <div className="container-fluid mb-5">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp my-4"
          data-wow-delay="0.1s"
          style={{ maxWidth: 500 }}
        >
          <h6 className=" display-6 text-primary text-uppercase mb-2">
            <b>Our College Streams</b>
          </h6>
        </div>
      </div>
      <div className="my-4 container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <NavLink to="/science" className="text-decoration-none">
              <div
                className="card my-card border-0 rounded bg-light shadow-sm animate__animated animate__fadeInUp"
                style={{ height: "200px" }}
              >
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <MdOutlineScience className="mx-4" size={60} />
                  <div className="mt-3 text-center">
                    <h5 className="text-dark fw-bold">SCIENCE</h5>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-4">
            <NavLink to="/commerce" className="text-decoration-none">
              <div
                className="card my-card border-0 rounded bg-light shadow-sm animate__animated animate__fadeInUp"
                style={{ height: "200px" }}
              >
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <BsBank2 className="mx-4" size={60} />
                  <div className="mt-3 text-center">
                    <h5 className="text-dark fw-bold">COMMERCE</h5>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-4">
            <NavLink to="/arts" className="text-decoration-none">
              <div
                className="card my-card border-0 rounded bg-light shadow-sm animate__animated animate__fadeInUp"
                style={{ height: "200px" }}
              >
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <FaArtstation className="mx-4" size={60} />
                  <div className="mt-3 text-center">
                    <h5 className="text-dark fw-bold">ARTS</h5>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
