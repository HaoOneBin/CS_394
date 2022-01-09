import React, { useState, useEffect } from "react";
import Course from "./Course.js";
import {
  hasConflict,
  meetsPat,
  timeParts,
  mapValues,
  addCourseTimes,
  addScheduleTimes,
  days,
  daysOverlap,
  hoursOverlap,
  timeConflict,
  courseConflict,
  terms,
  getCourseNumber,
  getCourseTerm,
} from "../utilities/times.js";

const TermButton = ({ term, setTerm, checked }) => (
  <>
    <input
      type="radio"
      id={term}
      className="btn-check"
      autoComplete="off"
      checked={checked}
      onChange={() => setTerm(term)}
    />
    <label class="btn btn-success m-1 p-2" htmlFor={term}>
      {term}
    </label>
  </>
);

const TermSelector = ({ term, setTerm }) => (
  <div className="btn-group">
    {Object.values(terms).map((value) => (
      <TermButton
        key={value}
        term={value}
        checked={value === term}
        setTerm={setTerm}
      />
    ))}
  </div>
);

const CourseList = ({ courses }) => {
  const [term, setTerm] = useState("Fall");
  const [selected, setSelected] = useState([]);
  const termCourses = Object.values(courses).filter(
    (course) => term === getCourseTerm(course)
  );

  return (
    // empty element syntax <> is a way to return several components as one
    <>
      <TermSelector term={term} setTerm={setTerm} />
      <div className="course-list">
        {termCourses.map((course) => (
          <Course
            key={course.id}
            course={course}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </>
  );
};

export default CourseList;
