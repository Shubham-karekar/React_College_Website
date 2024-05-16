import React from "react";
import "../App.css";

export default function Review() {
  return (
    <>
      <div className="container my-4">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp my-4"
          data-wow-delay="0.1s"
          style={{ maxWidth: 500 }}
        >
          <h6 className=" display-6 text-primary text-uppercase mb-2">
            WHAT STUDENTS ARE SAYING ABOUT SARHAD
          </h6>
        </div>
        <div className="row">
          <div className="col">
            <div className="container d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="col-md-3 mb-4">
                  <div className="card h-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <p className="card-text">
                        Very nice teaching and extra curriculum activities.
                      </p>
                      <h5 className="card-title">- Ashwini Hemraj Solanki</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="card h-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <p className="card-text">
                        All staff of all courses are too good..they are very
                        helpful.. Our college is the best college
                      </p>
                      <h5 className="card-title">- Prachi Navneet Kapse</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="card h-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <p className="card-text">
                        Sarhad envisages to establish itself as one of the best
                        centers in south Asia.
                      </p>
                      <h5 className="card-title">
                        - Amruta Shivaji Rananavare
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="card h-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <p className="card-text">
                        Education is most important for taking all
                        teachers.responsiblity is tai very well all teachers in
                        sarhad college.
                      </p>
                      <h5 className="card-title">
                        - Renuka Parshuram Gaikwadss
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
