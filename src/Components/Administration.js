import React from "react";
import img from "./Images/chairman.jpg";
import img1 from "./Images/principal-sir.jpg";
import img2 from "./Images/secretary.jpg";
import Footer from "./Footer";

export default function Administration() {
  return (
    <>
      <div className="container-xxl my-4">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <h6 className=" display-6 text-primary text-uppercase mb-2">
              College Development Committee
            </h6>
          </div>
          <div className="row justify-content-center align-items-center">
            <div
              className="col-lg-3 col-md-6 mb-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item position-relative p-4">
                <div className="position-relative">
                  <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="bg-light text-center p-4">
                  <h5 className="mt-2">Mr. Sanjay Nahar</h5>
                  <span>Chairman</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item position-relative p-4">
                <div className="position-relative">
                  <img className="img-fluid" src={img1} alt="" />
                </div>
                <div className="bg-light text-center p-4">
                  <h5 className="mt-2">Dr.Hanumant Jadhavar</h5>
                  <span>Principal</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item position-relative p-4">
                <div className="position-relative">
                  <img className="img-fluid" src={img2} alt="" />
                </div>
                <div className="bg-light text-center p-4">
                  <h5 className="mt-2">Mrs. Sushma Nahar</h5>
                  <span>General Secretary, Sarhad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 500 }}
        >
          <h6 className=" display-6 text-primary text-uppercase mb-2">
            Meet the Team
          </h6>
          <h1 className="display-6 mb-4">
            We Have Great Experience Of Teaching Staff
          </h1>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <table className="table table-bordered table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Dr. Sangeeta Shinde</td>
                    <td>IQAC Coordinator</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Shri. Rohan Tambade</td>
                    <td>Local Member</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Dr.Vilina Inamdar</td>
                    <td>Local Member</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Dr. Sheetal Lakde</td>
                    <td>Head of Department of Commerce</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Asst. Prof. Sonali Gholve</td>
                    <td>Head of Department of Computer Science</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Asst. Prof. Komal Wanshiv</td>
                    <td>Head of Department of BBA(CA)</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Asst. Prof. Shreeraj Bhor</td>
                    <td>Head of Department of BBA</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Asst. Prof. Aparna Kedari</td>
                    <td>Head of Department of Science</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Suraj Salvi</td>
                    <td>Member of Student Council</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>Gauri Kakade</td>
                    <td>Member of Student Council</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 500 }}
        >
          <h6 className=" display-6 text-primary text-uppercase mb-2">
            Meet the Team
          </h6>
          <h1 className="display-6 mb-4">Examination Committee</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <table className="table table-bordered table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Qualification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mrs. Sayali D Patil </td>
                    <td>CEO</td>
                    <td>M.com, SET,B.Ed, GDC&A</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Dr. Sangeeta S. Shinde</td>
                    <td>Senior Supervisor</td>
                    <td>MA,BEd,M.Phil, PhD, SET</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Ms Komal Shinde</td>
                    <td>Internal Exam Head</td>
                    <td>MA, Bed, SET</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Mrs Komal Wanshiv</td>
                    <td>CAP director</td>
                    <td>MCA NET</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
