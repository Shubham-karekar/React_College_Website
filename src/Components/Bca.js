import React from "react";
import Footer from "./Footer";

export default function Bca() {
  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center">B.B.A. (Computer Application)</h2>
        <p>
          BBA(CA) previously known as B.C.A Bachelor of Computer Application is
          an under- graduate course of 3 years duration having 6 semesters. The
          course teaches the students about the basic concepts of programming
          languages and its applications with complementary knowledge related to
          management and accounting. This degree course is best option which
          encompasses the entry point for all streams students to make a career
          in computers.
        </p>
        <p>
          <b>Eligibility :</b> H.S.C. (10+2) or its equivalent Examination with
          40% marks from any stream. (35% for Reserved category and 40% for Open
          category candidate as per maharashtra state government rules) and
          English as one of the Subjects.
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
                  href="https://www.youtube.com/watch?v=FQsZVZqjA0w&list=PLDZnaaLFHHIUZ6yeW3hFFvJq8ishNCSOx"
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
                <a
                  href="https://www.youtube.com/watch?v=-w9XCG3o3ME&list=PLDZnaaLFHHIUZROPhO_8pCEC1WmwPcujy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Syllabus_Link
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Third Year</td>
              <td>
                <a
                  href="https://www.youtube.com/watch?v=aZry3zlB60I&list=PLDZnaaLFHHIVOWs0EHhlXdnAF8S8RZrUp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Syllabus_Link
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <b>Scope for Higher Studies after B.B.A.(CA)</b>
        <p>
          There are many higher studies options for those who have pursued
          BBA-(CA). Higher studies will help the students to get placed in
          better positions and will improve their remuneration. Some of those
          options are given below.
        </p>
        <ul>
          <li>MCA in Computer Management</li>
          <li>MCA in Computer Science</li>
          <li>Master in Business Administration</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
