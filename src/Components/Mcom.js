import React from "react";
import Footer from "./Footer";

export default function Mcom() {
  return (
    <div>
      <>
        <div className="container mt-5">
          <h2 className="text-center">Master of Commerce (M.Com.)</h2>
          <p>
            M.Com is a Post-graduation course of 2 years duration having
            Semester Pattern (CBCS system). Specialization subject available in
            Advanced Accounting & Taxation, Commercial Law and Practices,
            Advanced Cost Accounting & Cost system, Business Administration,
            Advanced Banking & Finance, Advanced Marketing. The course teaches
            the students about the higher level concepts in the domain of
            Commerce.
          </p>
          <p>
            <b>Eligibility :</b>Students who have passed any degree of this
            university OR any other recognized university shall be admitted to
            M.Com. course.
          </p>
          <p>
            <b>Duration :</b> 2 Years
          </p>
          <p>
            <b>Intake :</b> 60 Students
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
            </tbody>
          </table>
          <b>Scope for Higher Studies after B.B.A.(CA)</b>
          <ul>
            <li>
              After their Post Graduation, they may do M.Phil or Ph.D. and take
              teaching as their career in higher education institutions like
              Degree colleges and Universities.
            </li>
            <li>MCA in Computer Science</li>
            <li>
              Other Career Options: CA, CMA, CS, MPSC, UPSC, Banking Services,
              Insurance Sectors, Marketing, Stock Exchange Services, Tax
              Consultancy, Management & Planning, Entrepreneurship, Law etc.
            </li>
          </ul>
        </div>
        <Footer />
      </>
    </div>
  );
}
