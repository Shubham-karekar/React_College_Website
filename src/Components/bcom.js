import React from "react";
import Footer from "./Footer";

export default function bcom() {
  return (
    <div>
      <>
        <div className="container mt-5">
          <h2 className="text-center">Bachelor of Commerce (B.Com.)</h2>
          <p>
            B.Com is a graduation course of 3 years duration having Semester
            Pattern (CBCS system) for First year & Second year and Annual
            Pattern for Third year. Specialization subject available in Cost
            Accounting and Banking & Finance . The course teaches the students
            about the higher level concepts in the domain of Commerce.
          </p>
          <p>
            <b>Eligibility :</b> H.S.C. (10+2) commerce or its equivalent
            Examination.
          </p>
          <p>
            <b>Duration :</b> 3 Years
          </p>
          <p>
            <b>Intake :</b> 120 Students
          </p>
          <b>Syllabus :</b>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Year</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>First Year</td>
                <td>Otto</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Second Year</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Third Year</td>
                <td>Thornton</td>
              </tr>
            </tbody>
          </table>
          <b>Scope for Higher Studies after B.B.A.(CA)</b>
          <ul>
            <li>
              The B.Com. graduates can pursue Post Graduate Studies like M.Com.,
              MBA, MCA.
            </li>
            <li>
              After their Post Graduation, they may do M.Phil or Ph.D. and take
              teaching as their career in higher education institutions like
              Degree colleges and Universities
            </li>
            <li>
              Other Career Options: CA, CMA, CS, MPSC, UPSC, Banking Services,
              Insurance Sectors, Marketing, Company Secretary ship, Stock
              Exchange Services, Tax Consultancy, Management & Planning,
              Entrepreneurship, Law etc.
            </li>
          </ul>
        </div>
        <Footer />
      </>
    </div>
  );
}
