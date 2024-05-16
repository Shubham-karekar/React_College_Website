import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import axios from "axios";
import "../App.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yvrldz2", "template_vk7grln", form.current, {
        publicKey: "ycgoiSvVybOqqKXuq",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (name.length === 0) {
      alert("Name has left Blank!");
    } else if (email.length === 0) {
      alert("Email has left Blank!");
    } else if (message.length === 0) {
      alert("Message has left Blank!");
    } else {
      const url = "http://localhost/shubham/formsubmitsclg.php";
      let fData = new FormData();
      fData.append("name", name);
      fData.append("email", email);
      fData.append("message", message);
      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-10">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp "
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <h6 className="display-6 text-primary text-uppercase mb-2 mt-4">
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
              <span className=" text-primary text mb-2 mt-4 px-2">Get In Touch</span>
            </p>
            <h1 className="text-primary mb-4">Contact Us For Any Query</h1>
          </div>
          <div class="custom-container custom-bg-gray p-4 mb-5">
            <div class="row justify-content-center">
              <div class="col-md-8">
                <form
                  ref={form}
                  action="https://formspree.io/f/xjvnokpo"
                  onSubmit={sendEmail}
                >
                  <>
                    <label htmlFor="from_name" className="form-label ">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="user_email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control mb-3"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={6}
                      defaultValue={""}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block mt-3 mb-3"
                      onClick={handleSubmit}
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
      <Footer />
    </div>
  );
};
export default Contact;
