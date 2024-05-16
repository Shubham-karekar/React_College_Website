import React from "react";
import Footer from "./Footer";

export default function Bba() {
  return (
    <div>
      <>
        <div className="container mt-5">
          <h2 className="text-center">
            Bachelor Of Business Administration(BBA)
          </h2>
          <p>
            Bachelor of Business Administration (BBA) is a 3 years Graduation
            Course having 6 semesters. The course teaches the students about the
            higher level concepts in the domain of Business Administration in
            multifold specializations as Marketing Management, HRM, and
            Financial Management. The degree is designed such way to give a
            broad knowledge of the functional aspects of a company and their
            interconnection. Many programs incorporate training and practical
            experience, in the form of case projects, presentations, industrial
            visits, and interaction with experts from the industry.
          </p>
          <p>
            <b>Eligibility :</b> H.S.C. (10+2) or its equivalent Examination
            with 40% marks from any stream. (35% for Reserved category and 40%
            for Open category candidate as per maharashtra state government
            rules) and English as one of the Subjects.
          </p>
          <p>
            <b>Duration :</b> 3 Years
          </p>
          <p>
            <b>Intake :</b> 80 Students
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
                <td>
                  <a
                    href="https://www.youtube.com/watch?v=iSAoMkkvO4A&list=PLDZnaaLFHHIW2bwO8T_A1mSJcAdir2AGS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Syllabus_Link
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Second Year</td>
                <td>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    Syllabus_Link
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Third Year</td>
                <td>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    Syllabus_Link
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <b>Scope for Higher Studies after B.B.A.(CA)</b>
          <p>
            There are many higher studies options for those who have pursued
            BBA. Higher studies will help the students to get placed in better
            positions. Some of those options are given below
          </p>
          <ul>
            <li>MCA in Computer Management</li>
            <li>MCA in Computer Science</li>
            <li>Master in Business Administration</li>
          </ul>
        </div>
        <Footer />
      </>
    </div>
  );
}
