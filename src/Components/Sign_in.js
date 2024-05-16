import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Sign_in() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (name.length === 0) {
      alert("Name has left Blank!");
    } else if (mobile.length === 0) {
      alert("Mobile has left Blank!");
    } else if (email.length === 0) {
      alert("Email has left Blank!");
    } else if (password.length === 0) {
      alert("Password has left Blank!");
    } else {
      const url = "http://localhost/shubham/formsubmit.php";
      let fData = new FormData();
      fData.append("name", name);
      fData.append("mobile", mobile);
      fData.append("email", email);
      fData.append("password", password);
      axios
        .post(url, fData)
        .then((response) => {
          alert("Data saved successfully!");
          // Clear form fields after successful saved
          setName("");
          setMobile("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => alert(error));
    }
  };

  return (
    <>
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
        }}
      >
        <div className="mask  align-items-center h-100 gradient-custom-3">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 me-4 my=4">
                <div className="card border-0 rounded-lg my-4">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>
                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Your Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="mobile"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          placeholder="Your Mobile"
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          placeholder="Your Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg me-2"
                          placeholder="Enter the Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-check  justify-content-center mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree to all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>
                      <div className="d-grid">
                        <button
                          type="button"
                          className="btn btn-success btn-lg gradient-custom-4 text-body"
                          onClick={handleSubmit}
                        >
                          Register
                        </button>
                      </div>
                      <p className="text-center text-muted mt-4 mb-0">
                        Already have an account?{" "}
                        <NavLink to="/login" className="fw-bold text-body">
                          <u>Login here</u>
                        </NavLink>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Sign_in;
