import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { SlSocialYoutube } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";


function Menubar() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0(); //Auth0 useState

  const openInstagramPage = () => {
    window.open(
      "https://www.instagram.com/sarhadcollege_acs_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      "_blank"
    );
  };

  const openYoutubePage = () => {
    window.open("https://www.youtube.com/@sarhadcollege416/featured", "_blank");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#2f3a51" }}
      
    >
      <div className="container">
        <div className="navbar-brand d-inline-flex ">
          <SlSocialYoutube
            onClick={openYoutubePage}
            style={{ cursor: "pointer", marginRight: "15px" }}
            size={35}
            data-bs-toggle="tooltip"
            title="Visit our YouTube channel"
          />
          <FaInstagram
            className="color-white"
            onClick={openInstagramPage}
            style={{ cursor: "pointer" }}
            size={35}
            data-bs-toggle="tooltip"
            title="Visit our Instagram page"
          />
        </div>
        <div className="navbar-nav ms-auto">
          <div className="d-flex align-items-center">
            {isAuthenticated && (
              <>
                <button
                  className="btn btn-primary me-2 bg-dark"
                  style={{ width: "14vh" }}
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
                {user && (
                  <p className="nav-link text-white m-0">
                    Welcome, {user.nickname}
                  </p>
                  // <img src={user.picture} alt={user.name} />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menubar;
