import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Images/logo.png";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";

function Footer() {
  const openInstagramPage = () => {
    window.open(
      "https://www.instagram.com/sarhadcollege_acs_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      "_blank"
    );
  };
  const openYoutubePage = () => {
    window.open("https://www.youtube.com/@sarhadcollege416/featured", "_blank");
  };
  const openMapPage = () => {
    window.open("https://maps.app.goo.gl/xP79jnwQbt36TGhY8", "_blank");
  };
  return (
    <>
      <div>
        <>
          <footer
            className="text-center text-lg-start text-white"
            style={{ backgroundColor: "#1c2331" }}
          >
            <section
              className="d-flex   p-2"
              style={{ backgroundColor: "#6351ce", margin: "0vh" }}
            >
              <div className="me-3">
                <span>Get connected with us on social networks:</span>
              </div>

              <div className="d-flex  ">
                <a href="" className="text-white me-4">
                  <IoLogoYoutube
                    onClick={openYoutubePage}
                    style={{ cursor: "pointer" }}
                    size={25}
                  />
                </a>
                <a href="" className="text-white me-4">
                  <FaInstagramSquare
                    onClick={openInstagramPage}
                    style={{ cursor: "pointer" }}
                    size={25}
                  />
                </a>
                <a href="" className="text-white me-4">
                  <FaLocationDot
                    onClick={openMapPage}
                    style={{ cursor: "pointer" }}
                    size={25}
                  />
                </a>
              </div>
            </section>
            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ">
                    <img className="mx-5" src={logo} width={150} />
                    <p>
                      Sarhad was founded in June 1984. 'breathvakya' being the
                      mission statement of the society, all the Institutes
                      follow the same.{" "}
                    </p>
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: 60,
                        backgroundColor: "#7c4dff",
                        height: 2,
                      }}
                    />
                    <p>
                      <NavLink
                        to="/"
                        className="text-white  mb-2 text-decoration-none"
                      >
                        Home
                      </NavLink>
                    </p>
                    <p>
                      <NavLink
                        to="/about"
                        className="text-white text-decoration-none"
                      >
                        About_us
                      </NavLink>
                    </p>
                    <p>
                      <NavLink
                        to="/contact"
                        className="text-white text-decoration-none"
                      >
                        Contact
                      </NavLink>
                    </p>
                    <p>
                      <NavLink
                        to="/administration"
                        className="text-white text-decoration-none"
                      >
                        Administration
                      </NavLink>
                    </p>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold">Contact</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: 60,
                        backgroundColor: "#7c4dff",
                        height: 2,
                      }}
                    />
                    <p style={{ marginTop: "10px" }}>
                      <FaRegAddressCard size={20} /> Sr.No.79,80,81,76/4 (new),
                      Near Rajaram Gas Agency, Pune-Kashmir Maitri Chowk,
                      Katraj, Pune, Maharashtra 411046
                    </p>
                    <p style={{ marginTop: "10px" }}>
                      <FaPhone size={20} /> (020)24368621
                    </p>
                    <p style={{ marginTop: "10px" }}>
                      <AiOutlineMail size={20} /> sarhadcollege@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              © 2024 Copyright
            </div>
          </footer>
        </>
      </div>
    </>
  );
}
export default Footer;
