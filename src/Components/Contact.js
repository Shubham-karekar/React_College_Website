import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, message } = userData;
    if (name && email && message) {
      try {
        const res = await fetch(
          "https://reactformdata-8601d-default-rtdb.firebaseio.com/userDataRecords.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              message,
            }),
          }
        );

        if (res.ok) {
          setUserData({
            name: "",
            email: "",
            message: "",
          });
          alert("Data Stored");
        } else {
          alert("Error storing data");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error storing data");
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp "
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <h6 className=" display-6 text-primary text-uppercase mb-2 mt-4">
              Contact us
            </h6>
          </div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60554.18905221528!2d73.854388!3d18.454792!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac6040cb269%3A0xac653591baaaa13e!2sSarhad%20College%20of%20Arts%2CCommerce%20and%20Science!5e0!3m2!1sen!2sin!4v1707550403154!5m2!1sen!2sin"
              width={1510}
              height={600}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="container-fluid pt-5">
          <div className="container">
            <div className="text-center pb-2">
              <p className="section-title px-5">
                <span className="px-2">Get In Touch</span>
              </p>
              <h1 className="mb-4">Contact Us For Any Query</h1>
            </div>
            <div className="custom-container custom-bg-gray p-4 mb-5">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <form action="https://formspree.io/f/xleqpwbd" method="POST">
                    <>
                      <label htmlFor="name" className="form-label ">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control mb-3"
                        id="name"
                        value={userData.name}
                        onChange={postUserData}
                      />
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control mb-3"
                        id="email"
                        value={userData.email}
                        onChange={postUserData}
                      />
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"                        
                        rows={6}
                        value={userData.message}
                        onChange={postUserData}
                      />
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block mt-3 mb-3"
                        onClick={submitData}
                      >
                        Send
                      </button>
                    </>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
